import "./Community.css";
import { Button, Card, CardGroup } from "react-bootstrap";

import { Link } from "react-router-dom";

function Cummunity() {
  return (
    <>
      <div className="projectTitle_Home_Detail">
        <p style={{ fontFamily: "NanumSquareR" }}>커뮤니티</p>

        <div
          className="content_HomeDetail"
          style={{ fontFamily: "NanumSquareR" }}
        >
          여기에 댓글써버리기~
        </div>
        <hr />
        <div style={{ marginLeft: "10px", marginTop: "10px" }}>
          <div
            style={{
              fontSize: "20px",
              textAlign: "left",
              fontFamily: "NanumSquareR",
            }}
          >
            이런 프로젝트 어떠세요?
          </div>
        </div>
        <div className="CardHead_Home_Detail">
          <CardGroup className="cardgroup_Home_Detail">
            <Card className="card_Home_Detail">
              <Link to={"/detail"}>
                <Card.Img
                  variant="top"
                  src="/main1.jpeg"
                  style={{
                    width: "250px",
                    borderRadius: 15,
                    overflow: "hidden",
                  }}
                />
              </Link>
              <Card.Body className="cardbody_Home_Detail">
                <Card.Title className="cardtitle_Home_Detail">
                  공예 | 김지민
                </Card.Title>
                <Card.Text className="cardtext_Home_Detail">
                  <Link to={"/detail"}>
                    당신의 바다꽃이 될래요. 탄생화 자개 DIY키트
                  </Link>
                </Card.Text>
                <div className="cardfooter_Home_Detail">
                  <p>1858% 달성</p>
                </div>
              </Card.Body>
              {/* <Card.Footer className="cardfooter">
<small className="text-muted" id="text-muted">1858% 달성</small>
</Card.Footer> */}
            </Card>
            <Card className="card_Home_Detail">
              <Link to={"/detail"}>
                <Card.Img
                  variant="top"
                  src="/main1.jpeg"
                  style={{
                    width: "250px",
                    borderRadius: 15,
                    overflow: "hidden",
                  }}
                />
              </Link>
              <Card.Body className="cardbody_Home_Detail">
                <Card.Title className="cardtitle_Home_Detail">
                  공예 | 김지민
                </Card.Title>
                <Card.Text className="cardtext_Home_Detail">
                  <Link to={"/detail"}>
                    당신의 바다꽃이 될래요. 탄생화 자개 DIY키트
                  </Link>
                </Card.Text>
                <div className="cardfooter_Home_Detail">
                  <p>1858% 달성</p>
                </div>
              </Card.Body>
              {/* <Card.Footer className="cardfooter">
<small className="text-muted" id="text-muted">1858% 달성</small>
</Card.Footer> */}
            </Card>
            <Card className="card_Home_Detail">
              <Link to={"/detail"}>
                <Card.Img
                  variant="top"
                  src="/main1.jpeg"
                  style={{
                    width: "250px",
                    borderRadius: 15,
                    overflow: "hidden",
                  }}
                />
              </Link>
              <Card.Body className="cardbody_Home_Detail">
                <Card.Title className="cardtitle_Home_Detail">
                  공예 | 김지민
                </Card.Title>
                <Card.Text className="cardtext_Home_Detail">
                  <Link to={"/detail"}>
                    당신의 바다꽃이 될래요. 탄생화 자개 DIY키트
                  </Link>
                </Card.Text>
                <div className="cardfooter_Home_Detail">
                  <p>1858% 달성</p>
                </div>
              </Card.Body>
              {/* <Card.Footer className="cardfooter">
<small className="text-muted" id="text-muted">1858% 달성</small>
</Card.Footer> */}
            </Card>
            <Card className="card_Home_Detail">
              <Link to={"/detail"}>
                <Card.Img
                  variant="top"
                  src="/main1.jpeg"
                  style={{
                    width: "250px",
                    borderRadius: 15,
                    overflow: "hidden",
                  }}
                />
              </Link>
              <Card.Body className="cardbody_Home_Detail">
                <Card.Title className="cardtitle_Home_Detail">
                  공예 | 김지민
                </Card.Title>
                <Card.Text className="cardtext_Home_Detail">
                  <Link to={"/detail"}>
                    당신의 바다꽃이 될래요. 탄생화 자개 DIY키트
                  </Link>
                </Card.Text>
                <div className="cardfooter_Home_Detail">
                  <p>1858% 달성</p>
                </div>
              </Card.Body>
              {/* <Card.Footer className="cardfooter">
<small className="text-muted" id="text-muted">1858% 달성</small>
</Card.Footer> */}
            </Card>
          </CardGroup>
        </div>
      </div>
    </>
  );
}

export default Cummunity;
