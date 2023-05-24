import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {
  MDBBtn,
  MDBCardBody,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

const LinkBankAccountStep = () => {
  return (
     <MDBCardBody className='p-5 shadow-5 text-center'>
      <h2>Link Existing Bank Account (Optional)</h2>
      <MDBRow>
        <MDBCol col='6'>
         <Form>
             <Form.Group controlId="bankName">
               <Form.Label>Bank Name</Form.Label>
               <Form.Control type="text" placeholder="Enter your bank name" />
             </Form.Group>
                 <Form.Group controlId="accountNumber">
                 <Form.Label>Account Number</Form.Label>
                 <Form.Control type="text" placeholder="Enter your account number" />
                 </Form.Group>

                 {/* <Button variant="primary" type="submit">Next</Button> */}
                 </Form>
           
            </MDBCol>
            </MDBRow>
     
    </MDBCardBody>
                );
                };

export default LinkBankAccountStep;

             
