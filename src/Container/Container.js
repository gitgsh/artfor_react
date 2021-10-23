import React from 'react';
import styled from 'styled-components';

function Container({ className, children }) {
  return (
    <ContentsContainer className={className}>{children}</ContentsContainer>
  );
}

const ContentsContainer = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
`;

export default Container;
