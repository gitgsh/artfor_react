import React from 'react';
import styled from 'styled-components';
import Container from '../../Container/Container';
import FooterContent from './FooterContent';
import FooterCompany from './FooterCompany';

function FooterContentWrap() {
  return (
    <>
      <TopDivideLine />
      <Container>
        <FooterContent />
        <TopDivideLine />
        <FooterCompany />
      </Container>
      <BottomDivideLine />
    </>
  );
}

const TopDivideLine = styled.div`
  margin-top: 24px;
  border-top: 1px solid #e6e6e6;
  
`;

const BottomDivideLine = styled.div`
  margin-top: 24px;
  width: 100%;
  height: 56px;
  background: rgb(240, 240, 240);
  color: rgb(109, 109, 109);
`;

export default FooterContentWrap;
