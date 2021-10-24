import axios from "axios";
import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

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
function InputDetail(props) {
  return (
    <div>
      <Table hover>
        <thead className="t-head">
          <tr>
            <th>no</th>
            <th>title</th>
            <th>writer</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((data, i) => {
            return (
              <tr key={i}>
                <td>{data.work_no}</td>
                <div
                  dangerouslySetInnerHTML={{ __html: data.work_content }}
                ></div>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
export default InputDetail;
