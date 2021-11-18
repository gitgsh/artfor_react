import React, { useState, useEffect } from "react";
import { buttons } from "./testData";
import { Button } from "react-bootstrap";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { FcInspection } from "react-icons/fc";
import "./AdminMain.css";
import { inject, observer } from "mobx-react";
import { axiosError } from "../../stores/common";
import { Link } from 'react-router-dom';
import axios from "axios";


function ManageArtwork(props) {

  const {mainStore} = props;
  const {works} = mainStore;

  const [status, setStatus] = useState("모두");

  
  useEffect(()=>{
    mainStore.worksRead();
  },[mainStore]);
  
  const artworks = works.map(function(data, i){
    return data;
  });

  

  const filter = artworks.filter((data) => {
    console.log("data.status >", data.funding_status);
    if(status === "모두"){
      return data
    }else{
    return(
      data.funding_status.includes(status)
      );
    }
  });

  function  changeFundingStatus(work_no, status){
    let data = {work_no : work_no, funding_status : status};
    console.log("승인할 데이터는? " ,data);
    
    axios
      .post("http://localhost:8004/app/admin/changeFundingStatus", data)
      .then((response) => {
        console.log("Done changeWorkStatus", response);
        mainStore.worksRead();

      })
      .catch((error) => {
        axiosError(error);
      });
  }




    return (
        <div className="setting-margin-abox">
            <div className="setting-abox-1" >
              <div className="myicon-abox" style={{marginTop:'23px'}}>
                  <FcInspection size="80" />
              </div>
              <div className="myname-abox">
                <h2>
                  운영자 페이지
                </h2>
                <h4>게시물 관리</h4>
                상태 : {status}
              </div>
            </div>
              <div style={{clear:'both', borderBottom:'1px solid #e8e8e8'}} />
      
              <div className="setting-abox-1" >
              <div>
            <div className="ButtonGroup" style={{marginTop: '30px', textAlign:'left'}}>
            {buttons &&
                buttons.map((type, index) => (
                    <Button variant="outline-secondary" size="sm" style={{marginRight: '10px',  borderRadius:"30px"}}  key={index} value={type.value} onClick={ ()=> { setStatus(type.value); console.log(filter)} }>
                    {type.name}
                    </Button>
                    ))}
            </div>
            <div style={{ paddingTop:'50px  ', clear:'both'}}>
            { filter && filter.map(artWork => (
            <Paper sx={{ p: 2, margin: 'auto', maxWidth: 980, flexGrow: 1 }} key={artWork.work_no}>
            <Grid container spacing={2} rowSpacing={5}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        {/* <Img alt="complex" src= {`/image/j2.jpg`} /> */}
                        <Link to={`/detail/${artWork.work_no}`} ><Img alt="complex" src= {`/image/${artWork.work_img}`} /></Link>
                    </ButtonBase>
                </Grid>
                <Grid item xs={6} sm container>
                    <Grid item xs container direction="column" spacing={2} sx={{margin : 2}}>
                        <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            상태 : {artWork.funding_status}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           작품 번호 : {artWork.work_no}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            작품 명 : {artWork.work_title}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            작가 명 : {artWork.artist_name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            펀딩 시작일 : {artWork.funding_startline}
                        </Typography>
                        </Grid>

                    </Grid>
                    <Grid item sx={{width:128, margin:5}} >
                        <Typography variant="subtitle1" component="div">

                            { (artWork.funding_status != '대기') ? 
                            <Button variant="outline-secondary" size="sm" style={{marginRight: '10px',  borderRadius:"30px"}} onClick={ 
                                ()=> { changeFundingStatus(artWork.work_no,"대기")}} >
                            대기 변경</Button> : <></>}

                            { (artWork.funding_status != '승인') ? 
                            <Button variant="outline-secondary" size="sm" style={{marginRight: '10px',  borderRadius:"30px"}} onClick={ 
                                ()=> { changeFundingStatus(artWork.work_no,"승인")}} >
                            승인 하기</Button> : <></>}

                            { (artWork.funding_status != '반려') ? 
                            <Button variant="outline-secondary" size="sm" style={{marginRight: '10px',  borderRadius:"30px"}}  onClick={ 
                                ()=> { changeFundingStatus(artWork.work_no,"반려"); }}>
                            반려 하기</Button>  : <></>} 

                            { (artWork.funding_status != '마감') ? 
                            <Button variant="outline-secondary" size="sm" style={{marginRight: '10px',  borderRadius:"30px"}}  onClick={ 
                                ()=> { changeFundingStatus(artWork.work_no,"마감"); }}>
                            마감 하기</Button>  : <></>} 
                        
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            </Paper>
            ))}
            </div>      
        </div>
              </div>
            
            
        </div>
    );
}


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


export default inject("mainStore")(observer(ManageArtwork));