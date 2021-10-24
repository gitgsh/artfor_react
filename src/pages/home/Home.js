import { inject, observer } from "mobx-react";
import { useEffect } from "react";

import { Link, Route } from "react-router-dom";
import React, { Component } from "react";
// import Slider from "react-slick";
import { Card, CardGroup } from "react-bootstrap";
import Detail from '../detail/Detail.js'
import "./Home.css";
//editor

// function Home() {}export default inject("mainStore")(observer(Home));
// import React from 'react';
import styled from 'styled-components';
import Slider from '../Main/components/Slider';
import ProjectList from '../Main/components/ProjectList';
import HomeList from "./HomeList.js";

function Main() {
  return (
    <MainContainer>
      {/* <Slider />
      <ProjectList /> */}
    </MainContainer>
   );
// }

const MainContainer = styled.div`
  padding-top: 85px;
`;

// export default Main;




    
  
}


export default inject("mainStore")(observer(Main));
