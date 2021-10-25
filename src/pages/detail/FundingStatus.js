import axios from "axios";
import './Detail.css';
import { Button, Card, CardGroup} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Popover } from "@mui/material";
import { Typography } from "@mui/material";
import {HeartOutlined, HeartFilled} from '@ant-design/icons';	//icons 모듈을 갖고온다
import React, { useState } from "react";

function FundingStatus(){
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

    const [like, setLike] = useState(true);

    return (
        <>
<div className="detail_head1">
        <div className="detail_head2">
        <center><h2 style={{fontFamily: 'NanumSquareB', fontSize: '40px'}}> 당신의 바다꽃이 될래요. 탄생화 자개 DIY 키트</h2>
            <p className="writer_homeDetail"><img src="./icon_detail_writer.JPG"/>김지민</p></center><br/>
        
        
            <img src="./main1.jpeg" className="detail_image"/>
        <div className="detail_head3">
            <div className="detail_head3_1">
            <span style={{fontFamily:'NanumSquareL' ,fontSize: '20px'}}>모인금액</span><br/>
            <span style={{fontSize: '30px'}}>11,394,000</span> <span style={{fontFamily:'NanumSquareL'}}>원</span>
            <span style={{fontFamily:'NanumSquareB' ,fontSize: '20px'}}>  2278%</span><br/><br/>
            <span style={{fontFamily:'NanumSquareL' ,fontSize: '20px'}}>남은시간</span><br/>
            <span style={{fontSize: '30px'}}>27</span><span style={{fontFamily:'NanumSquareL'}}>일</span><br/><br/>
            <span style={{fontFamily:'NanumSquareL' ,fontSize: '20px'}}>후원자</span><br/>
            <span style={{fontSize: '30px'}}>335</span>
            <span style={{fontFamily:'NanumSquareL'}}>명</span><br/>
            </div>
            <div className="fundingbox">
                <p style={{fontFamily: 'NanumSquareB', fontSize: '15px', textAlign: 'left'}}>펀딩 진행중</p>
                <p style={{fontFamily: 'NanumSquareL', fontSize: '15px', textAlign: 'left'}}>목표 금액인 500,000원이 모여야만 결제됩니다.
결제는 2021년 11월 19일에 다함께 진행됩니다.</p>
            </div>
           
                        {/* 좋아요버튼 */}
                        <Button aria-describedby={id} variant="outline-secondary" style={{marginRight: '12px', borderColor: '#dcdcdc'}} onClick={()=>{setLike(!like)}} >
                        {
                            like === true
                            ? <HeartOutlined style={{fontSize: '27px'}}/>
                            : <HeartFilled style={{fontSize: '27px'}}/>
                        }
            </Button>

            {/* 공유하기버튼 */}
            <Button aria-describedby={id} variant="outline-secondary" onClick={handleClick} style={{marginRight: '12px', borderColor: '#dcdcdc'}}>
                <img src="./icon_share.png" style={{width: '25px', height:'25px'}}/>
            </Button>
      
            <Button variant="danger" style={{fontFamily: 'NanumSqareL', marginRight: '138px', marginLeft: '8px'}}>이 프로젝트 후원하기</Button>
           
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
        
        <div className="buttonClass_detail_Home" style={{marginLeft: '10px'}}>
        <Button variant="outline-secondary" size="sm" style={{marginRight: '10px'}}>목적</Button>
        <Button variant="outline-secondary" size="sm" style={{marginRight: '10px'}}>예산</Button>
        <Button variant="outline-secondary" size="sm" style={{marginRight: '10px'}}>일정</Button>
        <Button variant="outline-secondary" size="sm" style={{marginRight: '10px'}}>팀소개</Button>
        <Button variant="outline-secondary" size="sm" style={{marginRight: '10px'}}>신뢰와 안전</Button>
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
        <Typography sx={{ p: 2 }}> <button>카카오톡</button>
            <button>페이스북</button>
            <button>링크복사</button></Typography>
      </Popover>

        </>
)
}


export default FundingStatus;