import axios from "axios";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router";

function G_Detail(props) {
    let history = useHistory();
    useEffect(() => {
        axios   
            .get("http://localhost:8004/app/guide/detail.do", {
                params: {
                    g_no: seq,
                },
            })
            .then((result) => {
                console.log(result);
                console.log("detail ajax 성공");
            })
            .catch(console.log("detail ajax 실패"));
    }, []);

    //delete 함수
    function del() {
        axios
            .delete(
                "http://localhost:8004/app/guide/delete.do?g_no="
                + findGuide.g_no,
                {
                    data: {
                        g_no: findGuide.g_no,
                    },
                }
            )
            .then((findGuide) => {
                console.log("delete 요청 성공");
                console.log("");
                history.push("/guide/G_List");
            })
            .catch((err) => {
                console.log("delete 요청 실패", err);
            });
    }

    let { seq } = useParams();
    console.log("seq >>> ", seq);

    // detail find 함수 이용해서 데이터 가져오기
    let findGuide = props.data.find(function (guide) {
        return guide.g_no == seq;
    });

    return (
        <div>
            <p>글번호: {findGuide.g_no}</p>
            <p>글제목: {findGuide.g_title}</p>
            <p>작성자: {findGuide.g_writer}</p>
            <p>글내용: {findGuide.g_content}</p>
            {findGuide.fileName}
            {
            findGuide.fileName === null 
            ? null 
            : (
                <p>
                <img src={`images/${findGuide.fileName}`} />
                </p>
            )
            }
            {/* <p><img src= {`image/${findGuide.fileName}`} /></p> */}
            <Button onClick={del}>삭제</Button>
            <Button
                onClick={() => {
                history.push(`/guide/G_Update/${findGuide.g_no}`);
                }}
            >
                수정
            </Button>
      {/* <button onClick={()=>{useHistory()}}></button> */}
        </div>
    )
}

export default G_Detail;