import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { flex } from "../../styles/mixins";

function LoginLink() {
  // color: ${({ theme }) => theme.colors.grey200};

  return (
    <StyledLink to="/login" style={{ textDecorationLine: "none" }}>
      <SignInSignUp
        style={{
          color: "#000000",
          fontFamily: "NanumSquareR",
          fontSize: "15px",
          fontWeight: "bold",
          marginTop: "4.5px",
        }}
      >
        로그인 / 회원가입
      </SignInSignUp>
      <UserAvatarIcon
        style={{
          marginTop: "4.5px",
          color: "#6D6D6D",
        }}
      />
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  ${flex("center", "center")};
  height: 100%;
  transition: opacity 250ms;
  color: grey;
  &:hover {
    opacity: 0.7;
  }
`;

const SignInSignUp = styled.div`
  font-size: 14px;
  font-weight: bold;
  font-family: "NanumSquareB";
`;

const UserAvatarIcon = styled(FaUserCircle)`
  margin-left: 10px;

  font-size: 38px;
`;

export default LoginLink;
