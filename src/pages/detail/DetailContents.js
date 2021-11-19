import axios from "axios";
import "./Detail.css";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";
import DetailBottom from "./DetailBottom";
import "./Detail.css";
import { useParams } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { lineHeight } from "@mui/system";

function DetailContents(props) {
  const { no } = useParams();
  const { mainStore } = props;
  const { works, work } = mainStore;
  const findFunding = works.find(function (result) {
    //사용자가 요청한 seq값과 일치하는 seq(db상의 seq값)을 찾는다...
    return result.work_no == no;
  });

  return (
    <>
      <div
        className="detail_home_all2"
        style={{
          // backgroundColor:'brown'
          height: "auto",
        }}
      >
        <div className="buttonClass_detail_Home" style={{ paddingTop: "10px" }}>
          <ScrollIntoView selector=".box1" className="scroll">
            <Button
              id="box1"
              variant="outline-secondary"
              size="sm"
              style={{ borderRadius: "30px", boxShadow: "none" }}
            >
              계획
            </Button>
          </ScrollIntoView>
          <ScrollIntoView
            selector=".box5"
            style={{ width: "28%", float: "left" }}
          >
            <Button
              id="box5"
              variant="outline-secondary"
              size="sm"
              style={{
                borderRadius: "30px",
                marginLeft: "10px",
                boxShadow: "none",
              }}
            >
              신뢰와 안전
            </Button>
          </ScrollIntoView>
        </div>

        <div className="projectTitle_Home_Detail" style={{ height: "auto" }}>
          <p style={{ fontFamily: "NanumSquareR" }}>프로젝트 계획</p>
          <div className="content_HomeDetail" style={{ height: "auto" }}>
            <div
              className="box1"
              style={{
                // backgroundColor:"green",
                paddingTop: "60px",
                // height:'100vw'
              }}
            >
              | 계획
              <div
                style={{
                  // backgroundColor: "yellow",
                  marginBottom: "50px",
                  height: "auto",
                }}
              >
                <br />
                <p
                  style={{
                    width: "auto",
                    fontSize: "18px",
                    lineHeight: "180%",
                  }}
                  dangerouslySetInnerHTML={{ __html: findFunding.work_content }}
                />
              </div>
            </div>

            <div className="box5" style={{ paddingTop: "60px" }}>
              | 신뢰와 안전
              <div style={{ marginBottom: "50px" }}>
                <br />
                <p style={{ fontSize: "16px" }}>교환 및 환불 안내</p>

                <p style={{ fontSize: "14px", color: "#6D6D6D" }}>
                  모든 프로젝트 공통
                  <br />
                  <br />
                  프로젝트 마감일 후에는 즉시 제작 및 실행에 착수하는 프로젝트
                  특성상 단순 변심에 의한 후원금 환불이 불가능합니다.
                  <br />
                  예상 전달일로부터 15일 이상 선물 전달이 이뤄지지 않을 경우,
                  환불을 원하시는 분들께는 수수료를 포함한 후원금을 환불해
                  드립니다. (플랫폼 수수료: 모금액의 5%, 부가세 별도 / 결제
                  수수료: 결제 성공액의 3%, 부가세 별도 )<br />
                  선물 전달을 위한 배송지 및 서베이 답변은 2019. 5. 23 에 일괄
                  취합할 예정입니다. 이후 배송지 변경이나 서베이 답변 변경을
                  원하실 때에는 '창작자에게 문의하기'로 개별 문의하셔야 합니다.
                  <br />
                  <br />
                  <br />
                  배송이 필요한 선물이 있는 경우
                  <br />
                  <br />
                  파손 또는 불량품 수령 시 3일 이내로 교환이 가능합니다. 교환 및
                  AS 문의는 '창작자에게 문의하기' 또는 artfor@gmail.com로 신청해
                  주세요.
                  <br />
                  파손이나 불량품 교환시 발생하는 비용은 창작자가 부담합니다.
                  선물 확인을 위한 포장 훼손 외에 아이템의 가치가 훼손된
                  경우에는 교환 및 환불이 불가합니다.
                  <br />
                  후원자가 배송지를 잘못 기재하거나 진행자에게 사전 고지 없이
                  배송지를 수정하여 배송사고가 발생할 경우 진행자는 최대 1번까지
                  재발송 해 드립니다. 배송비 부담은 후원자 에게 있습니다.
                  프로젝트 종료 이후, 파손이나 불량이 아닌 단순변심, 워크숍 불참
                  등에 의한 교환 및 환불이 불가합니다.
                  <br />
                  <br />
                  <br />
                  공연/행사 등 현장수령으로 이루어지는 선물의 경우
                  <br />
                  <br />
                  워크숍 참가권은 타인에게 양도가 가능합니다. 단 최소 워크숍 1일
                  전까지 양도에 대한 사전 고지가 없을 시 진행이 어려울 수
                  있습니다.
                  <br />
                  현장 수령할 선물중 선택사항을 미리 고지하지 않았을 경우 물량
                  확보가 어려울 수 있습니다. 사전에 서베이 답변을 통해서나 문의
                  메일로 선택사항을 필히 전달 요청드립니다.워크숍은 회당 4인
                  기준으로 운영 예정으로 인원이 충분히 모집되지 않아 진행이
                  어려울 경우 수수료를 포함한 후원금을 환불해 드립니다.
                  <br />
                </p>
              </div>
            </div>

            <hr />
          </div>
        </div>
      </div>
      <DetailBottom />
    </>
  );
}

// export default DetailContents;
export default inject("mainStore")(observer(DetailContents));