import axios from "axios";
import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./List.css";

function List(props) {

  console.log(props.data);

  useEffect(() => {
    console.log(">>> G_list로 들어옴");
    // componentDidMount
    // 컴포넌트가 화면에 나타날 때 실행하고 싶은 함수를 이 곳에 넣는다.

    axios
      .get("http://localhost:8004/app/guide/list.do")
      .then((result) => {
        console.log("ajax 요청 성공함");
        console.log("dd", result);

        let dataA = result.data.list2;

        props.setData([...dataA]);
      })
      .catch((err) => {
        console.log("dd", err);
        console.log("ajax 요청 실패함", err);
      });
  }, []);

  return (
    <div className="container-guide">
      <h3 className="page-name">이용안내 게시판</h3>
      <div className="div-guide-table">
        <Table hover>
          <thead className="t-head">
            <tr>
              <th>no</th>
              <th>title</th>
              <th>writer</th>
              <th>content</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.g_no}</td>
                  <td><Link to="">{data.g_title}</Link></td>
                  <td>{data.g_writer}</td>
                  <td>{data.g_content}</td>
                  <td>{data.g_day}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Link to="./G_Input">
        <Button className="guide-writeBtn" variant="dark">
          글쓰기
        </Button>
      </Link>{" "}
    </div>
  );
}
export default List;
