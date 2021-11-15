import axios from "axios";
import react, { useState } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import PasswordUpdateModal from "./PasswordUpdateModal";

function PasswordModal(props) {
  const { membersStore } = props;
  const { members, member } = membersStore;

  const [now_pw, setNow_pw] = useState("");

  const [condition, setCondition] = useState(1);
  const [updatepwModal, setUpdateModal] = useState(false);

  const onChange = (e) => {
    setNow_pw(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();

    if (now_pw === "") {
      setCondition(2);
      setUpdateModal(false);
      return false;
    } else if (now_pw.length < 4 || now_pw.length > 14) {
      setCondition(3);
      setUpdateModal(false);
      return false;
    }

    let data = {
      user_email: member.user_email,
      user_pw: now_pw,
    };

    console.log("data는?", data);

    axios
      .post("http://localhost:8004/app/user/pwcheck", data)
      .then((response) => {
        console.log("서버와 통신 성공", response);

        if (response.data === 0) {
          setCondition(0);
          setUpdateModal(false);
          return false;
        } else if (response.data === 1) {
          setCondition(4);
          setUpdateModal(true);
        }
      })
      .catch((error) => {
        console.log("error임", error);
      });
  };

  return (
    <div>
      <p style={{ fontSize: "15px", transform: "skew(-0.1deg)" }}>
        현재 비밀번호
      </p>
      <form>
        <InputGroup style={{ width: "40%", float: "left" }}>
          <FormControl
            style={{
              fontFamily: "Consolas",
              marginTop: "-5px",
              transform: "skew(-0.1deg)",
            }}
            type="password"
            name="now_pw"
            onChange={onChange}
            placeholder="현재 비밀번호"
          />
        </InputGroup>
        <Button
          variant="dark"
          style={{
            marginLeft: "15px",
            marginTop: "-5px",
            width: "80px",
            transform: "skew(-0.1deg)",
          }}
          type="submit"
          onClick={onClick}
        >
          확인
        </Button>
        {condition === 4 && (
          <p
            style={{
              marginTop: "10px",
              color: "blue",
              fontSize: "13px",
              transform: "skew(-0.1deg)",
            }}
          >
            현재 비밀번호와 일치합니다.
          </p>
        )}
        {condition === 0 && (
          <p
            style={{
              marginTop: "10px",
              color: "red",
              fontSize: "13px",
              transform: "skew(-0.1deg)",
            }}
          >
            현재 비밀번호가 일치하지 않습니다.
          </p>
        )}
        {condition === 2 && (
          <p
            style={{
              marginTop: "10px",
              color: "red",
              fontSize: "13px",
              transform: "skew(-0.1deg)",
            }}
          >
            비밀번호를 입력해주세요
          </p>
        )}
        {condition === 3 && (
          <p
            style={{
              marginTop: "10px",
              color: "red",
              fontSize: "13px",
              transform: "skew(-0.1deg)",
            }}
          >
            비밀번호는 4자~14자 사이로 입력해주세요.
          </p>
        )}
        <div
          style={{
            fontSize: "12px",
            marginTop: "13px",
            fontFamily: "NanumSquareR",
          }}
        >
          <p style={{ transform: "skew(-0.1deg)" }}>
            비밀번호가 기억나지 않나요?{" "}
            <Link style={{ color: "#3399ff", transform: "skew(-0.1deg)" }} to="/forgotPW">
              비밀번호 초기화
            </Link>
          </p>
        </div>

        {updatepwModal === true ? (
          <PasswordUpdateModal
            condition={condition}
            setCondition={setCondition}
          />
        ) : (
          <></>
        )}
      </form>
    </div>
  );
}

const Warning = styled.div`
  color: red;
  font-size: 13px;
`;

export default inject("membersStore")(observer(PasswordModal));
