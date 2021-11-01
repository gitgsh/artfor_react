import React from "react";
import { Route } from "react-router";
import styled from 'styled-components';
import Check from './Check';

function DonationRigthContents(){
    return(
    <div>
        <틀>
            <박스1>
            <p>최종후원 금액</p>
            <p>59,000원</p>
            </박스1>
            <Check/>
        </틀>
    
    </div>
    )
    }
    
    const 틀 = styled.div`
background-color : green;
height: 1000px;
    `

    const 박스1 = styled.div`
    margin-top: 30px;
    display: inline-block;
    width: 350px;
    border: 1px;
    border-color: red;
    background-color: pink;
    `


    export default DonationRigthContents;