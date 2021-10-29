import axios from "axios";
import './Detail.css';
import { Button, Card, CardGroup} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRef } from "react";



function DetailContents(props){

  const myRef = useRef(null)
  const executeScroll = ()=>{
    myRef.current.scrollIntoView()
    
  }




    return(
        <>
        <div ref={myRef}> 엘리먼트 투 스크롤 투~~ </div>
        <button onClick={executeScroll}> Click to scroll~~</button>

          <div className="buttonClass_detail_Home" style={{paddingTop: "10px"}}>
        <Button data-anchor="anchor_div1" variant="outline-secondary" size="sm" style={{marginRight: '10px', borderRadius:"30px"}}>목적</Button>
        <Button data-anchor="anchor_div2" variant="outline-secondary" size="sm" style={{marginRight: '10px', borderRadius:"30px"}}>예산</Button>
        <Button data-anchor="anchor_div3" variant="outline-secondary" size="sm" style={{marginRight: '10px', borderRadius:"30px"}}>일정</Button>
        <Button data-anchor="anchor_div4" variant="outline-secondary" size="sm" style={{marginRight: '10px', borderRadius:"30px"}}>팀소개</Button>
        <Button data-anchor="anchor_div5" variant="outline-secondary" size="sm" style={{marginRight: '10px', borderRadius:"30px"}}>신뢰와 안전</Button>
        </div>
        <div className="projectTitle_Home_Detail">
          <p style={{fontFamily: "NanumSquareR"}}>프로젝트 계획</p>
        
        <div className="content_HomeDetail" style={{fontFamily: "NanumSquareR"}}>
        
          
          <div id="anchor_div1" style={{backgroundColor:"green"}}>[목적]
            <div style={{backgroundColor: "yellow", marginBottom:"50px"}}>
              목적 에디터
           </div>
          </div>
          <div style={{backgroundColor:"green"}}>[예산]
            <div style={{backgroundColor: "yellow", marginBottom:"50px"}}>
              예산 에디터
           </div>
          </div>

          <div id="anchor_div3" style={{backgroundColor:"green"}}>[일정]
            <div style={{backgroundColor: "yellow", marginBottom:"50px"}}>
              일정 에디터
           </div>
          </div>
          
          <div id="anchor_div4" style={{backgroundColor:"green"}}>[팀소개]
            <div style={{backgroundColor: "yellow", marginBottom:"50px"}}>
              팀소개 에디터
           </div>
          </div>

          <div id="anchor_div5" style={{backgroundColor:"green"}}>[신뢰와 안전]
            <div style={{backgroundColor: "yellow", marginBottom:"50px"}}>
              신뢰와 안전 에디터
           </div>
          </div>

        </div>
    <hr/>
    <div style={{marginLeft: '10px', marginTop:'10px'}}>
        <div style={{fontSize: '20px', textAlign: 'left', fontFamily: "NanumSquareR"}}>이런 프로젝트 어떠세요?</div>
    </div>
    <div className="CardHead_Home_Detail">
    <CardGroup className="cardgroup_Home_Detail">
    <Card className="card_Home_Detail">
<Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
style={{width:'250px', borderRadius: 15, overflow: 'hidden' }}/></Link>
<Card.Body className="cardbody_Home_Detail">
<Card.Title className="cardtitle_Home_Detail">공예 | 김지민</Card.Title>
<Card.Text className="cardtext_Home_Detail">
<Link to={"/detail"}>당신의 바다꽃이 될래요. 탄생화 자개 DIY키트</Link>
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
<Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
style={{width:'250px', borderRadius: 15, overflow: 'hidden' }}/></Link>
<Card.Body className="cardbody_Home_Detail">
<Card.Title className="cardtitle_Home_Detail">공예 | 김지민</Card.Title>
<Card.Text className="cardtext_Home_Detail">
<Link to={"/detail"}>당신의 바다꽃이 될래요. 탄생화 자개 DIY키트</Link>
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
<Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
style={{width:'250px', borderRadius: 15, overflow: 'hidden' }}/></Link>
<Card.Body className="cardbody_Home_Detail">
<Card.Title className="cardtitle_Home_Detail">공예 | 김지민</Card.Title>
<Card.Text className="cardtext_Home_Detail">
<Link to={"/detail"}>당신의 바다꽃이 될래요. 탄생화 자개 DIY키트</Link>
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
<Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
style={{width:'250px', borderRadius: 15, overflow: 'hidden' }}/></Link>
<Card.Body className="cardbody_Home_Detail">
<Card.Title className="cardtitle_Home_Detail">공예 | 김지민</Card.Title>
<Card.Text className="cardtext_Home_Detail">
<Link to={"/detail"}>당신의 바다꽃이 될래요. 탄생화 자개 DIY키트</Link>
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

    )
}

export default DetailContents;