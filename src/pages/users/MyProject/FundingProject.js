import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Project.css";
import { inject, observer } from "mobx-react";

function FundingProject(props) {
  console.log("후원한 프로젝트.");
  const { mainStore } = props;
  const { works, work } = mainStore;

  const { fundingStore } = props;
  const { fundings, funding } = fundingStore;

  const [show, setShow] = useState(false);
  const count = work.length; // 총 프로젝트 갯수

  //  window.localStorage.getItem("name");

  const [mainWorks, setMainWorks] = useState(null);
  const [fundingProject, setFundingProject] = useState(null);
  useEffect(() => {
    let isComponentMounted = true;
    const fetchData = async () => {
      if (isComponentMounted) {
        setMainWorks(mainStore.worksRead());
        setFundingProject(fundingStore.fundingsRead());
      }
    };
    fetchData();
    return () => {
      isComponentMounted = false;
    };
  }, []);

  const findFundingProject = fundings.filter(function (result) {
    //사용자가 요청한 seq값과 일치하는 seq(db상의 seq값)을 찾는다.
    return result.user_email == window.localStorage.getItem("user_email");
  });
  const findFundingWorkNO = findFundingProject.map(function (data, i) {
    return parseInt(data.work_no);
  });
  console.log("findFundingWorkNO", findFundingWorkNO);
  const workList = works.filter(function (data, i) {
    console.log("data.work_no", data.work_no);
    return findFundingWorkNO.includes(data.work_no);
  });
  console.log("workList????", workList);
  return (
    <div>
      {workList.length === 0
      ? <div style={{height:'100px', paddingTop:'30px'}}><h4 style={{color: '#BDBDBD'}}>후원한 프로젝트가 없습니다.</h4></div>
      : 
      <div className="project_component" style={{ height: "100%" }}>
        <CardGroup className="cardgroup_Home" style={{ height: "auto" }}>
          {workList.slice(0, count).map(function (data, i) {
            //8개
            return (
              <div
                style={{
                  marginLeft: "10px",
                  marginBottom: "-40px",
                }}
              >
                <Card className="card_Home">
                  <Link
                    to={`/detail/${data.work_no}`}
                    onClick={() => {
                      mainStore.getWork(data.work_no);
                      setShow(false);
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={`/image/${data.work_img}`}
                      style={{
                        width: "250px",
                        height: "200px",
                        borderRadius: 15,
                        overflow: "hidden",
                      }}
                    />
                  </Link>
                  <Card.Body
                    className="cardbody_Home"
                    style={{
                      maxWidth: "250px",
                      textAlign: "left",
                    }}
                  >
                    <Card.Title className="cardtitle_Home">
                      예술 | {data.artist_name}
                    </Card.Title>
                    <Card.Text
                      className="cardtext_Home"
                      style={{ minHeight: "80px" }}
                    >
                      <Link
                        to={`/detail/${data.work_no}`}
                        onClick={() => {
                          mainStore.getWork(data.work_no);
                          setShow(false);
                        }}
                      >
                        {data.work_title}
                      </Link>
                    </Card.Text>
                    <div
                      className="cardfooter"
                      style={{
                        fontSize: "18px",
                        textAlign: "center",
                      }}
                    >
                      <p
                        style={{
                          marginTop: "-35px",
                          textAlign: "left",
                          color: "#FF5757",
                        }}
                      >
                        {Math.round(
                          (data.funding_now / data.funding_goal) * 100
                        )}
                        % 달성
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </CardGroup>
      </div>
      }
    </div>
  );
}

export default inject("fundingStore", "mainStore")(observer(FundingProject));
