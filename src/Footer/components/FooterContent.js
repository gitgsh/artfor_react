import React from "react";
import styled from "styled-components";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import "./footerContent.css";
import { Link } from "react-router-dom";

function FooterContent() {
  return (
    <ContentContainer>
      <NoticeWrap>
        <div className="footer_font">
          <thead>
            <tr>
              <ContentsTitle>텀블벅</ContentsTitle>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Contents style={{ fontWeight: "bold" }}>공지사항</Contents>
            </tr>
            <tr>
              <Contents style={{ fontWeight: "bold" }}>채용</Contents>
            </tr>
            <tr>
              <Contents style={{ fontWeight: "bold" }}>제휴협력</Contents>
            </tr>
          </tbody>
        </div>
      </NoticeWrap>

      <ServiceGuideWrap>
        <div className="footer_font2">
          <thead>
            <tr>
              <ContentsTitle>이용안내</ContentsTitle>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Contents>
                <Link
                  to="/guide/G_List"
                  style={{ color: "#f76453", fontWeight: "bold" }}
                >
                  헬프센터
                </Link>
              </Contents>
            </tr>
            <tr>
              <ContentsHighlight style={{ fontWeight: "bold" }}>
                창작자 가이드
              </ContentsHighlight>
            </tr>
            <tr>
              <Contents style={{ fontWeight: "bold" }}>
                <Link
                  to="/map"
                  style={{ color: "#6D6D6D", textDecorationLine: "none" }}
                >
                  오시는 길
                </Link>
              </Contents>
            </tr>
          </tbody>
        </div>
      </ServiceGuideWrap>

      <PolicyWrap>
        <div className="footer_font3">
          <thead>
            <tr>
              <ContentsTitle>약관 및 정책</ContentsTitle>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Contents style={{ fontWeight: "bold" }}>
                <Link
                  to="/guide/G_Fee"
                  style={{ color: "#6D6D6D", textDecorationLine: "none" }}
                >
                  수수료 정책
                </Link>
              </Contents>
            </tr>
            <tr>
              <Contents style={{ fontWeight: "bold" }}>
                <Link
                  to="/guide/G_Articles"
                  style={{ color: "#6D6D6D", textDecorationLine: "none" }}
                >
                  개인정보 처리방침
                </Link>
              </Contents>
            </tr>
          </tbody>
        </div>
      </PolicyWrap>

      <AppContentWrap>
        <thead>
          <tr>
            <ContentsTitle style={{ marginTop: "9px" }}>App</ContentsTitle>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Contents />
          </tr>
          <tr>
            <AndroidButton style={{ transform: "skew(-0.1deg)" }}>
              <FaGooglePlay style={{ marginRight: "3px" }} />
              안드로이드
            </AndroidButton>
          </tr>
          <tr>
            <Contents />
          </tr>
          <tr>
            <IosButton style={{ transform: "skew(-0.1deg)" }}>
              <FaApple style={{ marginRight: "3px" }} />
              iOS
            </IosButton>
          </tr>
        </tbody>
      </AppContentWrap>
      <CustomerWrapContents>
        <thead>
          <tr>
            <ContentsTitle style={{ marginTop: "9px" }}>고객지원</ContentsTitle>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Timetable
              style={{ fontWeight: "bold", transform: "skew(-0.1deg)" }}
            >
              평일 10:00 ~ 18:00 (12:00 ~ 14:00 제외)
            </Timetable>
          </tr>
          <tr>
            {/* <Link to="/chatbot"><CustomerButton>아트포에 문의</CustomerButton></Link> */}
            <a 
            style={{textDecorationLine:"none",
            fontWeight: "bold", 
            transform: "skew(-0.1deg)" }}
            href="https://edo9z.channel.io/"><CustomerButton>아트포에 문의</CustomerButton></a>
            
          </tr>
        </tbody>
      </CustomerWrapContents>
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  display: flex;
  width: 1080px;
  padding: 18px 18px 0 18px;
`;

const NoticeWrap = styled.table`
  width: 112px;
  height: 100%;
  border-spacing: 10px;
  border-collapse: separate;
`;

const ServiceGuideWrap = styled.table`
  width: 170px;
  height: 100%;
  border-spacing: 10px;
  border-collapse: separate;
`;

const PolicyWrap = styled.table`
  width: 170px;
  height: 100%;
  border-spacing: 10px;
  border-collapse: separate;
`;

const AppContentWrap = styled.table`
  width: 170px;
  height: 100%;
  margin-right: 200px;
  border-spacing: 10px;
  border-collapse: separate;
`;

const CustomerWrapContents = styled.table`
  width: 250px;
  height: 100%;
  border-spacing: 10px;
  border-collapse: separate;
`;

const ContentsTitle = styled.th`
  display: flex;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
`;

const Contents = styled.td`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: #6d6d6d;
`;

const ContentsHighlight = styled.td`
  font-size: 14px;
  // font-weight: bold;
  line-height: 22px;
  // color: #f76453;
  color: #6d6d6d;
`;

const ContentsRedHighlight = styled.td`
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  color: #939393;
`;

const Timetable = styled.td`
  font-size: 12px;
  color: #6d6d6d;
`;

const AndroidButton = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 36px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  background-color: #f0f0f0;
  color: #6d6d6d;
`;

const IosButton = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 36px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  background-color: #f0f0f0;
  color: #6d6d6d;
`;

const CustomerButton = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  width: 180px;
  height: 36px;
  border-radius: 4px;
  border: 1px solid #d0d0d0;
  font-size: 14px;
  background-color: #ffffff;
`;

export default FooterContent;
