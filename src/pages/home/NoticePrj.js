import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Card, CardGroup } from "react-bootstrap";
import "./Home.css";

function NoticePrj(props) {
  const { mainStore } = props;
  const { works, work, getWork } = mainStore;

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

  return (
    <>
      <p
        className="main_home"
        style={{
          transform: "skew(-0.1deg)",
          fontWeight: "bold",
        }}
      >
        주목할 만한 프로젝트
      </p>
      <div className="main_home_in_1">
        <CardGroup className="cardgroup_Home">
          {findOpen.slice(0, 4).map(function (data, j) {
            //8개
            return (
              <Card className="card_Home">
                <Link
                  to={`/detail/${data.work_no}`}
                  onClick={()=>{mainStore.getWork(data.work_no)}}
                >
                  <Card.Img
                    variant="top"
                    src={`image/${data.work_img}`}
                    style={{
                      width: "250px",
                      height: "200px",
                      borderRadius: 15,
                      overflow: "hidden",
                    }}
                  />
                </Link>
                <Card.Body className="cardbody_Home">
                  <Card.Title
                    className="cardtitle_Home"
                    style={{
                      transform: "skew(-0.1deg)",
                      fontWeight: "bold",
                      color: "#6c757d",
                    }}
                  >
                    예술 | {data.artist_name}
                  </Card.Title>
                  <Card.Text className="cardtext_Home">
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
                  <div className="cardfooter" style={{ marginTop: "-7px" }}>
                    <p style={{ color: "#FF5757" }}>
                      {Math.round((data.funding_now / data.funding_goal) * 100)}
                      % 달성
                    </p>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </CardGroup>

        <CardGroup className="cardgroup_Home">
          {findOpen.slice(4, 8).map(function (data, j) {
            return (
              //data.work_title
              <Card className="card_Home">
                <Link
                  to={`/detail/${data.work_no}`}
                  onClick={() => {
                    mainStore.getWork(data.work_no);
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={`image/${data.work_img}`}
                    style={{
                      width: "250px",
                      height: "200px",
                      borderRadius: 15,
                      overflow: "hidden",
                    }}
                  />
                </Link>
                <Card.Body className="cardbody_Home">
                  <Card.Title
                    className="cardtitle_Home"
                    style={{
                      transform: "skew(-0.1deg)",
                      fontWeight: "bold",
                      color: "#6D6D6D",
                    }}
                  >
                    예술 | {data.artist_name}
                  </Card.Title>
                  <Card.Text className="cardtext_Home">
                    <Link
                      to={`/detail/${data.work_no}`}
                      style={{
                        textDecorationLine: "none",
                        transform: "skew(-0.1deg)",
                        color: "#343a40",
                        fontWeight: "bold",
                      }}
                    >
                      {data.work_title}
                    </Link>
                  </Card.Text>
                  <div className="cardfooter" style={{ marginTop: "-7px" }}>
                    <p style={{ color: "#FF5757" }}>
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

export default inject("mainStore")(observer(NoticePrj));
