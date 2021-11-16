import { inject, observer } from "mobx-react";
import React, { useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import LogoutLink from "./LogoutLink";

function UserLinkMenu(props) {
  const { membersStore } = props;
  const { members, member } = membersStore;

  useEffect(() => {
    member.user_name = window.localStorage.getItem("name");
  }, [membersStore]);//

  return (

    <NavDropdown
      title={member.user_name}
      id="basic-nav-dropdown"
      style={{
        marginTop: "4px",
        color: "#000000",
        fontFamily: "NanumSquareR",
        fontSize: "15px",
        fontWeight: "bold",
        marginRight: "-13px",
      }}
      textDecorationLine="none"
    >
      <NavDropdown.Item
        style={{
          fontFamily: "NanumSquareR",
          fontWeight: "bold",
          fontSize: "14px",
        }}
        href="/users/myproject"
      >
        프로젝트
      </NavDropdown.Item>
      <NavDropdown.Item
        style={{
          fontFamily: "NanumSquareR",
          fontWeight: "bold",
          fontSize: "14px",
        }}
        href="/users/mysettings"
      >
        설정
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item
        style={{ fontFamily: "NanumSquareB", fontSize: "14px" }}
      >
        <LogoutLink />
      </NavDropdown.Item>
      {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      {/* 프로젝트 (후원, 올린것, 찜), 설정, 로그아웃 */}
    </NavDropdown>
  );
}

export default inject("membersStore")(observer(UserLinkMenu));
