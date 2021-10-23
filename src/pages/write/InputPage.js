import axios from "axios";
import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
// color syntax
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
// high lighter
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";

import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
class InputPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      work_content: "",
    };
    this.handleChangeEditor = this.handleChangeEditor.bind(this);
  }
  handleChangeEditor = (e) => {
    let work_content = this.editorRef.current.getInstance().getHTML();
    // console.log("ddd", content);
    // // console.log("json", JSON.stringify(data));
    // // console.log("String", data.toString());
    // //getHTML
    let data = {
      work_content: work_content,
    };

    axios
      .post("http://localhost:8004/app/input.do", data)
      .then((result) => {
        console.log("성공");
        console.log("dd", data);
      })
      .catch((err) => {
        console.log("실패함", err);
      });
  };
  editorRef = React.createRef();

  // handleClick = () => {
  //   this.editorRef.current.getInstance().exec("Bold");
  // };

  render() {
    return (
      <>
        <Editor
          previewStyle="vertical"
          height="400px"
          initialEditType="markdown"
          initialValue="hello"
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
          plugins={[colorSyntax]}
          ref={this.editorRef}
        />
        <div id="toastUIEditor">
          <h1>Exmaple</h1>
          <div id="button">
            <button onClick={this.handleChangeEditor} className="btn_save">
              Save
            </button>
          </div>
          <div>
            <h2>Result</h2>
            <div
              dangerouslySetInnerHTML={{ __html: this.state.work_content }}
            ></div>
            <textarea
              className="result"
              value={this.state.work_content}
              readOnly="readOnly"
            ></textarea>
          </div>
        </div>
      </>
    );
  }
}
export default InputPage;
