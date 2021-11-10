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

    let data = {
      work_content: work_content,
    };

    axios
      .post("http://localhost:8004/app/inputc.do", data)
      .then((result) => {
        console.log("성공");
        console.log("dd", data);
      })
      .catch((err) => {
        console.log("실패함", err);
      });
  };
  editorRef = React.createRef();

  render() {
    return (
      <>
        <Editor
          previewStyle="vertical"
          height="400px"
          initialEditType="wysiwyg"
          initialValue=""
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
          plugins={[colorSyntax]}
          ref={this.editorRef}
        />
        <div id="toastUIEditor" style={{ margin: "0 auto" }}>
          <div id="button" style={{ display: "block", paddingTop: "17px" }}>
            <Button
              onClick={this.handleChangeEditor}
              variant="dark"
              style={{ width: "80px" }}
            >
              저장
            </Button>
          </div>
          <div>
          </div>
        </div>
      </>
    );
  }
}
export default InputPage;