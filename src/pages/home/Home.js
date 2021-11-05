import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import "./Home.css";
import styled from 'styled-components';

function Main() {
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
