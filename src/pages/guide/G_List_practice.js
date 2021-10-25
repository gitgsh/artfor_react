import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./List.css";

function G_List_practice(props) {

  let [제목, 제목변경함수] = useState(['아트포(artfor)는 무엇인가요?', '크라우드펀딩과 후원이란 무엇인가요?', '펀딩 수수료는 얼마인가요?', '지식재산권 침해 신고 가이드']);

  let [modal, setModal] = useState(true);
  let [title, setTitle] = useState(0);

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
      <div>
      <Link to="./G_Input">
        <Button className="guide-writeBtn" variant="dark">
          글쓰기
        </Button>
      </Link>{" "}
      </div>
      <div className="div-guide">
      <div className="div-guide-list">
          {/* <tbody>
            {props.data.map((data, i) => {
              return (
                <div key={i}>
                  <h3 onClick={ () => {
                    setTitle(i)
                  }} >{data.g_title}</h3>
                  <p>{data.g_day} 발행</p>
                </div>
              );
            })}
          </tbody> */}
          <div className="div-guide-list-1">
            {
              제목.map(function(글,i) {
                return (
                  <div key={i}>
                    <div className="div-guide-list-1" onClick={()=>{
                      setTitle(i)
                    }}><Link to={modal}>{ 글 }</Link></div>
                  </div>
                )
              })
            }
            </div>
        </div>

      <div className="guide-modal">
            {/* {props.data.map((data, i) => {
              return (
                <div key={i}>
                  <div>{data.g_no}</div>
                  <div>{data.g_title}</div>
                  <div>{data.g_writer}</div>
                  <div>{data.g_content}</div>
                  <div>{data.g_day}</div>
                </div>
              );
            })}  */}
            {
              modal === true
              ? <ModalPage 제목={제목} title={title}></ModalPage>
              : null
            }
      </div>
</div>
    </div>
  );
}

  function ModalPage(props) {
    return (
      <div>
        <h2>{props.제목[props.title]}</h2>
        <p>날짜</p>
        <p>내용</p>
      </div>
    )
  }


export default G_List_practice;
