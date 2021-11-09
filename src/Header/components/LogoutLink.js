import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { flex } from '../../styles/mixins';

function LogoutLink() {
  // const kakaoToken = window.Kakao.Auth.getAccessToken();
  const history = useHistory();

  const handleKakaoLogout = () => {
    window.Kakao.API.request({
      url: '/v1/user/unlink',
      success: res => {
        Object.keys(localStorage)
          .filter(key => key.startsWith('kakao_'))
          .forEach(key => localStorage.removeItem(key));

        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('name');
        alert('성공적으로 로그아웃 되었습니다. 다음에 또 만나요!🙋‍♀️');
        history.push('/login');
      },
      fail: error => {
        console.log(error);
        Object.keys(localStorage)
          .filter(key => key.startsWith('kakao_'))
          .forEach(key => localStorage.removeItem(key));

        localStorage.removeItem('token');
        alert('성공적으로 로그아웃 되었습니다. 다음에 또 만나요!🙋');
      },
    });
    window.Kakao.Auth.setAccessToken(undefined);
  };

  const handleNormalLogout = () => {
    localStorage.removeItem('token');
    alert('성공적으로 로그아웃 되었습니다. 다음에 또 만나요🥰');
    history.push('/login');
  };

  return (
    <>
      {/* <PledgesButton to="/pledges">후원 현황</PledgesButton> */}
      <LogoutButton
        // onClick={kakaoToken ? handleKakaoLogout : handleNormalLogout}
        onClick={handleNormalLogout}
      >
        <SignInSignUp>로그아웃</SignInSignUp>
        {/* <UserAvatarIcon /> */}
      </LogoutButton>
    </>
  );
}

const PledgesButton = styled(Link)`
  margin-right: 30px;
  font-size: 14px;
  font-weight: bold;
  transition: opacity 250ms;

  &:hover {
    opacity: 0.7;
  }
`;

const LogoutButton = styled.div`
  ${flex('center', 'center')};
  height: 100%;
  cursor: pointer;
  transition: opacity 250ms;

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

export default LogoutLink;
