import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Project.css";
import { inject, observer } from "mobx-react";
import { height } from "@mui/system";
import { useParams } from "react-router";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

function LikeProject(props) {
  const { no } = useParams();
  const { mainStore } = props;
  const { works, work } = mainStore;

  const { likeStore } = props;
  const { likes, like } = likeStore;

  const [show, setShow] = useState(false);
  const count = work.length; // 총 프로젝트 갯수

  //  window.localStorage.getItem("name");

  const [mainWorks, setMainWorks] = useState(null);
  const [likeProject, setLikeProject] = useState(null);
  useEffect(() => {
    let isComponentMounted = true;
    const fetchData = async () => {
      if (isComponentMounted) {
        setMainWorks(mainStore.worksRead());
        setLikeProject(likeStore.likesRead());
      }
    };
    fetchData();
    return () => {
      isComponentMounted = false;
    };
  }, []);
  console.log("email", window.localStorage.getItem("email"));
  console.log("works>>>>>", works);
  const findLikeProject = likes.filter(function (result) {
    //사용자가 요청한 seq값과 일치하는 seq(db상의 seq값)을 찾는다.
    return result.user_email == window.localStorage.getItem("user_email");
  });
  console.log("findLikeProject", findLikeProject);

  const findWorkNo = findLikeProject.map(function (data, i) {
    return data.work_no;
  });
  console.log(findWorkNo, "findWorkNo");

  const workList = works.filter(function (data, i) {
    return findWorkNo.includes(data.work_no);
  });

  console.log("workList", workList);

  return (
    <div>
      {workList.length === 0
      ? <div style={{height:'100px', paddingTop:'30px'}}><h4 style={{color: '#BDBDBD'}}>찜한 프로젝트가 없습니다.</h4></div>
      : 
      <div className="project_component" style={{ height: "100%" }}>
        <div>
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
      </div>
    }
    </div>
  );
}
export default inject("likeStore", "mainStore")(observer(LikeProject));
