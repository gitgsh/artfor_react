import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../Project.css";
//jh
import { inject, observer } from "mobx-react";
import { useState, useEffect } from 'react';
import { minHeight } from '@mui/system';

function MakeProject(props) {
  const {mainStore} = props;
  const {works, work, getWork} = mainStore;

  // const [community, setCommunity] = useState(null);

  // useEffect(() => {
  //   let isComponentMounted = true;
  //   const fetchData = async () => {
  //     if (isComponentMounted) {
  //       setCommunity(mainStore.worksRead());
  //       console.log("worksRead", community);
  //     }
  //   };
  //   fetchData();
  //   return () => {
  //     isComponentMounted = false;
  //   };
  // }, []);

  useEffect(()=>{
      mainStore.worksRead();
    }, [mainStore]);

  
  const user_email = window.localStorage.getItem('user_email');
  const artist_name = window.localStorage.getItem('name');
  const count = work.length; // 총 프로젝트 갯수

  console.log('email===>',user_email)
  console.log('name===>',artist_name)
  

  const workList = works.map(function (data, i) {
    return (
      data
    )
  })

 // 내가 올린 프로젝트 찾기
  const myWork = workList.filter((data)=>{
    return (data.artist_name.includes(artist_name));
  })

  console.log(">>>",myWork);

  return (
    <div>
      {myWork.length === 0
      ? <div style={{height:'100px', paddingTop:'30px'}}><h4 style={{color: '#BDBDBD'}}>올린 프로젝트가 없습니다.</h4></div>
      : 
      <div className="project_component" style={{height:"100%"}}> 
        <div>
      <CardGroup className="cardgroup_Home" style={{height:"auto"}}>
                      {myWork.map(function (data, i) {
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
                              <Card.Body className="cardbody_Home"
                              style={{
                              maxWidth:"250px",
                              textAlign:"left",
                              
                              }}>
                                <Card.Title className="cardtitle_Home">
                                  예술 | {data.artist_name}
                                </Card.Title>
                                <Card.Text className="cardtext_Home"
                                style={{minHeight:"80px",}}>
                                  <Link
                                    to={`/detail/${data.work_no}`}
                                    onClick={() => {
                                      mainStore.getWork(data.work_no);
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
                                  <p style={{ marginTop: "-35px", textAlign:"left" }}>
                                    {Math.round(
                                      (data.funding_now / data.funding_goal) *
                                        100
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
};

// export default MakeProject;
export default inject("mainStore")(observer(MakeProject));