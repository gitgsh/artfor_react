import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import React, { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";
import Detail from '../detail/Detail.js'
import axios from "axios";
import "./Home.css";

function HomeList(){
  const [list, setList] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8004/app/').then((result)=>{console.log('홈 아작스 성공...');
    const list_ = result.data;
    console.log('list_>>> ', list_);
    setList([...list_]);
  }).catch(console.log('홈 아작스 실패...'));

  }, []);


    return(
        
<div className="main_card">
<p className="main_home">주목할 만한 프로젝트</p>
{/* {list[0].work_no} 어떻게 꺼내지?ㅋㅎ*/}
<CardGroup>
      {
        list.map(function(data, i){
          return(//data.work_title
            <>
            
<Card className="card_Home">
<Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
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
</>
            )
        })

      }
      </CardGroup>
      <br/><br/><br/>
<p className="main_home">공개예정 프로젝트</p>
<CardGroup>
      {
        list.map(function(data, i){
          return(//data.work_title
            <>
            
<Card className="card_Home">
<Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
style={{width:'250px', borderRadius: 15, overflow: 'hidden' }}/></Link>
<Card.Body className="cardbody_Home">
<Card.Title className="cardtitle_Home">공예 | {data.artist_name}</Card.Title>
<Card.Text className="cardtext_Home">
<Link to={`/detail/${data.work_no}`}>{data.work_title}</Link>
</Card.Text>
<div className="cardfooter">
  <p>{Math.round((data.funding_now/data.funding_goal)*100)}% 달성</p>
</div>
</Card.Body>
{/* <Card.Footer className="cardfooter">
<small className="text-muted" id="text-muted">1858% 달성</small>
</Card.Footer> */}
</Card>
</>
            )
        })

      }
      </CardGroup>






</div>

)}

<Route path="/detail">
<div>detail 페이지 ... </div>

</Route>

export default inject("mainStore")(observer(HomeList));