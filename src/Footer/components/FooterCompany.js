import React from "react";
import styled from "styled-components";
// import {
//   AiFillFacebook,
//   AiFillTwitterCircle,
//   AiFillInstagram,
// } from 'react-icons/ai';
// import { RiKakaoTalkFill } from 'react-icons/ri';

function FooterCompany() {
  return (
    <Container style={{ fontWeight: "" }}>
      <Address>
        <Strong>회사명</Strong>
        <Normal>아트포(주)</Normal>
        <Strong>&nbsp;&nbsp;주소</Strong>
        <Normal>서울시 금천구 가산디지털2로 123 </Normal>
        <Strong>&nbsp;&nbsp;대표</Strong>
        <Normal>2팀</Normal>
        <Strong>&nbsp;&nbsp;사업자등록번호</Strong>
        <Normal>112-11-55849</Normal>
      </Address>
      <Address>
        <Strong>통신판매업 신고번호</Strong>
        <Normal>2021-2013455-22-1-05178</Normal>
        <Strong>&nbsp;&nbsp;대표번호</Strong>
        <Normal>02-1234-5678</Normal>
      </Address>
      <Address>
        <Normal style={{ fontWeight: "bold" }}>© 2021 ARTFOR Inc.</Normal>
      </Address>
    </Container>
  );
}

const Container = styled.div`
  width: 1080px;
  margin-top: 24px;
`;

const Address = styled.div`
  display: flex;
  padding: 0 18px 0 18px;
  font-size: 14px;
`;

const Strong = styled.div`
  margin-right: 5px;
  font-weight: bold;
  line-height: 21px;
  transform: skew(-0.1deg);
`;

const Normal = styled.div`
  margin-right: 5px;
  font-weight: normal;
  line-height: 22px;
  color: #6d6d6d;
  transform: skew(-0.1deg);
`;

const ButtonBox = styled.span`
  position: absolute;
  margin-left: 880px;
`;

const ImoticonButton = styled.button`
  display: inline;
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 50%;
  background-color: #ffffff;
  opacity: 0.5;
`;

export default FooterCompany;
