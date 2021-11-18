import React from 'react';
import styled from 'styled-components';

function TextBoxComp({ goLeft, MainTitle, backgroundColor, SubTitle }) {
  return (
    <TextContent style={{ backgroundColor }}>
      <ContentWrap>
        <MainContent>{MainTitle}</MainContent>
        <SubContent>{SubTitle}</SubContent>
      </ContentWrap>
    </TextContent>
  );
}

const ContentWrap = styled.div``;

const MainContent = styled.p`
  font-size: 24px;
`;

const SubContent = styled.p`
  font-size: 12px;
  font-weight: lighter;
  margin-top: 10px;
`;

const TextContent = styled.div`
  width: 340px;
  height: 100%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px 80px 40px;
  font-size: 28px;
  font-weight: bold;
  color: white;
  line-height: 1.8;
  white-space: pre-wrap;
`;

export default TextBoxComp;
