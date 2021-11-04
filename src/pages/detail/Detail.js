import axios from "axios";
import './Detail.css';
import { Button, Card, CardGroup} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Route } from "react-router";
import Donation from "./donation/Donation";
import FundingStatus from "./FundingStatus";
import CustomizedTabs from "./Tab";

import { useEffect } from "react";
import initialize from "../../kakao/initialize";

function Detail(){
  useEffect(()=>{
    initialize();
  }, []) //카톡공유하기 API
  
    axios.get("http://localhost:8004/app/detail")
    .then(console.log('detail아작스 성공...'))
    .catch((err)=>{console.log('에러임...', err)})
    return(
        <div className="Detail_Home_All">
  <FundingStatus/>
  <CustomizedTabs/>
    <Route path="/donation">
         <Donation/>
     </Route>
         </div>
  )}


export default Detail;