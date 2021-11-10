import axios from "axios";
import { inject, observer } from "mobx-react";
import './Detail.css';
import { Button, Card, CardGroup} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Popover } from "@mui/material";
import { Typography } from "@mui/material";
import {HeartOutlined, HeartFilled} from '@ant-design/icons';	//icons 모듈을 갖고온다
import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import shareKakao from '../../kakao/shareKakao'
import icon_detail_writer from '../../detail_images/icon_detail_writer.JPG';
import icon_share from '../../detail_images/icon_share.png';
import icon_url from '../../detail_images/icon_url.jpg';

function FundingStatus(props){ 
  const {no} = useParams();
  const {mainStore} = props;
  const {works, work} = mainStore;
  const findFunding = works.find(function(result){
    //사용자가 요청한 seq값과 일치하는 seq(db상의 seq값)을 찾는다.
    return result.work_no == no;
})

//천단위 콤마 함수
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  //링크복사기능
  const currentUrl = window.location.href;

    //PopOver창..(공유하기 버튼)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    //PopOver창 끝
    const [like, setLike] = useState(true); //좋아요(이미지)
    const [likeDB, setLikeDB] = useState(''); //좋아요(DB)

    const today = new Date();
    const dday = new Date(findFunding.funding_deadline);
    const gap = dday.getTime()-today.getTime();
    const gapResult = Math.ceil(gap/(1000*60*60*24)); //남은날짜 계산용

    function FuncLike(){
        if(like == true){
          setLikeDB(mainStore.likePlus(no))
        } else setLikeDB(mainStore.likeMinus(no))
        
    }

    function handleLike(){
      return(
      setLike(!like),
      FuncLike()
      )
    }

    return (
        <>
<div className="detail_head1">
        <div className="detail_head2">
        <h2 style={{fontFamily: 'NanumSquareB', fontSize: '40px', marginRight:"70px"}}>{findFunding.work_title}</h2>
            <center><p className="writer_homeDetail"><img src={icon_detail_writer}/>{findFunding.artist_name}</p></center><br/>
        
          {/* public 폴더 내 이미지 가져오기
            <img src={`main1.jpeg`} /> */}
<img className="detail_image" 
src={require(`../../detail_images/${findFunding.work_img}`).default} alt={findFunding.work_img}
style={{}}/>
            
        <div className="detail_head3">
            <div className="detail_head3_1">
            <span style={{fontFamily:'NanumSquareL' ,fontSize: '20px'}}>모인금액</span><br/>
            <span style={{fontSize: '30px'}}>{numberWithCommas( findFunding.funding_now)}</span> <span style={{fontFamily:'NanumSquareL'}}>원</span>
            <span style={{fontFamily:'NanumSquareB' ,fontSize: '20px'}}>  {Math.round((findFunding.funding_now/findFunding.funding_goal)*100)}%</span><br/><br/>
            <span style={{fontFamily:'NanumSquareL' ,fontSize: '20px'}}>남은시간</span><br/>
            <span style={{fontSize: '30px'}}>{gapResult}</span><span style={{fontFamily:'NanumSquareL'}}>일</span><br/><br/>
            <span style={{fontFamily:'NanumSquareL' ,fontSize: '20px'}}>후원자</span><br/>
            <span style={{fontSize: '30px'}}>{findFunding.supporters}</span>
            <span style={{fontFamily:'NanumSquareL'}}>명</span><br/>
            
            </div>
            <div className="fundingbox">
                <p style={{fontFamily: 'NanumSquareB', fontSize: '15px', textAlign: 'left'}}>펀딩 진행중</p>
                <p style={{fontFamily: 'NanumSquareL', fontSize: '15px', textAlign: 'left'}}>목표 금액은 {numberWithCommas(findFunding.funding_goal)}
                원입니다!
                결제는 {findFunding.funding_deadline}까지 가능합니다.</p>
            </div>
           
                        {/* 좋아요버튼 */}
                        <Button aria-describedby={id} variant="outline-secondary" style={{marginRight: '12px', borderColor: '#dcdcdc'}} onClick={()=>{handleLike()} } >
                        {
                            like === true
                            ? <HeartOutlined style={{fontSize: '27px'}}/> 
                            : <HeartFilled style={{fontSize: '27px'}}/>
                        }
                        </Button>

            {/* 공유하기버튼 */}
            <Button aria-describedby={id} variant="outline-secondary" onClick={handleClick} style={{marginRight: '12px', borderColor: '#dcdcdc'}}>
                <img src={icon_share} style={{width: '25px', height:'25px'}}/>
            </Button>
      
            <Link to="/donation">
            <Button variant="danger" style={{fontFamily: 'NanumSqareL', marginRight: '138px', marginLeft: '8px'}}>이 프로젝트 후원하기</Button>
            </Link>
           
        </div>
        </div>
        
        {/* <hr/> */}
        <div className="detail_head4" style={{textAlign: 'left'}}>
        <div>
        {/* <Link to={"#"} style={{marginLeft: '40px', marginRight:'15px', fontSize: '15px'}}>프로젝트 계획 </Link>
        <Link to={"#"} style={{marginRight:'10px', fontSize: '15px'}}>커뮤니티</Link> */}
        </div>
        </div>
         {/* <hr/> */}
        </div>
        
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}> 
          {/* 카카오톡 공유버튼 */}
            <button onClick={shareKakao} style={{backgroundColor:"transparent", borderColor:"transparent"}}>
              <img src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"/>
            </button> 

            <CopyToClipboard text={currentUrl}>
                <button onClick={()=>{alert('링크가 복사되었습니다!')}} 
                style={{border:"0", borderRadius:"11px"}}>
                  <img width="57px" height="67px" src={icon_url}
                style={{backgroundColor:"transparent"}}/></button>
             </CopyToClipboard>
                
            
            </Typography>
      </Popover>

        </>
)
}


export default inject("mainStore")(observer(FundingStatus));
