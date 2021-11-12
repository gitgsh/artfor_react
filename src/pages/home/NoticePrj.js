import { inject, observer } from "mobx-react";
import { Link, Route } from "react-router-dom";
import React, { ComponentElement, useEffect } from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./Home.css";
// import main3 from '../../detail_images/main3.jpeg';

function NoticePrj(props){
    const {mainStore} = props;
    const {works, work, getWork} = mainStore;
    
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '-' + month  + '-' + day; //현재날짜(2021-11-10 형태)

    //전체 데이터(반복문)
    const allList = works.map(function(data, i){
      return (
        data
      )
    })
  
    //전체 데이터 중 이미 오픈한 && && 아직 종료되지 않은 데이터 필터링 
    const findOpen = allList.filter((data)=>{
      return (data.funding_startline <= dateString) && (data.funding_deadline >= dateString)
    })


    return(
<>
<p className="main_home">주목할 만한 프로젝트</p>
<CardGroup className="cardgroup_Home">
      {
        findOpen.slice(0,4).map(function(data, j){ //8개
          return(//data.work_title
<Card className="card_Home">
<Link to={`/detail/${data.work_no}`} onClick={()=>{mainStore.getWork(data.work_no)}}><Card.Img variant="top" 
// src={require(`../../detail_images/${data.work_img}`).default} alt={data.work_img}
src={`image/${data.work_img}`}
style={{width:'250px', borderRadius: 15, overflow: 'hidden' }}/></Link>
<Card.Body className="cardbody_Home">
<Card.Title className="cardtitle_Home">공예 | {data.artist_name}</Card.Title>
<Card.Text className="cardtext_Home">
<Link to={`/detail/${data.work_no}`} onClick={()=>{mainStore.getWork(data.work_no)}}>{data.work_title}</Link>
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

      <CardGroup className="cardgroup_Home">
      {
        findOpen.slice(4,8).map(function(data, j){ 
          return(//data.work_title
<Card className="card_Home">
<Link to={`/detail/${data.work_no}`} onClick={()=>{mainStore.getWork(data.work_no)}}><Card.Img variant="top" 
src={`image/${data.work_img}`}
style={{width:'250px', borderRadius: 15, overflow: 'hidden' }}/></Link>
<Card.Body className="cardbody_Home">
<Card.Title className="cardtitle_Home">공예 | {data.artist_name}</Card.Title>
<Card.Text className="cardtext_Home"> 
<Link to={`/detail/${data.work_no}`} onClick={()=>{mainStore.getWork(data.work_no)}}>{data.work_title}</Link> 
</Card.Text>
<div className="cardfooter">
  <p>{Math.round((data.funding_now/data.funding_goal)*100)}% 달성</p>
</div>
</Card.Body>
</Card>
            )
        })
      }
      </CardGroup>         
</>
    )
}

export default inject("mainStore")(observer(NoticePrj));

