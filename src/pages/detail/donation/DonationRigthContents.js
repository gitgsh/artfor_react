import React from "react";
import { Route } from "react-router";
import styled from "styled-components";
import Check from "./Check";
import PersonalInfo from "./PersonalInfo";

function DonationRigthContents() {
  var funding_price = localStorage.getItem("funding_price"); //const, let으로 선언하면 initalize~ 에러남.

  return (
    <div>
      <틀>
        <박스1>
          <최종후원금액 style={{ marginLeft: "17px" }}>
            최종후원 금액
          </최종후원금액>
          <금액>
            {funding_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
          </금액>
        </박스1>
        <박스2>
          <Check />
        </박스2>
      </틀>
    </div>
  );
}

const 틀 = styled.div`
  margin-top: 30px;
  height: 700px;
`;

const 박스1 = styled.div`
  margin-top: 30px;
  display: inline-block;
  width: 350px;
  height: 70px;
  border: 1px solid gainsboro;
  border-radius: 5px;
`;
const 박스2 = styled.div`
  margin-top: 30px;
  display: inline-block;
  width: 350px;
`;

const 최종후원금액 = styled.p`
  color: red;
  font-family: "NanumSquareB";
  margin-left: 30px;
  padding-right: 100px;
  margin-top: 20px;
  font-size: 20px;
  float: left;
`;

const 금액 = styled.p`
  font-family: "NanumSquareB";
  font-size: 20px;
  margin-top: 20px;
`;
export default DonationRigthContents;
