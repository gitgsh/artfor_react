import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';


function Header(props) {
  return (
    <div>
      {/* 로고 artfor */}
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Link to="/"><img src="/logo.png" width="130px" style={{ marginBottom: '20px', marginTop: '20px' }} /></Link>
        </Nav.Item>
      </Nav>
      {/* 로고 end */}

      <Navbar bg="white" variant="light">
        <Container className="container_header" style={{ maxWidth: '1200px' }}>
        
        <Nav className="header_menu">
          <Nav.Link href="/">home</Nav.Link> 
          <Nav.Link href="/guide/Guide">guide</Nav.Link> 
          <Nav.Link href="/members/list">members</Nav.Link> 
          <Nav.Link href="">거시기</Nav.Link> 
          <Nav.Link href="">저시기</Nav.Link> 
        </Nav>

   
    <div className="container_search" style={{ margin: 'auto', marginRight: '30px' }}>
        <Form className="d-flex">
        <InputGroup>
          <FormControl className="search_box" type="search" placeholder="Search" />
          <Button className="search_btn" variant="outline-success">search</Button>
          {/* <Button className="" variant="outline-secondary"
          style={{ width: '50px', height: '28px', textAlign: 'center', margin: 'auto', fontSize: '13px', padding: 'auto'}}><div style={{ margin: 'auto' }}>search</div></Button> */}
        </InputGroup>
          {/* <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search box"
            style = {{ height: '28px', margin: 'auto', width: '150px'}} 
          />
          <Button variant="outline-success" style={{ width: '50px', height: '28px', margin: 'auto', fontSize: '13px'}}>search</Button> */}
        </Form>    
    </div>

        {/* 로그인 시 로그인페이지-> 마이페이지로 경로 변경하기 */}
        <div><Link to="/login"><img className="header_login" src="/profile.png" /></Link></div>

    </Container>
  </Navbar>

</div>

  );
}

export default Header;
