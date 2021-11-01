import React from "react";
import { Route } from "react-router";
import styled from 'styled-components';

function DonationLeftContents(){

    return(
        <틀>
         작품 정보
            <박스1>
            <p>전시제목</p>
            <p>자개꽃키트</p>
            <p>전시일시</p>
            <p>2022.03.01</p>
            <p>금액</p>
            <p>59,000원</p>
            
            </박스1>
        후원자 정보
            <박스2>
            <p>연락처</p>
            <input type="text"/>
            <button>인증번호 전송</button>
            <p>이메일</p>
            <p>korea_sh3@naver.com</p>
            </박스2>
        </틀>
        
    )
}

const 틀 = styled.div`

width : 650px;
height: 1000px;
float : left;

background-color : blue;

`
const 박스1 = styled.div`
width : 550px;
height: 300px;
margin-left: 50px;
border: 1px;
border-color : red;
background-color : yellow;
`

const 박스2 = styled.div`
width : 550px;
height: 150px;
margin-left: 50px;
border: 1px;
border-color : red;
background-color : brown;
`


export default DonationLeftContents;