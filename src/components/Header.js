import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function Header(props) {
  return (
    <div>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <img src="/logo5.png" width="130px" />
          {/* <Nav.Link  href="/" style={{color:'black',fontSize:'28px'}}>Tumblbug</Nav.Link> */}
        </Nav.Item>
      </Nav>
      <hr style={{ margin: "0" }} />

      <Navbar
        bg="white"
        expand="lg"
        style={{ marginLeft: "300px", marginRight: "300px" }}
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">프로젝트 보기</Nav.Link>
              <Nav.Link href="/guide/list"> Q&A </Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/login">로그인 / 회원가입</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
