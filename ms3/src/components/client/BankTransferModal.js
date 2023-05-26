import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';
import { MDBInput } from 'mdbreact';
import { FaChevronDown, FaDollarSign } from 'react-icons/fa'; // Import additional icon

function BankTransferModal( {show, handleClose, handleShow} ) {

     const availableAmount = 5000;
  const currentAmount = 10000;

  return (
    <>
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bank Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <Form>
                <Form.Group controlId="formBank">
                <Form.Label>Transfer Type</Form.Label>
                <Form.Select as="select">
                    <option value="bank1">Domestic</option>
                    <option value="bank2">Local</option>
                    <option value="bank3">International</option>
                </Form.Select>
                </Form.Group>

                <Form.Group controlId="formAccountNumber">
                  <Form.Label>Account Number</Form.Label>
                  <MDBInput type="text" outline />
                </Form.Group>

                 

                <Form.Group controlId="formRecipientName">
                  <Form.Label>Recipient Name</Form.Label>
                  <MDBInput type="text" outline />
                </Form.Group>

              

                <Form.Group controlId="formBank">
                <Form.Label>Bank</Form.Label>
                <Form.Select as="select">
                    <option value="bank1">Bank 1</option>
                    <option value="bank2">Bank 2</option>
                    <option value="bank3">Bank 3</option>
                    <option value="bank3">Bank4</option>
                </Form.Select>
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

            
              </Form>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Transfer Funds
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BankTransferModal;