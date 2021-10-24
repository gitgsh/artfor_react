import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './header.css';
import { flex } from '../../styles/mixins';
import { Button } from 'react-bootstrap';

function LeftMenu() {
  // color: ${({ theme }) => theme.colors.white};
  // background: ${({ theme }) => theme.colors.red100};
  return (
    <LeftMenuBox>
      {/* <ListLink to="/discover"><div className="header_1">프로젝트 둘러보기</div></ListLink> */}
      <div className="head_btn1"><Button variant="danger">프로젝트 둘러보기</Button></div>
      <div className="head_btn2"><Button variant="light">프로젝트 올리기</Button></div>
      {/* <ProjectCreateLink to="/project-create">
        <div className="header_2">프로젝트 올리기</div>
      </ProjectCreateLink> */}
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
