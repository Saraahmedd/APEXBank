import React, { useState } from 'react'
import ClientNavbar from '../../components/client/Navbar'
import { Accordion, Alert, Col, Container, Row, Table, Card, Button, Form, Modal } from 'react-bootstrap'
import Footer from '../../components/client/Footer';
import cardpic from '../../imgs/cardApp.jpg';
import { useLocation } from 'react-router-dom';

const CreditCardApplicationScreen = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Access specific query string parameters
  const applied = queryParams.get('applied');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity()) {
      // Perform form submission or validation success actions here
      window.location.href = "http://localhost:3000/creditcardapplication?applied=1";
    }

    setValidated(true);
  };

  return (
    <>
      <div className='min-vh-100 d-flex flex-column'>
        <ClientNavbar loggedIn={true} />

        <Container className="mt-3">
          <h4 className="">Apply for a Credit Card</h4>
          {applied == 1 && <Alert key='success' variant='success' className='mt-2'>
            <span className='fw-bold'>Thank you!</span> Your application was received. We will get back to you within 72 hours.
          </Alert>}
          <Row>
            <Col md={8} className="">
              <Form noValidate validated={validated} onSubmit={handleSubmit} className="">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="cardType">Card Type</Form.Label>
                  <Form.Select id="cardType" required>
                    <option value="">Choose...</option>
                    <option>Rewards</option>
                    <option>Cashback</option>
                    <option>Travel</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please select a card type.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="spendingLimit">Desired Monthly Spending Limit in EGP</Form.Label>
                  <Form.Control
                    type="text"
                    id="spendingLimit"
                    placeholder="e.g. 100,000 EGP"
                    required
                    pattern="[0-9]+"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid number for the desired spending limit.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>
                    Supporting Documents{' '}
                    <a
                      className="text-primary cursor-pointer text-decoration-none"
                      onClick={(e) => {
                        e.preventDefault();
                        setShow(true);
                      }}
                    >
                      (View Required Documents)
                    </a>
                  </Form.Label>
                  <Form.Control multiple type="file" required />
                  <Form.Control.Feedback type="invalid">
                    Please upload the required supporting documents.
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="rounded-pill">
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