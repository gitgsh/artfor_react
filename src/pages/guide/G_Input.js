import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

function G_Input(props) {
    // App.js의 데이터 props로 받아오기

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
        // console.log(event.target); <form></form>이 들어온다
        // 그냥 폼은 태그 엘리먼트일뿐이기에 FormData 타입으로 변경해야한다
        
        let form = event.target;
        let data = new FormData(form);
        // 파일 전송 중에는 submit이 비활성화 되도록??
    
        axios
            .post("http://localhost:8004/app/guide/insert.do", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((result) => {
                props.changeData(result);
                console.log("ajax 요청 성공");
                console.log("data >>> ", data);
                history.push("/");
            })
            .catch((err) => {
                console.log("ajax 요청 실패");
                console.log("data >>>", data);
            });
    };

    const onFileChange = (event) => {
        console.log(event.target.files[0]);
        const {
            target: { files },
        } = event;
        const reader = new FileReader();

        reader.onloadend = (progressEvent) => {
            const {
                currentTarget: { result },
            } = progressEvent;
            // 파일 보여주기
            setAttachment(result);
        };
        reader.readAsDataURL(files[0]);
    };

    return (
        <div>
            <h2>Guide 입력창</h2>
            <form onSubmit={onSubmit}>
                제목 :{" "}
                <input
                type="text"
                name="g_title"
                value={g_title}
                onChange={onChange}
                />
                <br />
                작성자 :{" "}
                <input
                type="text"
                name="g_writer"
                value={g_writer}
                onChange={onChange}
                />{" "}
                <br />
                내용 :{" "}
                <input
                type="text"
                name="g_content"
                value={g_content}
                onChange={onChange}
                />{" "}
                <br />
                파일 : <input type="file" name="uploadFile" onChange={onFileChange} />
                <input type="submit" value="저장" />
            </form>
        </div>
    )

}

export default G_Input