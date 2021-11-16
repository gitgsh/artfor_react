import { inject, observer } from "mobx-react";
import "./Detail.css";
import { Route, useParams } from "react-router";
import Donation from "./donation/Donation";
import FundingStatus from "./FundingStatus";
import CustomizedTabs from "./Tab";
import { useEffect, useState } from "react";
import initialize from "../../kakao/initialize";

function Detail(props) {

  //카카오 공유기능
  const [doKakao, setDoKakao] = useState(null)
 

  useEffect(() => {
    let isComponentMounted = true
    const fetchData = async () => {
      if (isComponentMounted) {
        setDoKakao(initialize())
      }
    }

  
    
  


    fetchData()
    return () => {
      isComponentMounted = false
    }
  }, [])
  //카카오 공유기능 끝


  return (
    <div className="Detail_Home_All">
      <FundingStatus />
      <CustomizedTabs />
      <Route path="/donation">
        <Donation />
      </Route>
    </div>
  );
}

export default inject("mainStore")(observer(Detail));
//export default Detail;
