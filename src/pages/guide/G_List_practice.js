import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function G_List_practice(props) {

return (
<Table striped bordered hover>
  <thead>
    <tr>
      <th>제목</th>
      <th>글쓴이</th>
      <th>날짜</th>
    </tr>
  </thead>
      {
        props.data.map((d, i) => {
          return (
            <tbody key={i}>
              <td>{d.g_title}</td>
              <td>{d.g_writer}</td>
              <td>{d.g_day}</td>
            </tbody>
          )
        })
      }


</Table>  
)
}


export default G_List_practice;
