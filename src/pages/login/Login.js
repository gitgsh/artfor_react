import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../CSS/login/Login.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { axiosError } from "../../stores/common";
// import { KakaoLogin } from "react-kakao-login";
// wllwlwlwlwkdfjksjlfdk

function Login(props) {
  const [userinfo, setUserinfo] = useState({
    user_id: "",
    user_pw: "",
  });

  let result = 0;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("데이터>>>", data);

    setUserinfo(data);
    console.log("유저인포", userinfo);

    axios
      .post("http://localhost:8004/app/user/login.do", data)
      .then((response) => {
        console.log("login post user to Spring", response);
        result = response.data;
        console.log("result", result);

        if (result === 0) {
          alert("아이디가 없습니다.");
        } else if (result === -1) {
          alert("비밀번호가 일치하지 않습니다.");
        } else {
          alert("로그인 완료");
          props.history.push("/");
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
          <strong>로그인</strong>
        </h3>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="login-form-input-1">
            <InputGroup>
              <FormControl
                className="login-form-input-row"
                type="text"
                placeholder="아이디 입력"
                aria-label="Recipient's username with two button addons"
                {...register("user_id", {
                  required: true,
                  maxLength: 20,
                  minLength: 2,
                })}
              />
            </InputGroup>
            {errors.user_id?.type === "required" && (
              <InputGroup style={{ color: "red" }}>
                아이디를 입력해주세요
              </InputGroup>
            )}
            {(errors.user_id?.type === "maxLength" ||
              errors.user_id?.type === "minLength") && (
              <InputGroup style={{ color: "red" }}>
                아이디는 2자 이상, 20자 이하로 입력하세요.
              </InputGroup>
            )}
          </div>
          <div className="login-form-input-2">
            <InputGroup>
              <FormControl
                className="login-form-input-row"
                type="textz"
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
              <InputGroup style={{ color: "red" }}>
                비밀번호를 입력해주세요
              </InputGroup>
            )}
            {(errors.user_pw?.type === "maxLength" ||
              errors.user_pw?.type === "minLength") && (
              <InputGroup style={{ color: "red" }}>
                비밀번호는 2자 이상, 20자 이하로 입력하세요.
              </InputGroup>
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
          <Link className="question-pw">혹시 비밀번호를 잊으셨나요?</Link>
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


export default Login; 
