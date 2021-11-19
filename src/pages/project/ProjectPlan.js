import React from "react";
import { useState, useEffect, useCallback } from "react";
import "./ProjectPlan.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputPage from "./input/InputPage";
import { Button, InputGroup } from "react-bootstrap";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FcRemoveImage, FcExternal } from "react-icons/fc";
import { Input } from "reactstrap";
import axios from "axios";
import { useHistory } from 'react-router';

// jh
import { inject, observer } from "mobx-react";


function ProjectPlan(props) {
  let history = useHistory();
  
   //jh
   const {mainStore} = props;
   const {works, work} = mainStore;

   

   work.artist_name = window.localStorage.getItem('name');
   work.artist_id = window.localStorage.getItem('user_email');

   console.log("새로고침");

  return (
    <div
      className="projectPlan-container"
      style={{
        backgroundColor: "rgb(252, 252, 252)",
        height: "100%",
      }}
    >
     {/* {window.localStorage.getItem('name')} */}
      {/* 카테고리 */}
      <CategoryInput />

      {/* 제목 */}
      <Titleupload />

      {/* 이미지 업로드 */}
      <Imageupload />

      {/* 프로젝트 설명 - 에디터 */}
      <ProjectEditor />

      <div id="button" style={{ display: "block", paddingTop: "17px" }}>
            <Button
              onClick={workCreate}
              variant="dark"
              style={{ width: "80px" }}
            >
              올리기
            </Button>
      </div>
    </div>
  ); // return끝부분

  function workCreate() {
    //jh
    axios
      .post("http://localhost:8004/app/input.do", work)
      .then((result) => {
        console.log("성공");
        alert("성공적으로 프로젝트를 업로드 했습니다!😁");
        window.location.replace("http://localhost:3000/");
      })
      .catch((err) => {
        console.log("실패함", err);
      });
  };

  function Description() {
    return (
      <div
        className="projectPlan-description"
        style={{
          color: "#6D6D6D",
          fontFamily: "NanumSquareR",
          fontSize: "14px",
          letterSpacing: "0px",
          transform: "skew(-0.1deg)",
        
        }}
      >
        <p>무엇을 만들기 위한 프로젝트인지 분명히 알려주세요.</p>
      </div>
    );
  }

  function Star() {
    return (
      <span
        className="projectPlan-star"
        style={{
          fontSize: "25px",
          fontFamily: "NanumSquareEB",
          color: "#F86453",
        }}
      >
        *
      </span>
    );
  }

  function PlanModal() {
    return (
      <InputPage />
    );
  }

  
  function TitleDescription() { // 제목 설명
    return (
      <div
        className="projectPlan-description"
        style={{
          color: "#6D6D6D",
          fontFamily: "NanumSquareR",
          fontSize: "14px",
          letterSpacing: "0px",
          transform: "skew(-0.1deg)",
        }}
      >
        <p>프로젝트의 주제, 창작물의 특징이 드러나는 멋진 제목을 붙여주세요.</p>
      </div>
    );
  }

  function ImageDescription() { // 이미지 업로드 설명
    return (
      <div
        className="projectPlan-description"
        style={{
          color: "#6D6D6D",
          fontFamily: "NanumSquareR",
          fontSize: "14px",
          letterSpacing: "0px",
          transform: "skew(-0.1deg)",
        }}
      >
        <p>
          후원자들이 프로젝트의 내용을 쉽게 파악하고 좋은 인상을 받을 수 있도록
          이미지 가이드 라인을 따라주세요.
        </p>
      </div>
    );
  }


  // 카테고리
  function CategoryInput(){
    // 이걸 고침!
    const [category, setCategory] = useState("");
    const [detailCategory, setDetailCategory] = useState("");

    const categoryChange = (e) => {
      // /e.preventDefault();
      setCategory(e.target.value);
    }

    const detailCategoryChange = (event) => {
      event.preventDefault();
      setDetailCategory(event.target.value);
    };
    return(
      
      <div className="projectPlan-box" style={{}}>
        <div
          className="row"
          style={{
            paddingTop: "70px",
            // marginBottom: "-70px",
            borderBottom: "1px solid",
            borderBottomColor: "rgb(228, 228, 228)",
            margin: "0 auto",
            maxWidth: "1180px",
          }}
        >
          <div className="col-4" style={{}}>
            <div>
              <div
                style={{
                  fontSize: "16px",
                  fontFamily: "NanumSquareEB",
                  textAlign: "left",
                  transform: "skew(-0.1deg)",
                }}
              >
                프로젝트 카테고리
                <Star />
              </div>
              <div
                className="projectPlan-notice-box"
                style={{
                  backgroundColor: "rgb(252, 252, 252)",
                  // marginBottom: "-50px",
                }}
              >
                <Description />
              </div>
            </div>
          </div>
          <div
            className="col-8"
            style={
              {
                // height: "100px",
              }
            }
          >
            <div class="row justify-content-md">
              <div class="category-container" style={{ marginLeft: "100px" }}>
                <div
                  class="row justify-content-md"
                  style={{
                    textAlign: "left",
                    fontFamily: "NanumSquareB",
                    fontSize: "13px",
                    transform: "skew(-0.1deg)",
                    marginTop: "10px",
                  }}
                >
                  <div class="col" style={{ marginLeft: "0px" }}>
                    카테고리
                  </div>
                  <div class="col" style={{ marginRight: "112px" }}>
                    세부 카테고리(선택사항)
                  </div>
                </div>

                <div className="row">
                  <div
                    className="col-4"
                    style={{
                      paddingLeft: "0px",
                    }}
                  >
                    {" "}
                    <FormControl
                      sx={{
                        paddingTop: "5px",
                        m: 1,
                        minWidth: 300,
                        width: "307px",
                        backgroundColor: "#FFFFFF",
                      }}
                    >
                      <Select
                        style={{
                          textAlign: "left",
                          height: "38px",
                          fontSize: "16px",
                          fontFamily: "NanumSquareB",
                          transform: "skew(-0.1deg)",
                        }}
                        value={category}
                        onChange={categoryChange}
                        displayEmpty
                        inputProps={{}}
                      >
                        <MenuItem
                          style={{
                            fontFamily: "NanumSquareR",
                            color: "#3D3D3D",
                            transform: "skew(-0.1deg)",
                          }}
                          value="예술"
                          selected
                        >
                          예술
                        </MenuItem>
                        <MenuItem
                          style={{
                            fontFamily: "NanumSquareR",
                            color: "#3D3D3D",
                            transform: "skew(-0.1deg)",
                          }}
                          value={"공예"}
                        >
                          공예
                        </MenuItem>
                        <MenuItem
                          style={{
                            fontFamily: "NanumSquareR",
                            color: "#3D3D3D",
                            transform: "skew(-0.1deg)",
                          }}
                          value={"사진"}
                        >
                          사진
                        </MenuItem>
                        <MenuItem
                          style={{
                            fontFamily: "NanumSquareR",
                            color: "#3D3D3D",
                            transform: "skew(-0.1deg)",
                          }}
                          value={"디자인"}
                        >
                          디자인
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  {/* <div className="col"></div> */}
                  <div className="col" style={{ marginRight: "50px" }}>
                    {" "}
                    <FormControl
                      sx={{
                        paddingTop: "5px",
                        m: 1,
                        minWidth: 300,
                        width: "307px",
                        backgroundColor: "#FFFFFF",
                        color: "green",
                      }}
                    >
                      <Select
                        style={{
                          textAlign: "left",
                          backgroundColor: "#FFFFFF",
                          height: "38px",
                          color: "#3D3D3D",
                          fontSize: "16px",
                          fontFamily: "NanumSquareB",
                          transform: "skew(-0.1deg)",
                        }}
                        value={detailCategory}
                        onChange={detailCategoryChange}
                        displayEmpty
                      >
                        <MenuItem
                          style={{
                            fontFamily: "NanumSquareR",
                            color: "#3D3D3D",
                            transform: "skew(-0.1deg)",
                          }}
                          value={"예술"}
                        >
                          예술
                        </MenuItem>
                        <MenuItem
                          style={{
                            fontFamily: "NanumSquareR",
                            color: "#3D3D3D",
                            transform: "skew(-0.1deg)",
                          }}
                          value={"공예"}
                        >
                          공예
                        </MenuItem>
                        <MenuItem
                          style={{
                            fontFamily: "NanumSquareR",
                            color: "#3D3D3D",
                            transform: "skew(-0.1deg)",
                          }}
                          value={"사진"}
                        >
                          사진
                        </MenuItem>
                        <MenuItem
                          style={{
                            fontFamily: "NanumSquareR",
                            color: "#3D3D3D",
                            transform: "skew(-0.1deg)",
                          }}
                          value={"디자인"}
                        >
                          디자인
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 프로젝트 제목
  function Titleupload() {

    const [work_title, setWork_title] = useState();
    let [titleModal, setTitleModal] = useState(false);

    function modalSwitch(e) {
      e.preventDefault();
      let value = e.target.value;
      if (value === "title") {
        setTitleModal(!titleModal);
      }
    }
    return (
      <div className="projectPlan-box">
        <div
          className="row"
          style={{
            paddingTop: "70px",
            paddingBottom: "35px",
            borderBottom: "1px solid",
            borderBottomColor: "rgb(228, 228, 228)",
            margin: "0 auto",
            maxWidth: "1180px",
          }}
        >
          <div className="col" style={{ paddingRight: "50px" }}>
            {" "}
            <div>
              <div
                style={{
                  fontSize: "16px",
                  fontFamily: "NanumSquareEB",
                  textAlign: "left",
                  transform: "skew(-0.1deg)",
                }}
              >
                프로젝트 제목
                <Star />
              </div>
              <div
                className="projectPlan-notice-box"
                style={{
                  backgroundColor: "rgb(252, 252, 252)",
                }}
              >
                <TitleDescription />
              </div>
            </div>
          </div>
          <div
            className="col-6"
            style={{
              maxWidth: "630px",

              borderRadius: "6px",
              paddingLeft: "0px",
              paddingRight: "0px",
              paddingBottom: "50px",
            }}
          >
            <div style={{ textAlign: "left" }}>
              {/* <button className="tbtn" >제목 <AiOutlineQuestionCircle size="16px" color="red"/></button> */}
              {titleModal === true ? (
                <button className="tbtn" onClick={modalSwitch} value="title">
                  제목 <AiOutlineQuestionCircle size="16px" color="red" />
                </button>
              ) : (
                <button className="tbtn" onClick={modalSwitch} value="title">
                  제목 <AiOutlineQuestionCircle size="16px" color="red" />
                </button>
              )}
            </div>
            <div style={{ textAlign: "left" }}>
              {
                titleModal === true ? <TitleModal /> : null
                // <p>안눌렀을떄</p>
              }
            </div>
            <div>
              <Input
                type="text"
                transform="skew(-0.1deg)"
                className="Input-title"
                placeholder="     제목을 입력해주세요"
                value={work.work_title}
                onChange={(event)=>{
                  setWork_title(event.target.value);  
                  work.work_title = event.target.value;
                }}
             
              />
              {/* 제목은 : {work_title}
              제목은 : {work.work_title} */}
              {/* 테스트 */}
              {/* 제목은 : {work.work_title}
              내용은 : {work.work_content} */}
            </div>
          </div>
        </div>
      </div>
    );
  } // Titleuplad()

  // 이미지 올리기
  function Imageupload() {
    let [imageModal, setImageModal] = useState(false);
    const [attachment, setAttachment] = useState("");

    function modalSwitch(e) {
      e.preventDefault();
      let value = e.target.value;
      if (value === "image") {
        setImageModal(!imageModal);
      }
    }

    const onFileChange = (event) => {
      console.log(event.target.files[0].name);
      const {
        target: { files },
      } = event;
      const reader = new FileReader();
      //
      reader.onloadend = (progressEvent) => {
        const {
          currentTarget: { result },
        } = progressEvent;
        // 파일보여줄려고
        setAttachment(result);
        console.log(result);
        window.localStorage.setItem('work_img',result);

      };
      reader.readAsDataURL(files[0]);
    };

    const onSubmit = (event) => {
      event.preventDefault();
      //console.log(event.target); <form></form>이 들어온다
      //그냥 폼은 태그 엘리먼트일뿐이기에 FormData 타입으로 변경해야한다. 
      let form = event.target;
      console.log("form은 대체 뭐람", form);
      let data = new FormData(form);
      // 파일 전송중에는 submit 비활성화되도록
      console.log("data가 뭐냐고 대체", data);


      axios.post('http://localhost:8004/app/input2.do', data,{
          headers: {
            "Content-Type": "multipart/form-data",
          }      
      }).then((result)=>{
          console.log('아작스요청 성공함');
        })
      .catch((err)=>{
          console.log('실패');
      })   
  }

    return (
      <div className="projectPlan-box">
        <div
          className="row"
          style={{
            paddingTop: "70px",
            paddingBottom: "35px",
            borderBottom: "1px solid",
            borderBottomColor: "rgb(228, 228, 228)",
            maxWidth: "1180px",
            margin: "0 auto",
          }}
        >
          <div className="col" style={{ paddingRight: "50px" }}>
            {" "}
            <div>
              <div
                style={{
                  fontSize: "16px",
                  fontFamily: "NanumSquareEB",
                  textAlign: "left",
                  transform: "skew(-0.1deg)",
                }}
              >
                프로젝트 대표 이미지
                <Star />
              </div>
              <div
                className="projectPlan-notice-box"
                style={{ backgroundColor: "rgb(252, 252, 252)" }}
              >
                <ImageDescription />
              </div>
            </div>
          </div>
          <div
            className="col"
            style={{
              margin: "0 auto",
              maxWidth: "630px",
              border: "1px solid rgb(228, 228, 228)",
              backgroundColor: "#FFFFFF",
              borderRadius: "6px",
              paddingLeft: "0px",
              paddingRight: "0px",
              paddingBottom: "50px",
            }}
          >
            <div style={{ textAlign: "left", paddingBottom: "20px" }}>
              {/* <button className="tbtn" >이미지 <AiOutlineQuestionCircle size="16px" color="red"/></button> */}
              {imageModal === true ? (
                <button className="tbtn" onClick={modalSwitch} value="image">
                  이미지 <AiOutlineQuestionCircle size="16px" color="red" />
                </button>
              ) : (
                <button className="tbtn" onClick={modalSwitch} value="image">
                  이미지 <AiOutlineQuestionCircle size="16px" color="red" />
                </button>
              )}
            </div>
            <div style={{ textAlign: "left" }}>
              {imageModal === true ? <ImageModal /> : null}
            </div>

            <div>
              <div
                style={{ maxWidth: "630px", maxHeight: "auto" }}
                src={attachment}
              >
                {attachment === "" ? (
                  <div style={{ paddingTop: "10px", paddingBottom: "20px" }}>
                    <FcRemoveImage size="100px" />
                  </div>
                ) : (
                  <img
                    src={attachment}
                    style={{
                      width: "100%",
                      height: "auto",
                      paddingBottom: "20px",
                    }}
                  />
                )}
              </div>

              <div>
                <label className="imgbtn" value="title" onChange={onFileChange}>
                  <p style={{ textAlign: "center", marginTop: "-12px" }}>
                    이미지 업로드 <FcExternal size="16px" color="red" />
                  </p>
                  <form onSubmit={onSubmit} >
                    <input
                      type="file"
                      id="uploadFile"
                      style={{ display: "none" }}
                      name="uploadFile"
                    />
                    
          
                    <input className="imgsubmit" type="submit" value="저장" />
                  </form>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } // 이미지 끝

  function TitleModal() {
    return (
      <div
        style={{
          margin: "0 auto",
          maxWidth: "630px",
          borderRadius: "6px",
          paddingLeft: "0px",
          paddingRight: "0px",
          paddingBottom: "130px",
        }}
      >
        <div className="tleft">
          제목은 <br />
          어디다쓰나요?
        </div>
        <div className="tright">
          <img src="/title1.png" style={{ width: "100%" }} />
        </div>
      </div>
    );
  }

  function ImageModal() {
    return (
      <div
        style={{
          margin: "0 auto",
          maxWidth: "630px",
          borderRadius: "6px",
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        <div style={{ textAlign: "center", margin: "0" }}>
          <img src="/img.png" style={{ width: "100%", padding: "2%" }} />
        </div>
      </div>
    );
  }

  
  function ProjectEditor(){

    let [planModal, setPlanModal] = useState(false);

    function modalSwitch2(e){
      e.preventDefault();
      // event.stopPropagation();
      let value = e.target.value;
      if (value === "buttonClick") {
        setPlanModal(!planModal);
      }
    }

    return(<div className="projectPlan-box">
    <div
      className="col"
      style={{
        paddingBottom: "40px",
        paddingTop: "70px",
        borderBottom: "1px solid",
        borderBottomColor: "rgb(228, 228, 228)",
        margin: "0 auto",
        maxWidth: "1180px",
      }}
    >
      <div
        className="row"
        style={{
          fontSize: "16px",
          fontFamily: "NanumSquareEB",
          textAlign: "left",
          transform: "skew(-0.1deg)",
        }}
      >
        <div style={{ marginLeft: "130px" }}>
          프로젝트 설명
          <Star />
        </div>
   
      </div>
 
      <div
        className="row"
        style={{
          margin: "0 auto",
          borderColor: "rgb(240, 240, 240)",
          borderRadius: "5px",
          paddingLeft: "25px",
          paddingRight: "25px",
          paddingBottom: "20px",
          paddingTop: "30px",
        }}
      >
        <div
          style={{
            border: "1px solid ",
            borderColor: "rgb(240, 240, 240)",
            backgroundColor: "#FFFFFF",
            borderRadius: "5px",
            paddingLeft: "17px",
            paddingRight: "17px",
            paddingBottom: "20px",
            width: "900px",
            margin: "0 auto",
            paddingTop: "30px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
              marginBottom: "30px",
              marginRight: "-5px",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "17px",
                paddingLeft: "5px",
              }}
            >
              프로젝트 설명
            </div>

            {planModal === true ? (
              <button 
                onClick={modalSwitch2}
                value="buttonClick"
                style={{
                  fontSize: "17px",
                  background: "none",
                  color: "#3399ff",
                  border: "0",
                  marginLeft: "",
                }}
              >
                <img
                  src={"../../../up-arrow.png"}
                  style={{ height: "20px" }}
                ></img>
              </button>
            ) : (
              <button
                style={{
                  fontSize: "17px",
                  background: "none",
                  color: "#3399ff",
                  border: "0",
                  display: "inline-flex",
                }}
                onClick={modalSwitch2}
                value="buttonClick"
              >
                <img
                  src={"../../../down-arrow.png"}
                  style={{
                    width: "20px",
                    height: "20px",
                    marginTop: "5px",
                  }}
                ></img>
              </button>
            )}
          </div>
          <div>
            {planModal === true ? (
              <div>
                <PlanModal />
              </div>
            ) : (
              ""
            )}
          </div>
          <hr
            style={{
              marginBottom: "10px",
              color: "#6c757d",
            }}
          />
        </div>
      </div>
    </div>
  </div>);
  }
 
}

// export default ProjectPlan;
export default inject("mainStore")(observer(ProjectPlan));
