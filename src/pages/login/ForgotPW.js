import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../CSS/login/Login.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { axiosError } from "../../stores/common";
import styled from 'styled-components';


function ForgotPW(props) {
  const [userinfo, setUserinfo] = useState({
    user_id: "",
    user_pw: "",
  });

  let result = 0;

  const {register,handleSubmit,formState: { errors }} = useForm();
  const onSubmit = (data) => {
    console.log("데이터>>>", data);

    setUserinfo(data);
    console.log("유저인포", userinfo);

    axios
      .post("http://localhost:8004/app/user/findPW", data)
      .then((response) => {
        console.log("find PW post", response);
        result = response.data;
        console.log("result", result);

        if (result === 1) {
          alert("사용하지 않는 이메일입니다.");
        } else if(result === 0) {
          alert("이메일로 비밀번호가 전송되었습니다.");
        }else{
          alert("이메일 전송 실패");
        }
      })
      .catch((error) => {
        axiosError(error);
      });
  };

  return (
    <div>
      <div className="container">
        <h3 className="login">
          <strong>비밀번호 찾기</strong>
        </h3>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="login-form-input-1">
            <InputGroup>
              <FormControl
                className="login-form-input-row"
                type="email"
                placeholder="이메일 입력"
                aria-label="Recipient's username with two button addons"
                {...register("user_email", { required: true, pattern: /^\S+@\S+$/i} )}
              />
            </InputGroup>
            {errors.user_email?.type === "required" && (<InputGroup><Warning>이메일을 입력해주세요</Warning></InputGroup>)}
            {errors.user_email?.type === "pattern" && (<InputGroup><Warning>올바른 이메일 형식이 아닙니다.</Warning></InputGroup>)}
          </div>
          <div className="div-loginBtn">
            <Button className="loginBtn" variant="dark" type="submit">
              비밀번호 찾기
            </Button>{" "}
          </div>
        </form>

        <p className="question-join">
        아트포 가입 시 사용하신 이메일을 입력하시면 임시 비밀번호를 보내드립니다.
        </p>
        <hr className="hr" />
          <Link className="question-pw" to="/login">로그인</Link>

      </div>
    </div>
  );
}

const Warning = styled.div`
color : red ;
font-size : 13px;
`;

export default ForgotPW; 
