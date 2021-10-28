import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './G_Input.css'


function G_Input(props) {
    // App.js의 데이터 props로 받아오기

    const InputData = (result) => {
        console.log("G_Input >> InputData ...");
        console.log(result);
        let dataA = result.data.list2;
    
        props.setData([...dataA]);
    };

    const [g_title, setG_title] = useState("");
    const [g_writer, setG_writer] = useState("");
    const [g_content, setG_content] = useState("");
    const [attachment, setAttachment] = useState("");

    let history = useHistory();

    const onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === "g_title") {
            setG_title(value);
        } else if (name === "g_writer") {
            setG_writer(value);
        } else if (name === "g_content") {
            setG_content(value);
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(event.target); //<form></form>이 들어온다
        // 그냥 폼은 태그 엘리먼트일뿐이기에 FormData 타입으로 변경해야한다
        
        let form = event.target;
        let data = new FormData(form);
        // 파일 전송 중에는 submit이 비활성화 되도록??
    
        axios
            .post("http://localhost:8004/app/guide/input.do", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((result) => {
                InputData(result);
                console.log("ajax 요청 성공");
                console.log("data >>> ", data);
                history.push("/");
            })
            .catch((err) => {
                console.log("ajax 요청 실패");
                console.log("data >>>", data);
            });
    };

    // const onFileChange = (event) => {
    //     console.log(event.target.files[0]);
    //     const {
    //         target: { files },
    //     } = event;
    //     const reader = new FileReader();

    //     reader.onloadend = (progressEvent) => {
    //         const {
    //             currentTarget: { result },
    //         } = progressEvent;
    //         // 파일 보여주기
    //         setAttachment(result);
    //     };
    //     reader.readAsDataURL(files[0]);
    // };

    return (
        <div className="container_guide">
            <h2 className="guideInput-title">이용안내 입력창</h2>
            <div className="container-guide-input">
                
                <form onSubmit={onSubmit}>

                <div className="input-text-1">
                
                
                <input className="input-text-1" label="제목" variant="filled" color="success" 
                type="text"
                name="g_title"
                value={g_title}
                onChange={onChange} 
                style={{ width : '500px' }}
                />
                
                </div>
                
                <div>
                <input label="작성자" variant="filled" color="success" type="text"
                name="g_writer"
                value={g_writer}
                onChange={onChange}
                style={{ width : '500px' }}/> 
                </div>
              
                <div>
                <input
                    variant="filled" color="success"
                    id="outlined-multiline-flexible"
                    label="내용"
                    type="text"
                    name="g_content"
                    multiline
                    maxRows={10}
                    minRows={10}
                    value={g_content}
                    onChange={onChange}
                    style={{ width : '500px' }}
                    />
                    </div>
              
                {/* <div className="guide-file">
                <input type="file" name="uploadFile" onChange={onFileChange} 
                style={{ width : '500px' }} />
                </div> */}
 
           
                <div className="guideInput-Btn-submit">
                <input type="submit" value="글쓰기" style={{ width: '70px', backgroundColor: 'black', color: 'white' }}/>
                </div>
                
                </form>
            </div>
        </div>
    )

}

export default G_Input