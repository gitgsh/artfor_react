import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Guide.css';

function G_List_practice() {

    let [글제목, 글제목변경함수] = useState(['크라우드펀딩과 후원이란 무엇인가요?', '펀딩 수수료는 얼마인가요?', '지식재산권 침해 신고 가이드']);


    let [modal, modal변경함수] = useState(false);
    let [누른제목, 누른제목변경함수] = useState(0);
    let [입력값, 입력값변경함수] = useState('');
    


    // function 제목바꾸기() {
    //   var newArray = [...글제목];
    //   newArray[0] = '여자코트 추천';
    //   글제목변경함수(newArray);
    // }

    return (
      <div className="container_guide">
        <div className="black-nav">
          <div>artfor 이용 안내</div>
        </div>
        {/* <div className="list">
          <h3>{ 글제목[0] }</h3>
          <p>2월 17일 발행</p>
          <hr/>
        </div> */}

        <div className="guide_list">
          {
            글제목.map(function(글, i) {
              return (
                <div className="list" key={i}>
                <h3 onClick={ () => { 누른제목변경함수(i)} }><span Link to={ modal }>{ 글 }</span></h3>
                <p>2월 18일 발행</p>
              </div>
              )
            })
          }
        </div>
          {/* <input onChange={ (e) => { 입력값변경함수(e.target.value) }} />


          <div className="publish">
            <input onChange={ (e) => { 입력값변경함수(e.target.value)} }/>
            <button onClick={ () => {
              var arrayCopy = [...글제목];
              arrayCopy.unshift(입력값);
              글제목변경함수(arrayCopy);
            } }>저장하기</button> 
          </div> */}
         

          {/* <button onClick={ ()=>{ 누른제목변경함수(0) } }>버튼1</button>
          <button onClick={ ()=>{ 누른제목변경함수(1) } }>버튼2</button>
          <button onClick={ ()=>{ 누른제목변경함수(2) } }>버튼3</button> */}
          <button onClick={()=>{modal변경함수(!modal)}}>벝</button>

        {/* <div className="guide_detail"> */}
          {
            modal === true
            ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
            : null
          }
        {/* </div> */}

      </div>
    );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default G_List_practice;
