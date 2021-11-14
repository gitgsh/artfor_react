import { inject, observer } from "mobx-react";
import "./Detail_OpenExp.css";
import { Route, useParams } from "react-router";
import FundingStatus_OpenExp from './FundingStatus_OpenExp';
import { useEffect, useState } from "react";
import initialize from "../../../kakao/initialize";

function Detail_OpenExp(props) {

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
      <FundingStatus_OpenExp />
    </div>
  );
}

export default inject("mainStore")(observer(Detail_OpenExp));
//export default Detail;
