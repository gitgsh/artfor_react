import React from 'react';
import styled from 'styled-components';
import LogoutLink from './LogoutLink';
import LoginLink from './LoginLink';
import { flex } from '../../styles/mixins';

function RightMenu() {
  const token = localStorage.getItem('token');

  return <RightMenuBox>{token ? <LogoutLink /> : <LoginLink />}</RightMenuBox>;
}

const RightMenuBox = styled.div`
  ${flex('flex-end', 'center')};
  flex: 1;
  height: 100%;
`;

export default RightMenu;
