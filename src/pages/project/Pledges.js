import React, { useState } from "react";
import PlanTabs from "./Tab";
import { FcHighPriority } from "react-icons/fc";
import './Pledges.css';

function Pledges(props) {
  return (
  <div className="pledges-container" style={{background: 'rgb(252, 252, 252)'}}>
    <div className="pledges-marginbox">
      <div>
        <Div1 />
      </div>
      <div style={{clear:'both'}}>
        <br />
        <hr style={{clear:'both', border:'1px solid blue'}}/>
      </div>
    </div>
  </div>
  )
}

function Div1(){
  
  let [div1_text, setDiv1_text] = useState("프로젝트의 진행 및 선물 전달 과정에서 예상되는 어려움을 기입해주세요.");
  let [modal, setModal] = useState(false);
  const textModal=()=>{
    
  }

  return(
    <div className="div1-box">
      <div className="div1-left-box">
        <h5 className="div1-left-box-h5">예상되는 어려움<span style={{color:'orange', fontSize:'20px'}}>*</span></h5>
        <p className="div1-left-box-p">펀딩 진행 및 선물 전달 과정에서 발생 가능한 문제가 있다면
          후원자에게 명확하게 알려주세요. 대응 계획을 함께 적는다면
          후원자에게 신뢰를 줄 수 있습니다.
        </p>
      </div>
      <div className="div1-right-box">
        <div className="div1-right-box-round">
          <div style={{float:'left'}}>
            <FcHighPriority/>
          </div>
          <div className="round-p1">
            <p>예상되는 어려움</p>
          </div>
          <div className="round-button-box">
            <button className="round-button" onClick={textModal}>작성하기</button>
          </div>
          <div className="round-p2">
            <p>
              {div1_text}
            </p>
          </div>
          <Div1Modal modal={modal} setModal={setModal}/>
        </div>
      </div>
    </div>
  )
}

function Div1Modal(props){
  return(
    <div style={{clear:'both', marginTop:'20px'}}>
      <textarea className="textareaa" placeholder="아래와 같은 사항을 고려해서 작성해보세요.&#13;&#10;
                                                  · 제작 과정에서 발생할 수 있는 변동사항이 있다면 무엇인가요? (예산, 선물 내용 등)&#13;&#10;
                                                  · 선물 전달 일정이 지연될 가능성이 있나요?&#13;&#10;
                                                  · 펀딩 자금이 고갈돼 선물을 전달하지 못한다면 어떤 조치를 취할 수 있을까요?&#13;&#10;
                                                  · 이외에 발생가능한 문제는 무엇이 있으며 어떻게 대응할 예정인가요?" />
      <div className="div1modal-buttonbox">
        <button className="cancel-button">취소</button>
        <button className="save-button">저장</button>
      </div>
    </div>
  )
}

export default Pledges;
