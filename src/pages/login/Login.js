import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../CSS/login/Login.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { axiosError } from "../../stores/common";
// import { styled } from "@mui/system";
import { inject, observer } from "mobx-react";
import styled from "styled-components";

// import { KakaoLogin } from "react-kakao-login";

function Login(props) {
  const { membersStore } = props;
  const { members, member } = membersStore;

  let user_email;

  let result = 0;

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    console.log("데이터>>>", data);

    axios
      .post("http://localhost:8004/app/user/login.do", data)
      .then((response) => {
        console.log("login post user to Spring", response);
        result = response.data;
        console.log("result", result);

        if (result === 0) {
          alert("이메일이 없습니다.");
        } else if (result === -1) {
          alert("비밀번호가 일치하지 않습니다.");
        } else {
          alert("로그인 완료");

          localStorage.setItem("token", true);
          user_email = getValues("user_email");
          localStorage.setItem("user_email", user_email);
          console.log("getvalue 성공", user_email);
          // localStorage.setItem('user_id',JSON.stringify(userinfo.user_id).slice(1,-1));
          getUserInfo();

          // props.history.push("/users/myproject");
          // window.location.replace("/users/myproject")
          // props.history.push("/");
        }
      })
      .catch((error) => {
        axiosError(error);
      });
  };

  //로그인 성공 시 유저 정보를 스토어에 저장
  function getUserInfo() {
    const data = { user_email: user_email };
    console.log("데이터>>", data);
    axios
      .post("http://localhost:8004/app/user/getUserInfo", data)
      .then((response2) => {
        console.log("mailConfirm post ", response2);
        const result = response2.data;
        console.log("result", result);

        member.user_name = result.user_name;
        member.user_email = result.user_email;
        member.user_address = result.user_address;
        member.user_phone = result.user_phone;
        member.user_role = result.user_role;
        console.log(member, "유저정보를보여주자");

        let name = result.user_name;
        let email = result.user_email;
        let address = result.user_address;
        let phone = result.user_phone;
        let role = result.user_role;
        console.log(typeof result.user_email, "타입이 뭐야?");

        window.localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("address", address);
        localStorage.setItem("phone", phone);
        localStorage.setItem("role", role);
        window.location.replace("/users/myproject")


      })
      .catch((error) => {
        axiosError(error);
        console.log("실패");
      });
  }

  return (
    <div>
      <div className="container">
        <h3 className="login">
          <strong>로그인</strong>
        </h3>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="login-form-input-1">
            <InputGroup>
              <FormControl
                className="login-form-input-row"
                type="email"
                placeholder="이메일 입력"
                aria-label="Recipient's username with two button addons"
                {...register("user_email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </InputGroup>
            {errors.user_email?.type === "required" && (
              <Warning>이메일을 입력해주세요</Warning>
            )}
            {errors.user_email?.type === "pattern" && (
              <Warning> 올바른 이메일 형식이 아닙니다.</Warning>
            )}
          </div>
          <div className="login-form-input-2">
            <InputGroup style={{ fontFamily: "Consolas" }}>
              <FormControl
                className="login-form-input-row"
                type="password"
                placeholder="비밀번호 입력"
                aria-label="Recipient's username with two button addons"
                {...register("user_pw", {
                  required: true,
                  maxLength: 20,
                  minLength: 2,
                })}
              />
            </InputGroup>
            {errors.user_pw?.type === "required" && (
              <Warning>비밀번호를 입력해주세요</Warning>
            )}
            {(errors.user_pw?.type === "maxLength" ||
              errors.user_pw?.type === "minLength") && (
              <Warning>비밀번호는 2자 이상, 20자 이하로 입력하세요.</Warning>
            )}
          </div>

          <div className="div-loginBtn">
            <Button className="loginBtn" variant="dark" type="submit">
              로그인
            </Button>{" "}
          </div>

          <p className="question-join">
            아직 계정이 없으신가요? <Link to="/join">가입하기</Link>
          </p>
          <hr className="hr" />
          <Link className="question-pw" to="/forgotPW">
            혹시 비밀번호를 잊으셨나요?
          </Link>
        </form>
        <div>
          <a id="custom-login-btn">
            <img
              src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
              width="222"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

const Warning = styled.div`
  color: red;
  font-size: 13px;
`;

export default inject("membersStore")(observer(Login));
