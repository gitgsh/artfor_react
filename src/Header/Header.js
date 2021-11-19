import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import LeftMenu from "./components/LeftMenu";
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
function Header() {
  console.log(">>",window.location.pathname);
  return (
    <StyledHeader>
      <HeaderContainer>
        {window.location.pathname == "/project/plan/projectupload" ? (
          <UploadLeftMenu />
        ) : (
          <LeftMenu />
        )}
        {/* <LeftMenu /> */}
        {/* <SearchModal/> */}
        <CenterMenu />
        <RightMenu />
        {/* <head_prjMenu/> */}
      </HeaderContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 65px;
  background: white;

  z-index: 999;
  position: sticky;
`;

const HeaderContainer = styled(Container)`
  ${flex("space-between", "center")};
  height: 100%;
`;

export default Header;
