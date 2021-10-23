import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { flex } from '../../styles/mixins';

function LoginLink() {
  // color: ${({ theme }) => theme.colors.grey200};

  return (
    <StyledLink to="/login">
      <SignInSignUp>로그인 / 회원가입</SignInSignUp>
      <UserAvatarIcon />
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  ${flex('center', 'center')};
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
`;

const UserAvatarIcon = styled(FaUserCircle)`
  margin-left: 10px;
  
  font-size: 38px;
`;

export default LoginLink;
