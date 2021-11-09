import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { Button } from "react-bootstrap";
import "./G_Update.css";
import { FormControl, InputLabel, MenuItem, NativeSelect, Select  } from "@mui/material";


function G_Update(props) {

    const updateData = (result) => {
        console.log("App의 updataData ...");
        let dataA = result.data.list2;
        console.log(result);
    
        props.setData([...dataA]);
        // updateData={updateData}
    };

    let [ldata, setLdata] = useState([props.data]);
    console.log("data ===> ", ldata);

    let {seq} = useParams();
    console.log("u >> seq >>> ", seq);

    console.log("props.data ==>", props.data);
    console.log("ldata ==>", ldata);

    let findGuide = props.data.find(function (guide) {
        console.log("guide", guide.g_no);

        return guide.g_no == seq;
    });
    
    const [g_no, setG_no] = useState(findGuide.g_no);
    const [g_title, setG_title] = useState(findGuide.g_title);
    const [g_writer, setG_writer] = useState(findGuide.g_writer);
    const [g_content, setG_content] = useState(findGuide.g_content);
    const [g_category, setG_category] = useState(findGuide.g_category);
    
    let history = useHistory();

    const onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "g_title") {
            setG_title(value);
        } else if (name === "g_content") {
            setG_content(value);
        } else if (name === "g_category") {
            setG_category(value);
        }

        console.log(g_title);
    };

    const onClick = (event) => {
        event.preventDefault();

        let data = {
            g_no,
            g_title,
            g_writer,
            g_content,
            g_category,
        };

        axios
            .post("http://localhost:8004/app/guide/update.do", data)
            .then((result) => {
                console.log("ajax 요청 성공");

                updateData(result);

                history.push(`/guide/G_Detail/${findGuide.g_no}`);
            })
            .catch((err) => {
                console.log("ajax 요청 실패");
            });
    };


    return (
        <div>
            <h2 className="h2"></h2>
            <form>

                <FormControl sx={{ m: 1, minWidth: 700 }}>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        카테고리를 선택해주세요.
                    </InputLabel>
                    <NativeSelect
                        value={g_category}
                        onChange={onChange}
                        color="success"
                        inputProps={{
                        name: 'g_category',
                        id: 'uncontrolled-native',
                        }}
                    >
                        <option value={"일반"}>일반</option>
                        <option value={"후원자 질문"}>후원자 질문</option>
                        <option value={"프로젝트 올리기"}>프로젝트 올리기</option>
                        <option value={"시작하고 알리기"}>시작하고 알리기</option>
                    </NativeSelect>
                </FormControl>

                <div className="textFields">
                    <div>
                        <TextField className="input-text-1" label="제목" variant="standard" color="success" 
                        type="text"
                        name="g_title"
                        value={g_title}
                        onChange={onChange} 
                        style={{ width : '700px', padding: '10px 0px 0px 0px' }}/>
                    </div>

                    <div>
                        <TextField label="작성자" variant="standard" color="success" type="text"
                        name="g_writer"
                        value={g_writer}
                        onChange={onChange}
                        style={{ width : '700px', padding: '10px 0px 0px 0px' }}/> 
                    </div>
                
                    <div>
                    <TextField
                        variant="standard" color="success"
                        id="outlined-multiline-flexible"
                        label="내용"
                        type="text"
                        name="g_content"
                        multiline
                        maxRows={20}
                        minRows={10}
                        value={g_content}
                        onChange={onChange}
                        style={{ width : '700px', padding: '10px 0px 0px 0px' }}/>
                    </div>
              
           
                    <div className="guideInput-Btn-submit">
                    <Button type="submit" variant="dark"
                    onClick={onClick}>수정하기</Button>
                    <Button style={{ marginLeft: '15px' }} variant="light" onClick={ () => {
                        history.goBack();
                    }}>
                        취소</Button></div>
          
                </div>
            </form>


        </div>
    )
}

export default G_Update;