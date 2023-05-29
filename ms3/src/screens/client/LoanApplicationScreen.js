import React, { useState } from 'react'
import ClientNavbar from '../../components/client/Navbar'
import { Accordion, Alert, Col, Container, Row, Table, Card, Button, Form, Modal } from 'react-bootstrap'
import Footer from '../../components/client/Footer';
import cardpic from '../../imgs/loanApp.jpg';
import { useLocation } from 'react-router-dom';

const LoanApplicationScree = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [validated, setValidated] = useState(false);

  // Access specific query string parameters
  const applied = queryParams.get('applied');
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity()) {
      // Perform form submission or validation success actions here
      window.location.href = "http://localhost:3000/loanapplication?applied=1";
    }

    setValidated(true);
  };

  return (
    <>
      <div className='min-vh-100 d-flex flex-column'>
        <ClientNavbar loggedIn={true} />

        <Container className="mt-3">
          {applied == 1 && <Alert key='success' variant='success' className='mt-2'>
            <span className='fw-bold'>Thank you!</span> Your application was received. We will get back to you within 72 hours.
          </Alert>}
          <h4>Loan Application Form</h4>
          <Row>
            <Col md={8}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="loanType">Loan Type <span className="text-danger">*</span></Form.Label>
                  <Form.Select id="loanType" required>
                    <option value="">Choose...</option>
                    <option>Personal Loan</option>
                    <option>Car Loan</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please select a loan type.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="loanTerm">Preferred Loan Term <span className="text-danger">*</span></Form.Label>
                  <Form.Select id="loanTerm" required>
                    <option value="">Choose...</option>
                    <option>1 year - 4.5%</option>
                    <option>2 years - 5.5%</option>
                    <option>3 years - 6.5%</option>
                    <option>5 years - 7.5%</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please select a preferred loan term.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="loanAmt">Amount Requested in USD <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    id="loanAmt"
                    placeholder="e.g. 100,000 USD"
                    pattern="[0-9]+"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide the requested loan amount.
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
                      <span className="text-danger">*</span>
                    </a>
                  </Form.Label>
                  <Form.Control type="file" required />
                  <Form.Control.Feedback type="invalid">
                    Please upload the required supporting documents.
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={cardpic} />
                <Card.Body>
                  <Card.Title>Secure Your Future</Card.Title>
                  <Card.Text>
                    Apply for our competitive loan options today and take control of your financial future. Get flexible terms, competitive interest rates, and personalized service tailored to your needs                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>



        </Container>

        <Footer className="mt-5" />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Required Supporting Documents</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul class="list-group">
            <li class="list-group-item">Proof of identification (government-issued ID)</li>
            <li class="list-group-item">Proof of income (pay stubs, tax returns, bank statements)</li>
            <li class="list-group-item">Proof of residence (utility bills, rental agreement)</li>
            <li class="list-group-item">Documentation related to collateral</li>
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

export default LoanApplicationScree