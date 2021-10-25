import axios from "axios";
import './Detail.css';
import { Button, Card, CardGroup} from "react-bootstrap";
import { Link } from "react-router-dom";


function DetailContents(){

    return(
        <>
        <div className="content_HomeDetail">
        글내용
        </div>
    <hr/>
    <div style={{marginLeft: '350px', marginTop:'10px'}}>
        <p style={{fontSize: '20px', textAlign: 'left', fontWeight:"bold"}}>이런 프로젝트 어떠세요?</p>
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
<div className="cardfooter">
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
<div className="cardfooter">
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
<div className="cardfooter">
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

export default DetailContents;