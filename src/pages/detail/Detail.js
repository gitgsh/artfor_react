import axios from "axios";
import './Detail.css';
import { Button, Card, CardGroup} from "react-bootstrap";
import { Link } from "react-router-dom";

function Detail(){
    console.log('home의 detail...');
    axios.get("http://localhost:8004/app/detail")
    .then(console.log('detail아작스 성공...'))
    .catch((err)=>{console.log('에러임...', err)})
    return(
        <>
        <div className="detail_head1">
        <div className="detail_head2">
        <center><h2 style={{fontWeight: "bold"}}>  바다꽃이 될래요. 탄생화 자개 DIY 키트</h2>
            <p>김지민</p></center><br/>
        
        
            <img src="./main1.jpeg" className="detail_image"/>
        <div className="detail_head3">
            <div className="detail_head3_1">
            <span style={{fontSize: '20px'}}>모인금액</span><br/>
            <span style={{fontSize: '30px'}}>11,394,000</span> <span>원</span>
            <span style={{fontSize: '20px', color:'blue'}}>  2278%</span><br/><br/>
            <span style={{fontSize: '20px'}}>남은시간</span><br/>
            <span style={{fontSize: '30px'}}>27</span><span>일</span><br/><br/>
            <span style={{fontSize: '20px'}}>후원자</span><br/>
            <span style={{fontSize: '30px'}}>173</span><span>명</span><br/>
            </div>
            <div className="fundingbox">
                <p>펀딩 진행중</p>
                <p>목표 금액인 500,000원이 모여야만 결제됩니다.
결제는 2021년 11월 19일에 다함께 진행됩니다.</p>
            </div>
         

            <button><img src="./images/heart.jpg"/></button>
            <button><img src="./images/share.jpg"/></button>
            <Button variant="danger">이 프로젝트 후원하기</Button>
            
        </div>
        </div>
        
        
        <hr/>
        <div className="detail_head4" style={{textAlign: 'left'}}>
        <div>
        <Link to={"#"} style={{marginLeft: '40px', marginRight:'15px', fontSize: '15px'}}>프로젝트 계획 </Link>
        <Link to={"#"} style={{marginRight:'10px', fontSize: '15px'}}>커뮤니티</Link>
        </div>
        </div>
         <hr/>
        </div>

        <br/><br/><br/>
        <div className="buttonClass" style={{marginLeft: '80px'}}>
        <Button variant="outline-secondary" size="sm" style={{marginRight: '10px'}}>목적</Button>
        <Button variant="outline-secondary" size="sm" style={{marginRight: '10px'}}>예산</Button>
        <Button variant="outline-secondary" size="sm" style={{marginRight: '10px'}}>일정</Button>
        <Button variant="outline-secondary" size="sm" style={{marginRight: '10px'}}>팀소개</Button>
        <Button variant="outline-secondary" size="sm" style={{marginRight: '10px'}}>신뢰와 안전</Button>
        </div>
            
        <div className="content">
            글내용
        </div>
        <hr/>
        <div style={{marginLeft: '350px', marginTop:'10px'}}>
            <p style={{fontSize: '20px', textAlign: 'left', fontWeight:"bold"}}>이런 프로젝트 어떠세요?</p>
            </div>
        <div className="CardHead">
    <CardGroup>
  <Card className="card">
    <Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
    style={{borderRadius: 15, overflow: 'hidden'}} /></Link>
    <Card.Body>
      <Card.Title className="cardtitle">공예 | 김지민</Card.Title>
      <Card.Text className="cardtext">
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
  <Card className="card">
    <Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
    style={{borderRadius: 15, overflow: 'hidden'}} /></Link>
    <Card.Body>
      <Card.Title className="cardtitle">공예 | 김지민</Card.Title>
      <Card.Text className="cardtext">
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
  <Card className="card">
    <Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
    style={{borderRadius: 15, overflow: 'hidden'}} /></Link>
    <Card.Body>
      <Card.Title className="cardtitle">공예 | 김지민</Card.Title>
      <Card.Text className="cardtext">
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
  <Card className="card">
    <Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
    style={{borderRadius: 15, overflow: 'hidden'}} /></Link>
    <Card.Body>
      <Card.Title className="cardtitle">공예 | 김지민</Card.Title>
      <Card.Text className="cardtext">
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
        </>
    )

}

export default Detail;