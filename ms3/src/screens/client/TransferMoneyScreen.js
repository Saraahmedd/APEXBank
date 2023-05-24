import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { MDBInput } from 'mdbreact';
import { FaDollarSign } from 'react-icons/fa'; // Import additional icon
import Header from '../../components/client/Header';

const BankTransferScreen = () => {
  // Dummy data for available amount and current amount
  const availableAmount = 5000;
  const currentAmount = 10000;

  return (
    <>
      <Header />
      <Container className="min-vh-100">
        <br />
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="text-center">
              <h2 className="mb-4">Bank Transfer</h2>
            </div>
            <div className="card p-4 rounded shadow"> {/* Use a card component for styling */}
              <Form>
                <Form.Group controlId="formAccountNumber">
                  <Form.Label>Account Number</Form.Label>
                  <MDBInput type="text" outline />
                </Form.Group>

                <Form.Group controlId="formRecipientName">
                  <Form.Label>Recipient Name</Form.Label>
                  <MDBInput type="text" outline />
                </Form.Group>

                <Form.Group controlId="formAmount">
                  <Form.Label>Amount</Form.Label>
                  <div className="input-group"> {/* Add input group for icon */}
                    <div className="input-group-prepend">
                      <span className="input-group-text icon-container">
                        <FaDollarSign />
                      </span>
                    </div>
                    <MDBInput type="number" outline />
                  </div>
                </Form.Group>

                <Form.Group controlId="formBank">
                  <Form.Label>Bank</Form.Label>
                  <MDBInput type="text" outline />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Available Amount</Form.Label>
                  <div className="input-group"> {/* Display available amount */}
                    <div className="input-group-prepend">
                      <span className="input-group-text icon-container">
                        <FaDollarSign />
                      </span>
                    </div>
                    <MDBInput type="text" outline value={availableAmount} disabled />
                  </div>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Current Amount</Form.Label>
                  <div className="input-group"> {/* Display current amount */}
                    <div className="input-group-prepend">
                      <span className="input-group-text icon-container">
                        <FaDollarSign />
                      </span>
                    </div>
                    <MDBInput type="text" outline value={currentAmount} disabled />
                  </div>
                </Form.Group>

                <div className="text-center">
                  <Button variant="primary" className="px-4">
                    Transfer
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BankTransferScreen;
