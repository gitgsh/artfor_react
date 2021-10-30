import React from 'react';
import { Modal,Col,Row,Button,Container } from 'react-bootstrap';
const PFPModal = (props) => {
    return (
        <div>
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                        ArtFor
                </Modal.Title>
            </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
        <Row>
        <Col>
          <a href="/project/main" style={{textDecorationLine:'none'}}>
            <div className="fb">
              <div>
                <p style={{textAlign:"left"}}><img src='/book.png' style={{width:"25px"}} /> </p>
                <p className="pfpt">
                  프로젝트 계획
                </p>
                <p>28%작성완료</p>
              </div>
            </div>
          </a>
        </Col>
        <Col>
          <div className="fb">
            <a href="/project/check" style={{textDecorationLine:'none'}}>
              <div>
                <p style={{textAlign:"left"}}><img src='/mon.png' style={{width:"25px"}} /> </p>
                <p className="pfpt">
                  펀딩 계획
                </p>
                <p>28%작성완료</p>
              </div>
            </a>
          </div>
        </Col>
        </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}

export default PFPModal
