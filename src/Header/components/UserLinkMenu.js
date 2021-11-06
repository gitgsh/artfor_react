import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import LogoutLink from './LogoutLink';


function UserLinkMenu(){

    return <NavDropdown  title= {window.localStorage.getItem('user_id')} id="basic-nav-dropdown">            
            <NavDropdown.Item style={{fontFamily:"NanumSquareB", fontSize:"14px"}} href="/users/myproject">프로젝트</NavDropdown.Item>
            <NavDropdown.Item style={{fontFamily:"NanumSquareB", fontSize:"14px"}} href="/users/myproject">설정</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item style={{fontFamily:"NanumSquareB", fontSize:"14px"}} ><LogoutLink /></NavDropdown.Item>
            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
             {/* 프로젝트 (후원, 올린것, 찜), 설정, 로그아웃 */}
        </NavDropdown>;
}

export default UserLinkMenu;