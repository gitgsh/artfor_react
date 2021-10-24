import React from 'react';
import styled from 'styled-components';
import Slider from './components/Slider';
import ProjectList from './components/ProjectList';

function Main() {
  return (
    <MainContainer>
      <Slider />
      <ProjectList />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding-top: 85px;
`;

export default Main;
