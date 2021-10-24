import { Link } from "react-router-dom";
import "../../CSS/users/Settings.css";

function Settings(props) {
  console.log(props);
  const key = props.match.params.key;
  return (
    <div className="setting-margin-box">
      <div className="setting-box1">
        <div className="box-top">
          <div className="myicon-box">
            <img src="/my.png" width="100px" />
          </div>
          <div className="myname-box">
            <h2>
              김정희 <span style={{ fontSize: "25px" }}>님</span>
            </h2>
          </div>
          <div className="mymenu-box">
            <Link className="mymenu-name" to="/users/settings">
              프로필
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="mymenu-name" to="/users/project">
              후원한 프로젝트
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="setting-box2">
        <div className="setting-box1-1">
          <div className="left-box">
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>이름</h5>
                <Link style={{ fontSize: "25px", textDecoration: "none" }}>
                  변경
                </Link>
              </div>
              <div>
                <p>김정희</p>
              </div>
              <hr />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>
                  비밀번호
                </h5>
                <Link style={{ fontSize: "25px", textDecoration: "none" }}>
                  변경
                </Link>
              </div>
              <div>
                <p>xxxxx</p>
              </div>
              <hr />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>이메일</h5>
                <Link style={{ fontSize: "25px", textDecoration: "none" }}>
                  인증
                </Link>
              </div>
              <div>
                <p>kkkkkk@naver.com</p>
              </div>
              <hr />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>연락처</h5>
                <Link style={{ fontSize: "25px", textDecoration: "none" }}>
                  변경
                </Link>
              </div>
              <div>
                <p>010-2015-1336</p>
              </div>
              <hr />
            </div>
          </div>
          <div style={{ width: "34%", float: "left" }}>
            <div
              style={{
                marginLeft: "auto",
                width: "350px",
                height: "180px",
                border: "1px solid gray",
                borderRadius: "8px",
              }}
            >
              <div style={{ margin: "20px" }}>
                <h5 style={{ fontWeight: "bold", fontSize: "18px" }}>
                  어떤 정보가 프로필에 공개되나요?
                </h5>
                <p style={{ fontsize: "10px", letterSpacing: "-1px" }}>
                  프로필 사진과, 이름, 사용자 이름, 소개글, 웹사이트 및 회원님과
                  관련된 프로젝트 등이 프로필 페이지에 공개 됩니다. 프라이버시
                  설정을 활성화하시면 후원한 프로젝트 목록을 숨길 수 있습니다.
                  내 프로필 바로가기
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
