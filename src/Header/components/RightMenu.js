import React from 'react';
import styled from 'styled-components';
// import LogoutLink from './LogoutLink';
import UserLinkMenu from './UserLinkMenu';
import LoginLink from './LoginLink';
import { flex } from '../../styles/mixins';
import { NavDropdown } from 'react-bootstrap';
import AdminMenu from './AdminMenu';
import { FcConferenceCall } from "react-icons/fc";


function RightMenu() {
  const token = localStorage.getItem('token');
  const user = window.localStorage.getItem('user_id');

  console.log('토큰 : ', token);
  console.log('유저 : ', user);

  return <RightMenuBox>
    {(user == 'admin' && token ) ? <AdminMenu /> : <> </>}
    {token ? <UserLinkMenu /> : <LoginLink />}
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
