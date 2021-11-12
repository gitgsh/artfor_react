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

  const {register, watch, handleSubmit, formState: { errors }, getValues} = useForm();
  const modify_pw1 = useRef();
  modify_pw1.current = watch("user_pw");

  const [now_pw, setNow_pw] = useState('');
  
  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    // if (name === "now_pw") {
    //   setNow_pw(value);
    // }else if (name === "g_content") {
    //     setG_content(value);
    // } else if (name === "g_category") {
    //     setG_category(value);
    // }
  };
  
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
              {...register("now_pw", {
                required: true,
                maxLength: 20,
                minLength: 2,
              })}
            />
          </InputGroup>
          {errors.user_pw?.type === "required" && (
                <InputGroup>
                  <Warning>비밀번호를 입력해주세요</Warning>
                </InputGroup>
          )}
          {(errors.now_pw?.type === "maxLength" ||
            errors.now_pw?.type === "minLength") && (
            <InputGroup>
              <Warning>
                비밀번호는 2자 이상, 20자 이하로 입력하세요.
              </Warning>
            </InputGroup>
          )}
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
              {...register("modify_pw1", {
                required: true,
                maxLength: 20,
                minLength: 2,
              })}
            />
          </InputGroup>
          {errors.modify_pw1?.type === "required" && (
                <InputGroup>
                  <Warning>비밀번호를 입력해주세요</Warning>
                </InputGroup>
          )}
          {(errors.modify_pw1?.type === "maxLength" ||
            errors.modify_pw1?.type === "minLength") && (
            <InputGroup>
              <Warning>
                비밀번호는 2자 이상, 20자 이하로 입력하세요.
              </Warning>
            </InputGroup>
          )}
          <InputGroup style={{width:'40%'}}>
            <FormControl
              style={{fontFamily:'Consolas', marginTop:'10px', transform: "skew(-0.1deg)"}}
              type="password"
              name="modify_pw2"
              onChange={onChange}
              placeholder="변경할 비밀번호 확인"
              {...register("modify_pw2", {
                required: true,
                validate: (value) => value === modify_pw1.current,
              })}
            />
          {errors.umodify_pw2?.type === "required" && (
            <InputGroup>
              <Warning>비밀번호를 입력해주세요</Warning>
            </InputGroup>
          )}
          {errors.modify_pw2?.type === "validate" && (
            <InputGroup>
              <Warning>비밀번호가 일치하지 않습니다.</Warning>
            </InputGroup>
          )}
          </InputGroup>
          <br />
          <Button variant="dark" style={{width:'80px', transform: "skew(-0.1deg)"}}>저장</Button>
        </form>
      </div>
    )
  }

const Warning = styled.div`
  color: red;
  font-size: 13px;
`;

export default inject("membersStore")(observer(PasswordModal));