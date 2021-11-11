import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import CenterMenu from "./components/CenterMenu";
import RightMenu from "./components/RightMenu";
import SearchModal from "./components/SearchModal";
import head_prjMenu from "./components/head_prjMenu";
import Container from "../Container/Container";
import { flex } from "../styles/mixins";
import { useState } from "react";
import UploadLeftMenu from "./components/UploadLeftMenu";

const exclusionRoutes = ["/login", "/signup"];

// background: ${({ theme }) => theme.colors.white};
//   border-bottom: 1px solid ${({ theme }) => theme.colors.grey500};
function UploadHeader() {

  

  return (
    
    <StyledHeader2>
      <HeaderContainer2>
        {/* 프로젝트올리기 */}
        <UploadLeftMenu /> 
        <CenterMenu />
        <RightMenu />
        {/* <head_prjMenu/> */}
      </HeaderContainer2>
    </StyledHeader2>
    
  );
}

const StyledHeader2 = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 65px;
  background: white;

  z-index: 999;
  position: sticky;
`;

const HeaderContainer2 = styled(Container)`
  ${flex("space-between", "center")};
  height: 100%;
`;

export default UploadHeader;
