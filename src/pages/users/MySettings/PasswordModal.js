import axios from "axios";
import { inject, observer } from "mobx-react";
import { useRef, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";

function PasswordModal(props){
  const { membersStore } = props;
  const { members, member } = membersStore;
  
  const [now_pw, setNow_pw] = useState('');
  const [modify_pw1, setModify_pw1] = useState('');
  const [modify_pw2, setModify_pw2] = useState('');
  
  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    
    if (name === "now_pw") {
      setNow_pw(value);
    } else if (name === "modify_pw1") {
      setModify_pw1(value);
    } else if (name === "modify_pw2") {
      setModify_pw2(value);
    }
  };

  // const onClick = (e) => {
  //   e.preventDefault();
  //   member.user_pw = now_pw;
  //   console.log("member는? ", member);
  //   axios.post("http://localhost:8004/app/user/nameupdate", member)
  //   .then((response)=>{
  //       console.log("서버와 통신 성공", response);
  //       alert("이름 변경 성공!");
  //       sendValue(); 
  //       console.log("과연 이름은?");
  //       console.log(name);
  //       localStorage.setItem('name',name);
  //       const user_n = window.localStorage.getItem('name');
  //       console.log("user_n : ",user_n);
  //   })
  //   .catch((error)=>{
  //       console.log("error임", error);
  //   })
  // };
  
    return(
      <div>
        <p style={{fontSize:'15px', transform: "skew(-0.1deg)"}}>현재 비밀번호</p>
        <form>
          <InputGroup style={{width:'40%'}}>
            <FormControl
              style={{fontFamily:'Consolas', marginTop:'-5px', transform: "skew(-0.1deg)"}}
              type="password"
              name="now_pw"
              onChange={onChange}
              placeholder="현재 비밀번호"
              required="true"
              maxLength="20"
              minLength="2"
            />
          </InputGroup>
          <div style={{fontSize:'12px', marginTop:'13px', fontFamily:'NanumSquareR'}}>
            <p style={{transform: "skew(-0.1deg)"}}>비밀번호가 기억나지 않나요? <Link style={{color:'#3399ff', transform: "skew(-0.1deg)"}}>비밀번호 초기화</Link></p>
          </div>
          <br />
          <p style={{fontSize:'15px', transform: "skew(-0.1deg)"}}>변경할 비밀번호</p>
          <InputGroup style={{width:'40%'}}>
            <FormControl
              style={{fontFamily:'Consolas', marginTop:'-5px', transform: "skew(-0.1deg)"}}
              type="password"
              name="modify_pw1"
              onChange={onChange}
              placeholder="변경할 비밀번호"
              required="true"
              maxLength="20"
              minLength="2"
            />
          </InputGroup>
          <InputGroup style={{width:'40%'}}>
            <FormControl
              style={{fontFamily:'Consolas', marginTop:'10px', transform: "skew(-0.1deg)"}}
              type="password"
              name="modify_pw2"
              onChange={onChange}
              placeholder="변경할 비밀번호 확인"
              required="true"
              maxLength="20"
              minLength="2"
            />
          </InputGroup>
          <br />
          <Button variant="dark" style={{width:'80px', transform: "skew(-0.1deg)"}} type="submit">저장</Button>
        </form>
      </div>
    )
  }

const Warning = styled.div`
  color: red;
  font-size: 13px;
`;

export default inject("membersStore")(observer(PasswordModal));