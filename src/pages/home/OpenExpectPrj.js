import { inject, observer } from "mobx-react";
import { Link, Route } from "react-router-dom";
import React, { Component, useEffect } from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./Home.css";

function OpenExpectPrj(props){
    const {mainStore} = props;
    const {works, work} = mainStore;
  
  
    return(
<>
<p className="main_home">공개예정 프로젝트</p>
<CardGroup className="cardgroup_Home">
      {
        works.slice(0,4).map(function(data, j){ //8개
          return(//data.work_title
<Card className="card_Home">
<Link to={`/detail/${data.work_no}`}><Card.Img variant="top" src="/main1.jpeg"
style={{width:'250px', borderRadius: 15, overflow: 'hidden' }}/></Link>
<Card.Body className="cardbody_Home">
<Card.Title className="cardtitle_Home">공예 | {data.artist_name}</Card.Title>
<Card.Text className="cardtext_Home">
<Link to={"/detail"}>{data.work_title}</Link>
</Card.Text>
<div className="cardfooter">
  <p>{Math.round((data.funding_now/data.funding_goal)*100)}% 달성</p>
</div>
</Card.Body>
{/* <Card.Footer className="cardfooter">
<small className="text-muted" id="text-muted">1858% 달성</small>
</Card.Footer> */}
</Card>

            )
        })
        
      }
      </CardGroup>           
      
</>
    )
}

export default inject("mainStore")(observer(OpenExpectPrj));

