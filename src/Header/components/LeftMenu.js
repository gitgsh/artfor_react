import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './header.css';
import { flex } from '../../styles/mixins';
import TextButtons from './TextButtons';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';


import CenterMenu from './CenterMenu';
import RightMenu from './RightMenu';

function LeftMenu() {
  // color: ${({ theme }) => theme.colors.white};
  // background: ${({ theme }) => theme.colors.red100};
  
//const [headerContainer, setHeaderContainer] =  useState(<HeaderContainer/>);


  function TextButtons() {
    return (
      <Stack direction="row" spacing={2}>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
      </Stack>
    );
  }



  return (

    <LeftMenuBox>
      
      <div className="head_btn1"> <Button style={{color:'black', fontFamily:"NanumSquareB", fontSize:"15px"}}><img src="../icon_navbar.png" style={{width:'20px'}}/>프로젝트 둘러보기</Button></div>
      <div className="head_btn2"><Button  style={{color:'black', fontFamily:"NanumSquareB", fontSize:"15px", width:'120px'}}>프로젝트 올리기</Button></div>
      
    </LeftMenuBox>
  );
}

const LeftMenuBox = styled.div`
  ${flex('flex-start', 'center')};
  flex: 1;
  height: 100%;
`;

const ListLink = styled(Link)`
  ${flex('center', 'center')};
  margin-right: 30px;
  padding: 10px 15px;
  color: white;
  backgroud: red;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 250ms;

  &:hover {
    opacity: 0.6;
  }
`;

const ProjectCreateLink = styled(Link)`
  ${flex('center', 'center')};
  height: 100%;
  font-size: 14px;
  font-weight: bold;
  transition: opacity 250ms;

  &:hover {
    opacity: 0.6;
  }
`;

export default LeftMenu;
