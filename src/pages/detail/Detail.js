import axios from "axios";
import { inject, observer } from "mobx-react";
import './Detail.css';
import { Button, Card, CardGroup} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Route, useParams } from "react-router";
import Donation from "./donation/Donation";
import FundingStatus from "./FundingStatus";
import CustomizedTabs from "./Tab";
import { useEffect } from "react";
import initialize from "../../kakao/initialize";

function Detail(props){
  const {no} = useParams();
  console.log('props>>', props.work_no);
  const {mainStore} = props;
  const {works, work} = mainStore;

  useEffect(()=>{
    initialize(); //카톡공유하기 API
    // axios.get("http://localhost:8004/app/detail",{
    //   params : {
    //     work_no : no
    //   }
    //   })
    //   .then((response=>{
    //     console.log('detail아작스 성공...');
    //     console.log(response.data);
    //     console.log(response.data.work_title);
    //   }
    //     ))
    //   .catch((err)=>{console.log('에러임...', err)})
  }, []) 
  
  
    return(
        <div className="Detail_Home_All">
          <h1>디테일페이지~</h1>
          {/* 111{work.work_no} */}
         
  <FundingStatus/>
  <CustomizedTabs/>
    <Route path="/donation">
         <Donation/>
     </Route>
         </div>
  )}

export default inject("mainStore")(observer(Detail));
//export default Detail;