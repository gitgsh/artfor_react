import React from "react";
import { Button, Image } from 'react-bootstrap'
import { Jumbotron } from 'react-bootstrap'
import { Card } from "react-bootstrap";
import "./Main.css"
import { CardGroup } from "react-bootstrap";

function Main(props) {
    //dd
  return (
      <div>
          <div className="pmain">
                <Jumbotron className="jumbo"> 
           
                    <h1 className="title">마음 속 프로젝트 아이디어,<br />텀블벅에서 현실로.</h1>
                    <p className="p1">크라우드펀딩으로 프로젝트를 위한 자금도 모으고,
                    <br />든든한 후원자 네트워크도 확보할 수 있습니다. </p>
                    <br />
                    <p className="lead">
                        <div className="head_btn2"><Button variant="light" size="lg">프로젝트 올리기</Button></div>
                    </p>
                    <br />
                </Jumbotron>
                <div class="miancontent">
                    <div class="c1">
                        <div class="c1_1">
                            <img src="../imgg1.PNG" width="100%" />
                        </div>   
                        <div class="c1_2">
                            <br />
                            <h1>텀블벅에서 펀딩에 성공한<br />20,300개 프로젝트와 함께 하세요.</h1><br />
                            <p>디자인, 영화, 게임, 출판, 요리, 패션, 이벤트 …
                            분야를 가릴 것 없이 수많은 창작자와 창업자들의 프로젝트들이 매일같이 올라오는 텀블벅은 한국에서 가장 활성화된 크라우드펀딩 커뮤니티입니다. 
                            지금껏 20,300개 넘는 창조적인 시도들이 120만 명의 후원자를 만나 세상에 나왔습니다.
                            </p>
                            <br />   
                        </div>
                    </div>
                    <div class="c2">
                        <div class="c2_1">
                            <br />
                            <h1>쉽게 시작할 수 있습니다!</h1><br />
                            <p>‘크라우드펀딩’은 어려울지 몰라도 텀블벅은 어렵지 않습니다. 수익을 내서 현금을 돌려주거나 소유권을 나누는 등의 복잡한 과정도 필요하지 않습니다. 
                                펀딩으로 모은 금액을 통해 만들어낸 제품 또는 특별한 경험 그 자체를 후원자들과 약속하고 공유하면 됩니다.</p>
                        </div>   
                        <div class="c2_2">
                        <CardGroup>
                            <Card className="card">
                                <Card.Body>
                                <Card.Img variant="top" src="https://tumblbug.com/wpa/6e078bfbb32d5f327d979b5304ce77cc.png" style={{width:'150px'}}/>
                                <Card.Title className="cardtitle">프로젝트 올리기</Card.Title>
                                <Card.Text className="cardtext">
                                    창작 아이디어를 소개하는 프로젝트 페이지를 작성합니다.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="card">
                                <Card.Body>
                                <Card.Img variant="top" src="https://tumblbug.com/wpa/8bb77b6ee1e1135e474c01eca206fc23.png" style={{width:'150px'}}/>
                                <Card.Title className="cardtitle">펀딩 진행하기</Card.Title>
                                <Card.Text className="cardtext">
                                    정해진 기간 동안 후원자를 모으기 위해 열심히 홍보합니다.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="card">
                                <Card.Body>
                                <Card.Img variant="top" src="https://tumblbug.com/wpa/41a6c7d14f01251ac4093f7b9b81e828.png" style={{width:'150px'}}/>
                                <Card.Title className="cardtitle">만들고 보답하기</Card.Title>
                                <Card.Text className="cardtext">
                                    전달받은 후원금으로 창작에 돌입합니다.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                        </div>
                    </div>
                    <div class="c3">
                        <div class="c3_1">
                            이미지 
                        </div>   
                        <div class="c3_2">
                            <br />
                            <h1>텀블벅에서 펀딩에 성공한<br />20,300개 프로젝트와 함께 하세요.</h1><br />
                            <p>디자인, 영화, 게임, 출판, 요리, 패션, 이벤트 …
                            분야를 가릴 것 없이 수많은 창작자와 창업자들의 프로젝트들이 매일같이 올라오는 텀블벅은 한국에서 가장 활성화된 크라우드펀딩 커뮤니티입니다. 
                            지금껏 20,300개 넘는 창조적인 시도들이 120만 명의 후원자를 만나 세상에 나왔습니다.
                            sdsdsdsdsdsdsdsdsads
                            </p>
                            <br />   
                        </div>
                    </div>
                </div>
                
          </div>
      </div>
  );
}

export default Main;
