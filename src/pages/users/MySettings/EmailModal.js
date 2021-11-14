import axios from "axios";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap"
import { axiosError } from "../../../stores/common";
import EmailAuthModal from "./EmailAuthModal";

function EmailModal(props){

  const { membersStore } = props;
  const { members, member } = membersStore;
  const [email, setEmail] = useState(member.user_email);
  const [condition, setCondition] = useState(1);
  const emailC = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  
  const middleValue = (value) => {
    props.textEValue(value);
  }

  const onChange = (e) => {
    let value = e.target.value;
    setEmail(value);
  };

  const confirmEmail = (e) => {
    e.preventDefault();

    let emailresult = emailC.test(email);

    if (email === "") {
      setCondition(2);
      return false;
    } else if (emailresult === false) {
      console.log("아니다");
      setCondition(3);
      return false;
    } 
    
    if(email === member.user_email) {
      setCondition(4);
      return false;
    }

    if(emailresult === true){
      console.log("맞다");
      setCondition(5);
      setEmail(email);
      console.log(email);
    } 

    let data = {
      user_name : member.user_name,
      user_email : email,
    };
    axios.post("http://localhost:8004/app/user/mailConfirm2", data)
    .then((response) => {
      console.log("이메일 연결 성공", response);
      const result = response.data;
      console.log("result", result);

      if (result === 1) {
        setCondition(6);
        // alert("메일에서 인증번호를 확인해 주세요");
      } else if (result === -1) {
        alert("이미 가입된 이메일입니다.");
      } else {
        alert("이메일 전송에 실패하였습니다.");
      }
    })
    .catch((error) => {
      axiosError(error);
      console.log("실패");
    });
  };

    return(
      <div>
        <form >
          <InputGroup style={{width:'40%', float:'left'}}>
            <FormControl
              style={{transform: "skew(-0.1deg)"}}
              type="email"
              spellCheck="false"
              placeholder="이메일 입력"
              value={email}
              onChange={onChange}
              />
          </InputGroup>
          <Button variant="dark" style={{marginLeft:'15px', width:'120px', transform: "skew(-0.1deg)"}} onClick={confirmEmail} >인증메일 전송</Button>
          {condition === 2
          && <p style={{ marginTop:'10px', color:'red', fontSize:'13px', transform: "skew(-0.1deg)" }}>이메일을 입력해주세요.</p>
          }
          {condition === 3
          && <p style={{ marginTop:'10px', color:'red', fontSize:'13px', transform: "skew(-0.1deg)" }}>이메일 형식이 아닙니다.</p>
          }
          {condition === 4
          && <p style={{ marginTop:'10px', color:'red', fontSize:'13px', transform: "skew(-0.1deg)" }}>현재 등록된 이메일입니다.</p>
          }
          {condition === 5
          && <p style={{ marginTop:'10px', color:'blue', fontSize:'13px', transform: "skew(-0.1deg)" }}>인증번호 전송 중 ...</p>
          }
          {condition === 6
          && <>
              <p style={{ marginTop:'10px', color:'blue', fontSize:'13px', transform: "skew(-0.1deg)" }}>이메일로 전송 완료!</p>
              <EmailAuthModal email={email} setEmail={setEmail} middleValue={middleValue}/>
            </>
          }
        </form>
      </div>
    )
}
export default inject("membersStore")(observer(EmailModal));