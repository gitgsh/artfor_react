import axios from "axios";
import './Detail.css';
import { Button, Card, CardGroup} from "react-bootstrap";
import { Link } from "react-router-dom";
import DetailContents from "./DetailContents";
import FundingStatus from "./FundingStatus";

function Detail(){
    console.log('home의 detail...');
    axios.get("http://localhost:8004/app/detail")
    .then(console.log('detail아작스 성공...'))
    .catch((err)=>{console.log('에러임...', err)})
    return(
        <div>
  <FundingStatus/>
  <DetailContents/>
         </div>
  )}

export default Detail;