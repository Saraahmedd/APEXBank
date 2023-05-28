import React from 'react';
import { Container, Row, Col, Form, Button, FormGroup } from 'react-bootstrap';
import {
  MDBBtn,
  MDBCardBody,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

const TermsAndServicesStep = () => {
  return (
         
          <MDBCardBody className='p-5 shadow-5 text-center'>
    <h2>Agree on Terms and Services</h2>
      <MDBRow>
        <MDBCol col='6'>
          <Form>
           
            <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I agree to the terms and conditions' />
            </div>

            <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label="I agree to the Privacy Policy" />
            </div>

             <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label="Subscirbe to our Bank's Newsletter" />
            </div>

             <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label="Subscirbe to our Bank's Newsletter" />
            </div>
               

            {/* <Button variant="primary" type="submit">Register</Button> */}
          </Form>

         
            </MDBCol>
            </MDBRow>
     
    </MDBCardBody>
          
          
       
  );
};

export default TermsAndServicesStep;
