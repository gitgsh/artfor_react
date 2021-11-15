import React from "react";
import { Button, Form, FormCheck, FormControl, InputGroup, Col, Row} from "react-bootstrap";


function FundingSearch({ onSubmit }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target.elements.filter.value);
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input name="filter" />
    //   <button>Search</button>
    // </form>
    <Form onSubmit={handleSubmit} style={{margin : "10px" , padding : "10px"}}>
        <Row className="justify-content-md-center">
            <Col xs={5}>
                <Form.Control type="text" placeholder="Search" name="filter" />
            </Col>
            <Col xs={1}>    
                <Button variant="primary" type="submit">
                Search
                </Button>
            </Col>
        </Row>
    </Form>
  );
}

export default FundingSearch;
