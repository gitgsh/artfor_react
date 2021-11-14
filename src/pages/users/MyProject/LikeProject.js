import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Project.css";
import { inject, observer } from "mobx-react";

function LikeProject(props) {
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

  const findLikeProject = likes.filter(function (result) {
    //사용자가 요청한 seq값과 일치하는 seq(db상의 seq값)을 찾는다.
    return result.user_email == window.localStorage.getItem("user_email");
  });
  console.log("findLikeProject", findLikeProject);
  const findWorkNO = findLikeProject.map(function (data, i) {
    return data.work_no;
  });

  console.log("findWorkNO", findWorkNO);

  console.log("works>>>>>>>>>>>>", works);

  const workList = works.filter(function (data, i) {
    return data.work_no == findWorkNO;
  });
  console.log("data", workList);

  return (
    <div>
      <div className="project_component">
        <CardGroup className="cardgroup_Home">
          {workList.slice(0, count).map(function (data, i) {
            //8개
            return (
              <div
                style={{
                  marginLeft: "20px",
                  marginBottom: "-80px",
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
                  <Card.Body className="cardbody_Home">
                    <Card.Title className="cardtitle_Home">
                      공예 | {data.artist_name}
                    </Card.Title>
                    <Card.Text className="cardtext_Home">
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
                      <p style={{ marginTop: "-25px" }}>
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
  );
}

export default inject("likeStore", "mainStore")(observer(LikeProject));
