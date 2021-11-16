import React from "react";
import { Button, Image } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Card } from "react-bootstrap";
//import '../project/Main.css';
import "./Main.css";
import { CardGroup } from "react-bootstrap";
import { margin, style } from "@mui/system";
import { Link } from "react-router-dom";

function Main(props) {
  //dd
  return (
    <div>
      <div className="pmain" style={{ fontFamily: "NanumSquareR" }}>
        <Jumbotron
          className="p_m_jumbo"
          style={{
            paddingTop: "25px",
            fontFamily: "NanumSquareEB",
            fontWeight: "bold",
          }}
        >
          <h1 className="p_m_title">
            마음 속 프로젝트 아이디어,
            <br />
            artfor에서 현실로..
          </h1>
          <br />
          <p className="p_m_p1" style={{ fontFamily: "NanumSquareL" }}>
            크라우드펀딩으로 프로젝트를 위한 자금도 모으고,
            <br />
            든든한 후원자 네트워크도 확보할 수 있습니다.{" "}
          </p>
          <br />
          <p className="p_m_lead" style={{ fontFamily: "NanumSquareR" }}>
            <div className="p_m_head_btn2">
              <Link to="/project/check">
                <Button variant="dark" size="lg">
                  지금 시작
                </Button>
              </Link>
            </div>
          </p>
          <br />
        </Jumbotron>
        <div
          class="p_m_miancontent"
          height="100%"
          style={{ lineHeight: "180%" }}
        >
          <div class="p_m_c1">
            <div class="p_m_c1_1">
              <img src="../imgg1.PNG" width="100%" />
            </div>
            <div class="p_m_c1_2">
              <br />
              <h1 style={{ fontWeight: "bold" }}>
                artfor에서 펀딩에 성공한
                <br />
                20,300개 프로젝트와 함께 하세요.
              </h1>
              <br />
              <p style={{ fontFamily: "NanumSquareL", fontWeight: "bold" }}>
                디자인, 영화, 게임, 출판, 요리, 패션, 이벤트 … 분야를 가릴 것
                없이 수많은 창작자와 창업자들의 프로젝트들이 매일같이 올라오는
                artfor은 한국에서 가장 활성화된 크라우드펀딩 커뮤니티입니다.
                지금껏 20,300개 넘는 창조적인 시도들이 120만 명의 후원자를 만나
                세상에 나왔습니다.
              </p>
              <br />
            </div>
          </div>
          <div class="p_m_c2">
            <div class="p_m_c2_1">
              <br />
              <h2 style={{ fontWeight: "bold" }}>쉽게 시작할 수 있습니다!</h2>
              <br />
              <p style={{ fontFamily: "NanumSquareL", fontWeight: "bold" }}>
                ‘크라우드펀딩’은 어려울지 몰라도 artfor는 어렵지 않습니다.
                수익을 내서 현금을 돌려주거나 소유권을 나누는 등의 복잡한 과정도
                필요하지 않습니다.
                <br />
                펀딩으로 모은 금액을 통해 만들어낸 제품 또는 특별한 경험 그
                자체를 후원자들과 약속하고 공유하면 됩니다.
              </p>
            </div>
            <div class="p_m_c2_2">
              <CardGroup>
                <Card className="p_m_card">
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src="https://tumblbug.com/wpa/6e078bfbb32d5f327d979b5304ce77cc.png"
                      style={{ width: "150px" }}
                    />
                    <Card.Title className="p_m_cardtitle">
                      프로젝트 올리기
                    </Card.Title>
                    <Card.Text
                      className="p_m_cardtext"
                      style={{ fontFamily: "NanumSquareL", fontWeight: "bold" }}
                    >
                      창작 아이디어를 소개하는 프로젝트 페이지를 작성합니다.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p_m_card">
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src="https://tumblbug.com/wpa/8bb77b6ee1e1135e474c01eca206fc23.png"
                      style={{ width: "150px" }}
                    />
                    <Card.Title className="p_m_cardtitle">
                      펀딩 진행하기
                    </Card.Title>
                    <Card.Text
                      className="p_m_cardtext"
                      style={{ fontFamily: "NanumSquareL", fontWeight: "bold" }}
                    >
                      정해진 기간 동안 후원자를 모으기 위해 열심히 홍보합니다.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p_m_card">
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src="https://tumblbug.com/wpa/41a6c7d14f01251ac4093f7b9b81e828.png"
                      style={{ width: "150px" }}
                    />
                    <Card.Title className="p_m_cardtitle">
                      만들고 보답하기
                    </Card.Title>
                    <Card.Text
                      className="p_m_cardtext"
                      style={{ fontFamily: "NanumSquareL", fontWeight: "bold" }}
                    >
                      전달받은 후원금으로 창작에 돌입합니다.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          </div>
          <div class="p_m_c3">
            <br />
            <br />
            <h2 style={{ fontWeight: "bold" }}>누구에게나 열려 있습니다</h2>
            <div class="p_m_c3_1">
              <Card style={{ width: "22rem" }}>
                <Card.Body>
                  <Card.Title className="p_m_cardtitle">창작자</Card.Title>
                  <Card.Subtitle
                    className="p_m_cardsub"
                    style={{ fontWeight: "bold" }}
                  >
                    평소 몰두했던 작업이나 구상만 하던 창작 아이디어를 본격적인
                    단계로 발전시킬 기회로 삼아보세요.
                  </Card.Subtitle>
                  <Card.Text
                    className="p_m_cardtext"
                    style={{ fontFamily: "NanumSquareL", fontWeight: "bold" }}
                  >
                    시작하는 창작자에게 artfor는 지원금, 공모전 등의 방식들보다
                    훨씬 자율적이고 독립적으로 나와 내 작업을 알릴 수 있는
                    새로운 길입니다. 이미 콘텐츠와 팬층을 확보한 작가라면 신선한
                    기획을 통해 팬들을 만나는 새로운 창구를 열어보는 건
                    어떨까요?
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div class="p_m_c3_2">
              <Card style={{ width: "22rem" }}>
                <Card.Body>
                  <Card.Title className="p_m_cardtitle">브랜드</Card.Title>
                  <Card.Subtitle
                    className="p_m_cardsub"
                    style={{ fontWeight: "bold" }}
                  >
                    초기 비용이나 재고 부담 없이 새로운 제품이나 서비스를
                    론칭하고 코어 팬 베이스를 확보하세요.
                  </Card.Subtitle>
                  <Card.Text
                    className="p_m_cardtext"
                    style={{ fontFamily: "NanumSquareL", fontWeight: "bold" }}
                  >
                    브랜드에 이목을 집중시키는 스토리를 통해 마케팅 효과를
                    극대화할 수 있습니다. 트렌디하면서도 개인의 취향과 가치가
                    강조되는 새로운 참여형 소비 창구로 각광받는 artfor에서 모인
                    후원자들의 신뢰는 일반 이커머스에서보다 훨씬 깊고 오래 가는
                    팬 베이스가 되어줄 것입니다
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div class="p_m_c3_3">
              <Card style={{ width: "21rem" }}>
                <Card.Body>
                  <Card.Title className="p_m_cardtitle">캠페인</Card.Title>
                  <Card.Subtitle
                    className="p_m_cardsub"
                    style={{ fontWeight: "bold" }}
                  >
                    임팩트 있는 캠페인을 통해 사회적 이슈를 지속가능한 참여와
                    후원으로 전환시켜보세요.
                  </Card.Subtitle>
                  <Card.Text
                    className="p_m_cardtext"
                    style={{ fontFamily: "NanumSquareL", fontWeight: "bold" }}
                  >
                    언론이나 소셜미디어에서 떠오르는 이슈들을 구체적인 행동으로
                    전환시키는 데에 artfor 프로젝트가 제격입니다. 새롭고 젊은
                    정치참여·사회운동 방식으로 주목받는 artfor 펀딩으로 더 많은
                    지지자를 얻고, 사회적 목소리를 증폭시켜보세요.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <br />
        <br />
        <Jumbotron className="p_m_jumbo2">
          <h1
            className="p_m_title"
            style={{ color: "black", paddingTop: "40px" }}
          >
            프로젝트를 만들어보세요!
          </h1>
          <p className="p_m_p1" style={{ color: "black" }}>
            직관적인 프로젝트 편집 도구로 곧바로 작성을 시작할 수 있습니다.
            <br />
            프로젝트를 제출하면 artfor의 심사를 거쳐 후원자에게 공개됩니다.
          </p>
          <br />
          <p className="p_m_lead">
            <div className="p_m_head_btn2">
              <Link to="/project/check">
                <Button variant="dark" size="lg">
                  지금 시작
                </Button>
              </Link>
            </div>
          </p>
          <br />
        </Jumbotron>
      </div>
    </div>
  );
}

export default Main;
