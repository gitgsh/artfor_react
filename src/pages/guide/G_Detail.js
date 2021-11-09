import axios from "axios";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import "./G_Detail.css";
import { FcOnlineSupport } from "react-icons/fc";
import swal from '@sweetalert/with-react';
 

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
                // console.log(result);
                // console.log("detail ajax 성공");
            })
            .catch();
    }, []);

    //delete 함수
    function del() {
        // 삭제 확인 sweet alert 창 
        swal({
            title: "정말 삭제하시겠습니까?", 
            text: "삭제하시면 복구가 불가능합니다",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }) 
        .then ((willDelete)=>{
            if (willDelete) {
                swal("삭제되었습니다!!", {
                    icon: "success",
                });
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
                        history.push("/guide/G_List");
                    })
                    .catch((err) => {
                        console.log("delete 요청 실패", err);
                    });
            }
        });
         
    }

    let { seq } = useParams();
    console.log("seq >>> ", seq);

    // detail find 함수 이용해서 데이터 가져오기
    let findGuide = props.data.find(function (guide) {
        return guide.g_no == seq;
    });

    return (
        <div className="div-G_Detail">

        <Link to="/guide/G_List">      
        <h3><FcOnlineSupport size='40' style={{ marginRight: '5px' }}/>
        artfor 가이드센터
        <FcOnlineSupport size='40' style={{ marginLeft: '5px' }}/></h3>
        </Link>

            <div className="div2">
                <table className="table-G_Detail">
                <tbody>
                    <tr>
                        <th className="th">카테고리</th>
                        <td className="td">{findGuide.g_category}</td>
                    </tr>
                    <tr>
                        <th className="th">번호</th>
                        <td className="td">{findGuide.g_no}</td>
                    </tr>
                    <tr>
                        <th className="th">제목</th>
                        <td className="td">{findGuide.g_title}</td>
                    </tr>
                    <tr>
                        <th className="th">작성자</th>
                        <td className="td">{findGuide.g_writer}</td>
                    </tr>
                </tbody>
                </table>
                <div className="td-g_content">
                    {/* 줄바꿈 적용하는 법 */}
                    {findGuide.g_content.split("\n").map((line) => {
                        return (
                            <span>
                            {line}
                            <br />
                            </span>
                        );
                    })}
                </div>
            </div>       

            {/* {findGuide.fileName}
            {findGuide.fileName === null 
            ? null 
            : (
                <p>
                <img src={`images/${findGuide.fileName}`} />
                </p>
            )
            } */}
            {/* <p><img src= {`image/${findGuide.fileName}`} /></p> */}

            {/* 삭제, 수정 버튼 운영자만 보이도록 설정하기 !!! */}
            <Button onClick={del} variant="dark" className="btn1">삭제</Button>
            <Button className="btn1" variant="dark"
                onClick={() => {
                history.push(`/guide/G_Update/${findGuide.g_no}`);
                }}
            >
                수정
            </Button>
            <div>
            <Link to="/guide/G_List"><Button variant="light" className="btn2">목록으로</Button></Link>
            </div>
        </div>
    )
}

export default G_Detail;