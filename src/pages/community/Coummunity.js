import "./Community.css";
import { Button, Card, CardGroup } from "react-bootstrap";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import DetailBottom from "../detail/DetailBottom";
import CommunityBoard from "./CommunityBoard";
import { WrongLocation } from "@mui/icons-material";
import { inject, observer } from "mobx-react";

function Community(props) {
  const { no } = useParams();

  const { communityStore } = props;
  const { cstores, cstore } = communityStore;

  useEffect(() => {
    communityStore.cstoresRead();
  }, []);

  const findCommunity = cstores.find(function (result) {
    //사용자가 요청한 seq값과 일치하는 seq(db상의 seq값)을 찾는다.
    return result.work_no == no;
  });
  console.log("findCommunity", findCommunity);
  return (
    <div className="projectTitle_Home_Detail">
      <p style={{ fontFamily: "NanumSquareR" }}></p>

      <div
        className="content_HomeDetail"
        style={{ fontFamily: "NanumSquareR" }}
      >
        여기에 댓글써버리기~
      </div>
      <hr />
      <div style={{ marginLeft: "10px", marginTop: "10px" }}>
        <div
          style={{
            fontSize: "20px",
            textAlign: "left",
            fontFamily: "NanumSquareR",
          }}
        >
          이런 프로젝트 어떠세요?
        </div>
      </div>
      <DetailBottom />
    </div>
  );
}
export default inject("communityStore")(observer(Community));
