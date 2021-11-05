import { inject, observer } from "mobx-react";
import { Card, CardGroup} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function DetailBottom(props){
    const {mainStore} = props;
    const {works, work} = mainStore;
  
    useEffect(()=>{
      mainStore.worksRead();
    }, [mainStore]);

    return(
<>
<div style={{marginLeft: '10px', marginTop:'10px'}}>
        <div className="detailBottomTitle">이런 프로젝트 어떠세요?</div>
    </div>
    <div className="CardHead_Home_Detail">
    <CardGroup className="cardgroup_Home_Detail">
        {
            works.slice(0,4).map(function(data, i){
                return(
                    <Card className="card_Home_Detail">
<Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
style={{width:'250px', borderRadius: 15, overflow: 'hidden' }}/></Link>
<Card.Body className="cardbody_Home_Detail">
<Card.Title className="cardtitle_Home_Detail">공예 | {data.artist_name}</Card.Title>
<Card.Text className="cardtext_Home_Detail">
<Link to={"/detail"}>{data.work_title}</Link>
</Card.Text>
<div className="cardfooter_Home_Detail">
  <p>{Math.round((data.funding_now/data.funding_goal)*100)}% 달성</p>
</div>
</Card.Body>
</Card>
                )
            })
        }
</CardGroup>
</div> 
</>

    )
}
export default inject("mainStore")(observer(DetailBottom));
