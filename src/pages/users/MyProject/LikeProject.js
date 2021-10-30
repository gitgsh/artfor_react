import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../Project.css";

function LikeProject() {
  return (
    <div>
      <div className="project_component">
          <CardGroup className="card_group">
            <Card className="card_User">
              <Link to={"/detail"}>
                <Card.Img variant="top" src="/main1.jpeg" style={{width:'250px', borderRadius: 15, overflow: 'hidden' }}/>
              </Link>
              <Card.Body className="cardbody_User">
                <Card.Title className="cardtitle_User">공예 | 김지민</Card.Title>
                <Card.Text className="cardtext_User">
                  <Link to={"/detail"}>당신의 바다꽃이 될래요. 탄생화 자개 DIY키트</Link>
                </Card.Text>
                <div className="cardfooter">
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
  );
};

export default LikeProject;