import "./Community.css";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import DetailBottom from "../detail/DetailBottom";
import { inject, observer } from "mobx-react";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import DirectionsIcon from '@mui/icons-material/Directions';






function Community(props) {
  const { no } = useParams();
  console.log("community no",no);

  const { communityStore } = props;
  const { cstores, cstore } = communityStore;
  // communityStore.cstoresRead();

  const findCommunity = cstores.filter(function (result) {
    //사용자가 요청한 seq값과 일치하는 seq(db상의 seq값)을 찾는다.
    return result.work_no == no;
  });

  return (
    <div className="projectTitle_Home_Detail" >
    <CommunityReply  />
      <p style={{ fontFamily: "NanumSquareR" }}>{findCommunity.map((data, i)=>{
        return <p key={i}>{data.c_content}</p>
      })}</p>
 
      <div
        className="content_HomeDetail"
        style={{ fontFamily: "NanumSquareR" }}
      >
          ㅐㅐ
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
      <DetailBottom />
    </div>
  );
  function CommunityReply(){

    function onKeyPress(e){
      
      e.preventDefault();
      if(e.key == "Enter"){
        alert("dd");
      }
    }
    return(
      <Paper
      component="form"
      style={{marginTop:"-30px", margin: "0 auto"}}
      sx={{ p: '20px 20px', display: 'flex', alignItems: 'center', width:900, boxShadow:"none", border:"1px solid #F0F0F0"}}
      
    >
      
      <Avatar src="/broken-image.jpg" style={{color:"", backgroundColor:"#F0F0F0"}} />
      <Divider sx={{ height: 28, m: 0.5,  }} orientation="vertical"  />
     
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="댓글을 입력하세요"
        onKeyPress={onKeyPress}
        // inputProps={{ 'aria-label': 'search google maps' }}
      />
  
    </Paper>

    );
  
  }
}
export default inject("communityStore")(observer(Community));
