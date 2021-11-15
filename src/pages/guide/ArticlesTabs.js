import React from "react";
import styled from 'styled-components';
import Article1 from "./Article1";
import Article2 from "./Article2";
import Article3 from "./Article3";
import Article4 from "./Article4";


function ArticlesTabs(props) {

    if(props.value === 0) {
        return (
          <Article1/>
        )
      } else if(props.value === 1) {
        return (
            <Article2/>
        )
      } else if(props.value === 2) {
        return(
          <Article3/>
        )
      } else if(props.value === 3) {
        return(
          <Article4/>
        )
    } 
    };

    let DivFee = styled.div`
    max-width : 1080px;
    margin : auto;
    margin-bottom : 150px;
    padding : 0px 250px 0px 30px;
`;
let Div2 = styled.div`
    border-left : 1px solid #f1f3f5;
    padding : 0px 50px 0px 50px;
`;
let Title = styled.h2`
  font-size : 35px;
  text-align : left;

`;
let Date = styled.p`
    margin-top : 20px;
    margin-bottom : 150px;
    font-size : 15px;
    text-align : left;
`;
let Title2 = styled.div`
    padding-left : 50px;
    margin-left : -50px;
    border-left : 2px solid #85af4b;
    font-weight : bold;
    font-size : 19px;
    margin-top : 30px;
    text-align : left;
`;
let Content = styled.div`
    color : #757575;
    margin-top : 20px;
    font-size : 16px;
    text-align : left;
`;

export default ArticlesTabs;