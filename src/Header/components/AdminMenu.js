import React from "react";
import { NavDropdown } from "react-bootstrap";

function AdminMenu(){

    return <NavDropdown  title="운영자 페이지" id="basic-nav-dropdown">
            <NavDropdown.Item style={{fontFamily:"NanumSquareB", fontSize:"14px"}} href="/admin/adminmain">회원 관리</NavDropdown.Item>
            <NavDropdown.Item style={{fontFamily:"NanumSquareB", fontSize:"14px"}} href="/admin/manageArtwork">게시물 심사/승인</NavDropdown.Item>
            <NavDropdown.Item style={{fontFamily:"NanumSquareB", fontSize:"14px"}} href="/admin/manageFunding">펀딩 관리</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
        </NavDropdown>;
}

export default AdminMenu;
