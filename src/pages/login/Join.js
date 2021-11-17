import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Form,
  FormCheck,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosError } from "../../stores/common";
import "../../CSS/login/Join.css";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { data } from "jquery";

function Join(props) {
  //warch('value') : value 라는 name 의 Element 관찰
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const user_pw = useRef();
  user_pw.current = watch("user_pw"); //ref 생성 > watch를 이용해서 pw 값 가져오기 > 가져온 pw 값 ref.current 에 넣기

  let result = 0;

  //인증번호 일치 확인용
  const [check, setCheck] = useState(0);

  //회원가입
  const onSubmit = (data) => {
    console.log("데이터>>>", data);
    if (check == 0) {
      alert("인증번호가 일치하지 않습니다.");
    }
    //인증번호 확인 후 일치하면 회원가입 시켜줌
    else {
      axios
        .post("http://localhost:8004/app/user/join.do", data)
        .then((response) => {
          console.log("login post user to Spring", response);
          result = response.data;
          console.log("result", result);
          alert("회원가입 완료! 로그인 해주세요.");
          props.history.push("/login");
        })
        .catch((error) => {
          axiosError(error);
          console.log("실패");
        });
    }
  };

  //중복확인하고 중복아니면 인증메일 보내주기
  const confirmEmail = (data) => {
    data = { user_email: getValues("user_email") };
    console.log("데이터>>", data);
    axios
      .post("http://localhost:8004/app/user/mailConfirm2", data)
      .then((response) => {
        console.log("mailConfirm post ", response);
        const result = response.data;
        console.log("result", result);

        if (result === 1) {
          alert("메일에서 인증번호를 확인해 주세요");
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

  //인증번호 일치 확인
  function checkNum() {
    let temp = getValues("confirmNum");
    axios
      .post("http://localhost:8004/app/user/confirmNum", temp)
      .then((response2) => {
        console.log("testNum : ", temp);
        console.log("confirmNum post ", response2);
        const result2 = response2.data;
        console.log("result", result2);

        if (result2 === 1) {
          setCheck(1);
          alert("인증번호 확인 완료");
        } else {
          setCheck(0);
          alert("인증번호가 일치하지 않습니다.");
        }
      })
      .catch((error) => {
        axiosError(error);
      });
  }

  return (
    <div>
      <div className="container_join">
        <h3 className="join">
          <strong>회원가입</strong>
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <BoxStyle>
            <div className="join-form-input-1">
              <InfoStyle>이름</InfoStyle>
              <InputGroup>
                <FormControl
                  className="login-form-input-row"
                  type="text"
                  placeholder="사용하실 이름을 입력해주세요."
                  {...register("user_name", {
                    required: true,
                    maxLength: 20,
                    minLength: 2,
                  })}
                />
              </InputGroup>
              {errors.user_name?.type === "required" && (
                <InputGroup>
                  <Warning>이름을 입력해주세요</Warning>
                </InputGroup>
              )}
              {(errors.user_name?.type === "maxLength" ||
                errors.user_name?.type === "minLength") && (
                <InputGroup>
                  <Warning>이름은 2자 이상, 20자 이하로 입력하세요.</Warning>
                </InputGroup>
              )}
            </div>
          </BoxStyle>

          <BoxStyle>
            <div className="join-form-input-1">
              <InfoStyle>이메일 주소</InfoStyle>
              <InputGroup>
                <FormControl
                  className="login-form-input-row"
                  placeholder="이메일 주소를 입력해주세요."
                  type="email"
                  {...register("user_email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <Button
                  style={{ fontFamily: "Consolas" }}
                  className="btn_empty"
                  variant="outline-secondary"
                  onClick={confirmEmail}
                >
                  인증하기
                </Button>
              </InputGroup>
              {errors.user_email?.type === "required" && (
                <InputGroup>
                  <Warning>이메일을 입력해주세요</Warning>
                </InputGroup>
              )}
              {errors.user_email?.type === "pattern" && (
                <InputGroup>
                  <Warning>올바른 이메일 형식이 아닙니다.</Warning>
                </InputGroup>
              )}
            </div>
            <div className="join-form-input-1">
              <InputGroup>
                <FormControl
                  className="login-form-input-row"
                  placeholder="인증번호 6자리 입력"
                  {...register("confirmNum", { required: true, pattern: /\d/ })}
                />
                <Button
                  style={{ fontFamily: "Consolas" }}
                  className="btn_empty"
                  variant="outline-secondary"
                  onClick={checkNum}
                >
                  인증확인
                </Button>
              </InputGroup>
              {errors.confirmNum?.type === "required" && (
                <InputGroup>
                  <Warning>인증번호를 입력해주세요</Warning>
                </InputGroup>
              )}
              {errors.confirmNum?.type === "pattern" && (
                <InputGroup>
                  <Warning>올바른 형식이 아닙니다.</Warning>
                </InputGroup>
              )}
            </div>
          </BoxStyle>

          <BoxStyle>
            <div className="join-form-input-1">
              <InfoStyle>비밀번호</InfoStyle>
              <InputGroup style={{ fontFamily: "Consolas" }}>
                <FormControl
                  className="login-form-input-row"
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  {...register("user_pw", {
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
              {(errors.user_pw?.type === "maxLength" ||
                errors.user_pw?.type === "minLength") && (
                <InputGroup>
                  <Warning>
                    비밀번호는 2자 이상, 20자 이하로 입력하세요.
                  </Warning>
                </InputGroup>
              )}
            </div>
            <div className="join-form-input-1">
              <InputGroup style={{ fontFamily: "Consolas" }}>
                <FormControl
                  className="login-form-input-row"
                  type="password"
                  placeholder="비밀번호를 확인합니다."
                  {...register("user_pw_con", {
                    required: true,
                    validate: (value) => value === user_pw.current,
                  })}
                />
                {errors.user_pw_con?.type === "required" && (
                  <InputGroup>
                    <Warning>비밀번호를 입력해주세요</Warning>
                  </InputGroup>
                )}
                {errors.user_pw_con?.type === "validate" && (
                  <InputGroup>
                    <Warning>비밀번호가 일치하지 않습니다.</Warning>
                  </InputGroup>
                )}
              </InputGroup>
            </div>
          </BoxStyle>

          <div className="div_btn_join">
            <Button className="btn_join" variant="dark" type="submit">
              가입
            </Button>
            <Link to="/login">
              <Button className="btn_join" variant="light">
                취소
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

const Warning = styled.div`
  color: red;
  font-size: 13px;
`;

const InfoStyle = styled.div`
  font-size: 14px;
  transform: skew(-0.1deg);
`;

const BoxStyle = styled.div`
  text-align: left;
  margin: 0px 0px 23px;
`;

export default Join;
