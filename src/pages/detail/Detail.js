import axios from "axios";
import { inject, observer } from "mobx-react";
import "./Detail.css";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Route, useParams } from "react-router";
import Donation from "./donation/Donation";
import FundingStatus from "./FundingStatus";
import CustomizedTabs from "./Tab";
import { useEffect } from "react";
import initialize from "../../kakao/initialize";

function Detail(props) {
  const { no } = useParams();
  const { mainStore } = props;
  const { works, work } = mainStore;
  console.log("noooo", no);

  const findFunding = works.find(function (result) {
    //사용자가 요청한 seq값과 일치하는 seq(db상의 seq값)을 찾는다.

    return result.work_no == no;
  });

  useEffect(() => {
    initialize(); //카톡공유하기 API
    mainStore.worksRead();
  }, [mainStore]);

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
