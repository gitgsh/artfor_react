import React from 'react';
import styled from 'styled-components';
import Slider from './components/Slider';
import ProjectList from './components/ProjectList';
import HomeList from '../home/HomeList';

function Main() {
  return (
    <MainContainer>
      <Slider />
      <ProjectList />
      <HomeList />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding-top: 10px;
`;

export default Main;
