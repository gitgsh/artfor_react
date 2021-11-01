import React from "react";
import { Route } from "react-router";
import styled from 'styled-components';

function DonationHead(){
   
    return(
        <div>
            <사진>
            <img src="./main1.jpeg" style={{width:'150px'}}/>
            </사진>
            <틀>
                <작가>김지민</작가>
                <설명>당신의 바다꽃이 될래요. 탄생화 자개 DIY키트</설명>
                <후원액>70,622,000원</후원액>
                <퍼센트> 3531%</퍼센트>
                <D_day> 18일 남음</D_day>
            </틀>
            <hr/>
            

        </div>
        
    )
    
}

const 틀 = styled.div`

text-align: left;

`

const 사진 = styled.div`
    float: left;
    padding-right: 30px;
`

const 작가 = styled.div`
padding-top : 10px;
font-family: 'NunumSquareL';
color: grey;
font-size : 15px;

`

const 설명 = styled.div`
padding-top : 5px;
padding-bottom: 5px;
font-family: 'NunumSquareB';
font-size : 25px;
`

const 후원액 = styled.span`
font-family: 'NunumSquareB';
font-weight: 700;
font-size : 15px;
`

const 퍼센트 = styled.span`
font-family: 'NunumSquareB';
color : red;
font-size : 12px;
`

const D_day = styled.span`
font-family: 'NunumSquareB';
font-size : 14px;
`

export default DonationHead;