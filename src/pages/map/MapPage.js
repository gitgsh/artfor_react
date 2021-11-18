import React from "react";
import GoogleMap from "google-map-react";
import Marker from "./Marker";

class MapPage extends React.Component {
  render() {
    return (
      <div style={{ borderTop: "1px solid #e8e8e8" }}>
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "1080px",
          }}
        >
          <div style={{ marginTop: "90px" }}>
            <h2 style={{ fontWeight: "bold", transform: "skew(-0.1deg)" }}>
              오시는 길
            </h2>
          </div>
          <div style={{ marginTop: "100px", height: "600px" }}>
            <div style={{ float: "left", width: "50%", height: "500px" }}>
              <div style={{ marginTop: "80px" }}>
                <h1 style={{ fontWeight: "bold", transform: "skew(-0.1deg)" }}>
                  ARTFOR
                </h1>
              </div>
              <div>
                <table
                  style={{
                    margin: "auto",
                    marginTop: "60px",
                    textAlign: "left",
                    fontSize: "20px",
                  }}
                >
                  <tr style={{ height: "50px" }}>
                    <td style={{ width: "120px" }}>주소</td>
                    <td>서울시 금천구 가산디지털2로 123</td>
                  </tr>
                  <tr style={{ height: "50px" }}>
                    <td style={{ width: "120px" }}>전화번호</td>
                    <td>02-1234-5678</td>
                  </tr>
                  <tr style={{ height: "50px" }}>
                    <td style={{ width: "120px" }}>이메일</td>
                    <td>artfor@test.com</td>
                  </tr>
                </table>
              </div>
            </div>
            <div
              style={{
                float: "left",
                width: "50%",
                background: "yellow",
                height: "500px",
              }}
            >
              <GoogleMap
                bootstrapURLKeys={{
                  key: "AIzaSyBmNFL5NwHujWwDfnzQV46cMp850FbBqu0",
                }}
                defaultZoom={15}
                defaultCenter={{
                  lat: 37.478735489739975,
                  lng: 126.87864784636119,
                }}
              >
                <Marker lat="37.478735489739975" lng="126.87864784636119" />
              </GoogleMap>
            </div>
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
      </div>
    );
  }
}
export default MapPage;
