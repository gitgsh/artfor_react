import React from 'react';
import styled from 'styled-components';
import LogoutLink from './LogoutLink';
import LoginLink from './LoginLink';
import { flex } from '../../styles/mixins';
import { NavDropdown } from 'react-bootstrap';

function RightMenu() {
  const token = localStorage.getItem('token');

  return <RightMenuBox>
    <NavDropdown  title="운영자 페이지" id="basic-nav-dropdown">
      <NavDropdown.Item style={{fontFamily:"NanumSquareB", fontSize:"14px"}} href="/admin/adminmain">회원 관리</NavDropdown.Item>
      <NavDropdown.Item style={{fontFamily:"NanumSquareB", fontSize:"14px"}} href="/admin/manageArtwork">게시물 심사/승인</NavDropdown.Item>
      {/* <NavDropdown.Divider /> */}
      {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
    </NavDropdown>
    {token ? <LogoutLink /> : <LoginLink />}
    </RightMenuBox>;
}

const RightMenuBox = styled.div`
  ${flex('flex-end', 'center')};
  flex: 1;
  height: 100%;
  font-family : NanumSquareB;
  font-size : 14px;
`;

export default RightMenu;
