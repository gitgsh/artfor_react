import axios from "axios";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { axiosError } from "../../../stores/common";
import PhoneAuthModal from "./PhoneAuthModal";

function PhoneModal(props){

  const { membersStore } = props;
  const { members, member } = membersStore;

  const [phone, setPhone] = useState();
  const [condition, setCondition] = useState(1);
  const phoneC = /[^0-9]/;

  const middleValue = (value) => {
    props.textPValue(value);
  }

  useEffect(()=>{
    if(member.user_phone === "null"){
      setPhone('');
    } else {
      setPhone(member.user_phone);
    }
  }, [membersStore])

  const onChange = (e) => {
    let value = e.target.value;
    setPhone(value);
  };

  const confirmPhone = (e) => {
    e.preventDefault();

    let phoneresult = phoneC.test(phone);

    if (phone === "") {
      setCondition(2);
      return false;
    } else if (phoneresult === false) {
      console.log("아니다");
      setCondition(3);
      return false;
    } 

    if(phone === member.user_phone) {
      setCondition(4);
      return false;
    }

    if(phoneresult === true){
      console.log("맞다");
      setCondition(5);
      setPhone(phone);
      console.log(phone);
    } 

    let data = {
      user_name : member.user_name,
      user_phone : phone,
    };
    console.log("data는?");
    console.log(data);

    // let data = phone;

    axios.post("http://localhost:8004/app/user/sendSMS", data)
    .then((response) => {
      console.log("이메일 연결 성공", response);
      const result = response.data;
      console.log("result", result);

      if (result === 1) {
        setCondition(6);
        // alert("인증번호를 확인해 주세요");
      } else if (result === -1) {
        alert("이미 가입된 연락처입니다.");
      } else {
        alert("인증번호 전송에 실패하였습니다.");
      }
    })
    .catch((error) => {
      axiosError(error);
      console.log("실패");
    });
  }

    return(
      <div>
        <form>
          <InputGroup style={{width:'40%', float:'left'}}>
            <FormControl
              style={{transform: "skew(-0.1deg)"}}
              type="text"
              spellCheck="false"
              placeholder="예) 010-0000-0000"
              value={phone}
              onChange={onChange} />
          </InputGroup>
          <Button variant="dark" style={{marginLeft:'15px', width:'120px', transform: "skew(-0.1deg)"}} onClick={confirmPhone}>인증번호 전송</Button>
          {condition === 2
          && <p style={{ marginTop:'10px', color:'red', fontSize:'13px', transform: "skew(-0.1deg)" }}>핸드폰번호를 입력해주세요.</p>
          }
          {condition === 3
          && <p style={{ marginTop:'10px', color:'red', fontSize:'13px', transform: "skew(-0.1deg)" }}>핸드폰 형식이 아닙니다. -을 넣어주세요.</p>
          }
          {condition === 4
          && <p style={{ marginTop:'10px', color:'red', fontSize:'13px', transform: "skew(-0.1deg)" }}>현재 등록된 핸드폰번호 입니다.</p>
          }
          {condition === 5
          && <p style={{ marginTop:'10px', color:'blue', fontSize:'13px', transform: "skew(-0.1deg)" }}>인증번호 전송 중 ...</p>
          }
          {condition === 6
          && <>
              <p style={{ marginTop:'10px', color:'blue', fontSize:'13px', transform: "skew(-0.1deg)" }}>전송 완료!</p>
              <PhoneAuthModal phone={phone} setPhone={setPhone}
               middleValue={middleValue}
               />
            </>
          }
        </form>
      </div>
    )
}
export default inject("membersStore")(observer(PhoneModal));