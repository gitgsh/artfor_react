import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import React, { Component } from "react";
import "./Home.css";
import styled from 'styled-components';
import initialize from "../../kakao/initialize";

function Main() {
  // useEffect(() => {
  //   return () => initialize('');
  // }, []);
  
  return (
    <MainContainer>
    </MainContainer>
   );
// }

const MainContainer = styled.div`
  padding-top: 85px;
`;

// export default Main;




    
  
}


export default inject("mainStore")(observer(Main));
