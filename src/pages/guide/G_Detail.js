import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import "./G_Detail.css";
import { FcOnlineSupport } from "react-icons/fc";
import swal from '@sweetalert/with-react';
 

function G_Detail(props) {
   
    const [g_no, setG_no] = useState("");
    const [g_title, setG_title] = useState("");
    const [g_writer, setG_writer] = useState("");
    const [g_content, setG_content] = useState("");
    const [g_category, setG_category] = useState("");

    // 운영자만 수정, 삭제 가능
    const token = localStorage.getItem('token');
    const user_name = localStorage.getItem('name');

    //console.log('토큰 : ', token);
    //console.log('유저 권한 : ', user_name);

    let history = useHistory();
    
    useEffect(() => {
        axios   
            .get("http://localhost:8004/app/guide/detail.do", {
                params: {
                    g_no: seq,
                },
            })
            .then((result) => {
                console.log("result는 ? ", result);
                console.log("g_category",result.data.g_category);

                setG_no(result.data.g_no);
                setG_title(result.data.g_title);
                setG_writer(result.data.g_writer);
                setG_content(result.data.g_content);
                setG_category(result.data.g_category);
                
                // console.log("detail ajax 성공");
            })
            .catch((error)=>{
                console.log("error", error);
            });
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
                        + g_no,
                        {
                            data: {
                                g_no: g_no,
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
    // let findGuide = props.data.find(function (guide) {
    //     console.log("guide>>>",guide);
    //     return guide.g_no == seq;
    // });

    // let newData = {
    //     g_no, g_title, g_writer, g_content, g_category
    // }
    // console.log("newData>>>>",newData);

    return (
        <div className="div-G_Detail">

        <Link to="/guide/G_List">      
        <h3><FcOnlineSupport size='40' style={{ marginRight: '5px' }}/>
        artfor 헬프센터
        <FcOnlineSupport size='40' style={{ marginLeft: '5px' }}/></h3>
        </Link>

            <div className="div2">
                <table className="table-G_Detail">
                <tbody>
                    <tr>
                        <th className="th">카테고리</th>
                        <td className="td">{g_category}</td>
                    </tr>
                    <tr>
                        <th className="th">번호</th>
                        <td className="td">{g_no}</td>
                    </tr>
                    <tr>
                        <th className="th">제목</th>
                        <td className="td">{g_title}</td>
                    </tr>
                    <tr>
                        <th className="th">작성자</th>
                        <td className="td">{g_writer}</td>
                    </tr>
                </tbody>
                </table>
                <div className="td-g_content">
                    {/* 줄바꿈 적용하는 법 */}
                    {g_content.split("\n").map((line) => {
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
            {
                (user_name == '관리자' && token)
                ? <div>
                   <Button onClick={del} variant="dark" className="btn1">삭제</Button>
                   <Button className="btn1" variant="dark"
                        onClick={() => {
                        history.push(`/guide/G_Update/${g_no}`);
                        }}
                    >
                        수정
                    </Button>
                    </div>
                : <div></div>
            }
         
            
            <div>
            <Link to="/guide/G_List"><Button variant="light" className="btn2">목록으로</Button></Link>
            </div>
        </div>
    )
}

export default G_Detail;