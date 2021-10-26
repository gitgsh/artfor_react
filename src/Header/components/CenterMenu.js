import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/artfor_logo.svg';
import { flex } from '../../styles/mixins';

function CenterMenu() {
  return (
    <CenterMenuBox>
      <StyledLink to="/">
        <LogoSkyrocket />
      </StyledLink>
    </CenterMenuBox>
  );
}

const CenterMenuBox = styled.div`
  ${flex('center', 'center')};
  flex: 2;
  height: 100%;
`;

const StyledLink = styled(Link)`
  ${flex('center', 'center')};
  height: 100%;
  transition: opacity 250ms;

  &:hover {
    opacity: 0.6;
  }
`;

const LogoSkyrocket = styled(Logo)`
  width: 500px;
  padding-right: 20px;
  height: 30px;
  fill: #333;
`;

export default CenterMenu;
