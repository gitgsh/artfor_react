import React from "react";
import { Button } from 'react-bootstrap'
import { Jumbotron } from 'react-bootstrap'
import "./Main.css"


function Main(props) {
  return (
      <div>
          <div className="jumbotron">
                <Jumbotron className="jumbo"> 
           
                <h1 className="title">마음 속 프로젝트 아이디어,<br />
                                텀블벅에서 현실로.</h1>
                <p className="p1">크라우드펀딩으로 프로젝트를 위한 자금도 모으고,
                    <br />든든한 후원자 네트워크도 확보할 수 있습니다. </p>
                <br />
                <p className="lead">
                    <div className="head_btn2"><Button variant="light">프로젝트 올리기</Button></div>
                    <Button variant="primary" size="lg" >이미 시작</Button>{' '}
                </p>
                <br />
            </Jumbotron>
          </div>
      </div>
  );
}

export default Main;
