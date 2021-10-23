import axios from "axios";
import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./list.css";

function List(props) {
  console.log(props.data);
  useEffect(() => {
    console.log("list로 들어옴");
    // componentDidMount
    // 컴포넌트가 화면에 나타날 때 실행하고 싶은 함수를 이 곳에 넣는다.
    axios
      .get("http://localhost:8004/app/guide/list.do")
      .then((result) => {
        console.log("아작스요청 성공함");
        console.log("dd", result);

        let dataA = result.data.list2;

        props.setData([...dataA]);
      })
      .catch((err) => {
        console.log("dd", err);
        console.log("아작스요청 실패함", err);
      });
  }, []);
  return (
    <div>
      <h3 className="page-name">Guide 게시판</h3>
      <div className="div-qna-table">
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
                  <td>{data.g_no}</td>
                  <td>{data.g_title}</td>
                  <td>{data.g_writer}</td>
                  <td>{data.g_day}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Link to="/write/input">
        <Button className="qna-writeBtn" variant="dark">
          글쓰기
        </Button>
      </Link>{" "}
    </div>
  );
}

export default List;
