import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SliderImgComp from './SliderImgComp';
import Container from '../../../Container/Container';
// ../Container/Container
import TextBoxComp from './TextBoxComp';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import "./Slider.css";

function Slider() {
  const [buttonState, buttonSetState] = useState(0);
  const [slideImageState, slideImageSetState] = useState([]);
  const LAST_SLIDE_X_COORDINATE = -100 * (slideImageState.length - 1);

  const goLeft = () => {
    buttonState === 0
      ? buttonSetState(LAST_SLIDE_X_COORDINATE)
      : buttonSetState(buttonState + 100);
  };

  const goRight = () => {
    buttonState === LAST_SLIDE_X_COORDINATE
      ? buttonSetState(0)
      : buttonSetState(buttonState - 100);
  };
  

  useEffect(() => {
    fetch('data/SlideImgData.json')
      .then(res => res.json())
      .then(data => {
        slideImageSetState(data.SlideImgData)
      })
  }, []);


  setTimeout(  //자동슬라이더 효과.
    () =>
      goRight(),
    4000  
  );
  
  return (
    
    <MainSlideContainer>
      <SlideContainerLeft className="SlideContainerLeft">
        {slideImageState.map(item => {
          return (


            
            <Slide
              key={item.id}
              style={{ transform: `translateX(${buttonState}%)` }}
            >
              <SliderImgComp src={item.imageUrl} />
            </Slide>
          );
        })}
      </SlideContainerLeft>
      <SlideContainerRight className="SlideContainerRight"
      style={{
      fontFamily:"NanumSquareB",
      transform: "skew(-0.1deg)", }}>
        

        {slideImageState.map(item => {
          return (
            <SlideTextBox
              key={item.id}
              style={{ 
                transform: `translateX(${buttonState}%)` }}
            >
              <TextBoxComp
              clnassName= "root"
                MainTitle= {item.content}
                backgroundColor={item.color}
                SubTitle={item.subContent}
              />
            </SlideTextBox>
          );
        })}
        <LeftButton onClick={goLeft}>
          <BsChevronLeft size="14" color="white"style={{marginBottom: "1px"}}/>
        </LeftButton>
        <RightButton onClick={goRight}>
          <BsChevronRight size="14" color="white" style={{marginBottom: "1px"}}/>
        </RightButton>
      </SlideContainerRight>
    </MainSlideContainer>
  );
}



const MainSlideContainer = styled(Container)`
  display: flex;
`;

const SlideContainerLeft = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 740px;
  height: 380px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border-radius: 4px 0 0 4px;
`;

const SlideContainerRight = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 340px;
  height: 380px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border-radius: 0 4px 4px 0;
`;

const Slide = styled.div`
  position: relative;
  min-width: 100%;
  height: 100%;
  transition: 0.5s;
  overflow: hidden;
`;

const SlideTextBox = styled.div`
  position: relative;
  min-width: 100%;
  height: 100%;
  background-color: red;
  transition: 0.5s;
  overflow: hidden;
`;

const LeftButton = styled.button`
  position: absolute;
  width: 32px;
  height: 32px;
  margin: 130px 0 0 40px;
  padding: 0px 3px 0 0;
  border: 1px solid #ffffff;
  border-radius: 50%;
  background: none;
`;

const RightButton = styled.button`
  position: absolute;
  width: 32px;
  height: 32px;
  margin: 130px 0 0 100px;
  padding: 0px 0px 0px 2px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  background: none;
`;

export default Slider;
