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

const PersonalInfoStep = () => {
  return (
   
    <MDBCardBody className='p-5 shadow-5 text-center'>
      <h2 className="fw-bold mb-5">Sign up now</h2>
      <MDBRow>
        <MDBCol col='6'>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your first name" />
          </Form.Group>
        </MDBCol>
        <MDBCol col='6'>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your last name" />
          </Form.Group>
        </MDBCol>
      </MDBRow>
      <Form.Group controlId="email">
        <Form.Label className="justify-content-left">Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email address" />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" />
      </Form.Group>

       {/* <Form.Group controlId="password">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" />
      </Form.Group> */}
     
    
     
    </MDBCardBody>
 

  );
};

export default PersonalInfoStep;
