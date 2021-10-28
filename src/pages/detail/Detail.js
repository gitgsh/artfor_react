import axios from "axios";
import './Detail.css';
import { Button, Card, CardGroup} from "react-bootstrap";
import { Link } from "react-router-dom";

import FundingStatus from "./FundingStatus";
import CustomizedTabs from "./Tab";

import { useEffect } from "react";
import initialize from "../../kakao/initialize";

function Detail(){
  useEffect(()=>{
    initialize();
  }, []) //카톡공유하기 API
    console.log('home의 detail...');
    axios.get("http://localhost:8004/app/detail")
    .then(console.log('detail아작스 성공...'))
    .catch((err)=>{console.log('에러임...', err)})
    return(
        <div className="Detail_Home_All">
  <FundingStatus/>
  <CustomizedTabs/>
  
         </div>
  )}


export default Detail;