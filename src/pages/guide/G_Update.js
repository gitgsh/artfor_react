import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { Button } from "react-bootstrap";
import "./G_Update.css";

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
    
    let history = useHistory();

    const onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "g_title") {
            setG_title(value);
        } else if (name === "g_content") {
            setG_content(value);
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
            <h2 className="h2">이용안내 수정창</h2>
            <form>
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
                    </div>
          
                </div>
            </form>


        </div>
    )
}

export default G_Update;