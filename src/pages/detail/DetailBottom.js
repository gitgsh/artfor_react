import { inject, observer } from "mobx-react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function DetailBottom(props) {
  const { mainStore } = props;
  const { works, work } = mainStore;

  var today = new Date();
  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);
  var dateString = year + "-" + month + "-" + day; //현재날짜(2021-11-10 형태)

  //전체 데이터(반복문)
  const allList = works.map(function (data, i) {
    return data;
  });

  //전체 데이터 중 이미 오픈한 && 아직 종료되지 않은 데이터 필터링
  const findOpen = allList.filter((data) => {
    return (
      data.funding_startline <= dateString &&
      data.funding_deadline >= dateString
    );
  });

  // useEffect(()=>{
  //   window.scrollTo(0,0);
  //   console.log('top scroll...');
  // },[mainStore])

  // useEffect(()=>{
  //   mainStore.worksRead();
  // }, [mainStore]);

  return (
    <>
      <div style={{ marginLeft: "10px", marginTop: "10px" }}>
        <div
          className="detailBottomTitle"
          style={{
            fontSize: "20px",
            textAlign: "left",
            transform: "skew(-0.1deg)",
            fontWeight: "bold",
            fontFamily: "NanumSquareB",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          이런 프로젝트 어떠세요?
        </div>
      </div>
      <div className="CardHead_Home_Detail">
        <CardGroup className="cardgroup_Home_Detail">
          {findOpen.slice(0, 4).map(function (data, i) {
            return (
              <Card className="card_Home_Detail">
                <Link to={`/detail/${data.work_no}`}>
                  <Card.Img
                    variant="top"
                    src={`../image/${data.work_img}`}
                    style={{
                      width: "250px",
                      height: "200px",
                      borderRadius: 15,
                      overflow: "hidden",
                    }}
                  />
                </Link>
                <Card.Body className="cardbody_Home_Detail">
                  <Card.Title
                    className="cardtitle_Home_Detail"
                    style={{
                      transform: "skew(-0.1deg)",
                      fontWeight: "bold",
                      color: "#6c757d",
                    }}
                  >
                    공예 | {data.artist_name}
                  </Card.Title>
                  <Card.Text
                    className="cardtext_Home_Detail"
                    style={{ fontFamily: "NanumSquareB" }}
                  >
                    <Link
                      to={`/detail/${data.work_no}`}
                      style={{
                        textDecorationLine: "none",
                        transform: "skew(-0.1deg)",
                        color: "#495057",
                        fontWeight: "bold",
                      }}
                    >
                      {data.work_title}
                    </Link>
                  </Card.Text>
                  <div
                    className="cardfooter_Home_Detail"
                    style={{
                      fontFamily: "NanumSquareB",
                      fontSize: "16px",
                      textAlign: "left",
                      transform: "skew(-0.1deg)",
                    }}
                  >
                    <p
                      style={{
                        marginTop: "-7px",
                        color: "#FF5757",
                        transform: "skew(-0.1deg)",
                        fontWeight: "bolder",
                      }}
                    >
                      {Math.round((data.funding_now / data.funding_goal) * 100)}
                      % 달성
                    </p>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </CardGroup>
      </div>
    </>
  );
}
export default inject("mainStore")(observer(DetailBottom));
