import React from 'react';
import styled from 'styled-components';

function SliderImgComp({ src }) {
  return <Img src={src} alt="slide-img" />;
}

const Img = styled.img`
  width: 740px;
  height: 100%;
  object-fit: cover;
`;

export default SliderImgComp;
