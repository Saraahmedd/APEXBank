import React, { useState } from 'react'
import ClientNavbar from '../../components/client/Navbar'
import { Accordion, Col, Container, Row, Table, Card, Button, Form, Modal } from 'react-bootstrap'
import Footer from '../../components/client/Footer';
import cardpic from '../../imgs/cardApp.jpg';

const CreditCardApplicationScreen = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <div className='min-vh-100 d-flex flex-column'>
        <ClientNavbar loggedIn={true} />

        <Container className="mt-3">
          <h4 className="">Apply for a Credit Card</h4>
          <Row>
            <Col md={8} className="">
              <Form className="mt-3">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="loanType">Card Type</Form.Label>
                  <Form.Select id="loanType">
                    <option>Rewards</option>
                    <option>Cashback</option>
                    <option>Travel</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="loanAmt">Desired Monthly Spending Limit in EGP</Form.Label>
                  <Form.Control
                    type="text"
                    id="loanAmt"
                    placeholder="e.g. 100,000 EGP"
                  />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Supporting Documents <a className="text-primary cursor-pointer text-decoration-none" onClick={(e) => { e.preventDefault(); setShow(true) }}>(View Required Documents)</a></Form.Label>
                  <Form.Control multiple type="file" />
                </Form.Group>
                <Button className='rounded-pill' variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={cardpic} />
                <Card.Body>
                  <Card.Title>Purchase with Confidence</Card.Title>
                  <Card.Text>
                    Unlock financial possibilities with our credit card. Enjoy flexible rewards, competitive rates, and convenient online management. Apply now for a seamless banking experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>



        </Container>

        <Footer className="mt-5" />
      </div >

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Required Supporting Documents</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul class="list-group">
            <li class="list-group-item">Proof of identification (government-issued ID)</li>
            <li class="list-group-item">Proof of income (pay stubs, tax returns, bank statements)</li>
            <li class="list-group-item">Proof of residence (utility bills, rental agreement)</li>
            <li class="list-group-item">Credit Score Report</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreditCardApplicationScreen