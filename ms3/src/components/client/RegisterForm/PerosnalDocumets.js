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

const PersonalDocsStep = () => {
  return (
     
      <MDBCardBody className='p-5 shadow-5 text-center'>
      <h2 className="fw-bold mb-5">Personal Documents </h2>
      <MDBRow>
        <MDBCol col='6'>
          <Form>
            <Form.Group controlId="idProof">
              <Form.Label>Identification Proof</Form.Label>
              <Form.Control type="file" />
              <Form.Text className="text-muted">
                Upload a scanned copy of your identification proof.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="addressProof">
              <Form.Label>Address Proof</Form.Label>
              <Form.Control type="file" />
              <Form.Text className="text-muted">
                Upload a scanned copy of your address proof.
              </Form.Text>
            </Form.Group>

            {/* <Button variant="primary" type="submit">Next</Button> */}
          </Form>
      
    </MDBCol>
    </MDBRow>
     
    </MDBCardBody>
  );
};

export default PersonalDocsStep;
