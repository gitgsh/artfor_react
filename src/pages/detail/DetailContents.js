import axios from "axios";
import './Detail.css';
import { Button, Card, CardGroup} from "react-bootstrap";
import { Link } from "react-router-dom";
import ScrollIntoView from 'react-scroll-into-view'
import DetailBottom from "./DetailBottom";
import './Detail.css';
import {  useParams } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { lineHeight } from "@mui/system";

function DetailContents(props){
  const { no } = useParams();
  const { mainStore } = props;
  const { works, work } = mainStore;
  const findFunding = works.find(function (result) {
    //사용자가 요청한 seq값과 일치하는 seq(db상의 seq값)을 찾는다.
    return result.work_no == no;
  });

    return(
        <>
          <div className="detail_home_all2" style={{
            // backgroundColor:'brown'
            height:'auto'
          
         }}>
        
          <div className="buttonClass_detail_Home" style={{paddingTop: "10px"}}>
        <ScrollIntoView selector=".box1" className="scroll" >
        <Button id="box1" variant="outline-secondary" size="sm" 
        style={{borderRadius:"30px", boxShadow: "none"}}>목적</Button>
        </ScrollIntoView>
        <ScrollIntoView selector=".box2" className="scroll">
        <Button id="box2" variant="outline-secondary" size="sm" style={{borderRadius:"30px", boxShadow: "none"}}>예산</Button>
        </ScrollIntoView>
        <ScrollIntoView selector=".box3" className="scroll">
        <Button id="box3" variant="outline-secondary" size="sm" style={{ borderRadius:"30px", boxShadow: "none"}}>일정</Button>
        </ScrollIntoView>
        <ScrollIntoView selector=".box4"className="scroll">
        <Button id="box4"  variant="outline-secondary" size="sm" style={{borderRadius:"30px", boxShadow: "none"}}>팀소개</Button>
        </ScrollIntoView>
        <ScrollIntoView selector=".box5" style={{width:"28%", float:"left"}}>
        <Button id="box5" variant="outline-secondary" size="sm" style={{borderRadius:"30px", marginLeft:"10px", boxShadow: "none"}}>신뢰와 안전</Button>
        </ScrollIntoView>
        </div>
      

        <div className="projectTitle_Home_Detail" style={{height:'auto'}}>
          <p style={{fontFamily: "NanumSquareR"}}>프로젝트 계획</p>
        <div className="content_HomeDetail" style={{height:'auto'}}>
          <div className="box1" style={{
            // backgroundColor:"green",
           paddingTop:"60px", 
          // height:'100vw'
          }}>[목적]
            <div style={{
              // backgroundColor: "yellow", 
              marginBottom:"50px", height:"auto"}}>
              목적 에디터<br />
              <p style={{width:"auto",  fontSize:"18px", lineHeight:"180%"}} dangerouslySetInnerHTML={{ __html:findFunding.work_content }}  />
           </div>
          </div>
          <div className="box2" style={{backgroundColor:"green", paddingTop:"60px",}}>[예산]
            <div style={{backgroundColor: "yellow", marginBottom:"50px", height:"auto"}}>
              예산 에디터
           </div>
          </div>

          <div className="box3" style={{backgroundColor:"green", paddingTop:"60px", }}>[일정]
            <div style={{backgroundColor: "yellow", marginBottom:"50px"}}>
              일정 에디터
           </div>
          </div>
          
          <div className="box4" style={{backgroundColor:"green", paddingTop:"60px",}}>[팀소개]
            <div style={{backgroundColor: "yellow", marginBottom:"50px"}}>
              팀소개 에디터
           </div>
          </div>

          <div className="box5" style={{backgroundColor:"green", paddingTop:"60px",}}>[신뢰와 안전]
            <div style={{backgroundColor: "yellow", marginBottom:"50px"}}>
              신뢰와 안전 에디터
           </div>
          </div>
       
    <hr/>

    </div>
</div>
</div>
<DetailBottom/>
    </>
    )
}

// export default DetailContents;
export default inject("mainStore")(observer(DetailContents));
