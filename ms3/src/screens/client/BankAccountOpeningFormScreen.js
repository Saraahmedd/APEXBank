import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import Navbar from '../../components/client/Navbar'
import Footer from '../../components/client/Footer';
import SuccessModal from '../../components/client/SuccessModal';

const BankAccountScreen = () => {
   const [show,setShow] = React.useState('');
   const [selectedOption, setSelectedOption] = useState('Select Education Level');
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleClose = () => {setShow(false);window.history.pushState({},"","/bankAccount");window.location.reload();}
  const handleShow = (e) => {
    e.preventDefault(); 
    setShow(true);}
  return (
    <>
    <Navbar loggedIn={true}/>
    <SuccessModal link={"/bankAccounts"} modal={show} toggleShow={handleClose} title={"Success"} message={"Thank you for opening your bank account with us! \n We will redirect you to your bank accounts' page."}/>
    <Container className='min-vh-100  justify-content-center'>
     
      <h1 className='text-center'>Open Bank Account</h1>
      <hr></hr>
      <Form className='justify-content-center' onSubmit={handleShow}
           >  
        <section>
          <h2>Personal Info</h2>
          <Row>
            <Col>
            
              <Form.Group controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="dateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" required />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="telephoneNumber">
                <Form.Label>Telephone Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter your telephone number" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter your address" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter your city" required />
              </Form.Group>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <Form.Group controlId="postalCode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control type="text" placeholder="Enter your postal code" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Enter your country" required />
              </Form.Group>
            </Col>
          </Row>
           
          <Row>
            <Col>
              <Form.Group controlId="nationalId">
                <Form.Label>National ID</Form.Label>
                <Form.Control type="text" placeholder="Enter your national ID" required />
              </Form.Group>
            </Col> 
           
            <Col>
              <Form.Group controlId="educationLevel">
                <Form.Label>Education Level</Form.Label>
                 <Dropdown isOpen={false} toggle={() => {}}>
                  <DropdownToggle caret  variant="outline-primary">
                    {selectedOption}
                  </DropdownToggle>
                  <DropdownMenu variant="outline-primary">
                    <DropdownItem onClick={() => handleOptionSelect('High School')}>High School</DropdownItem>
                    <DropdownItem onClick={() => handleOptionSelect("Associate's Degree")}>Associate's Degree</DropdownItem>
                    <DropdownItem onClick={() => handleOptionSelect("Bachelor's Degree")}>Bachelor's Degree</DropdownItem>
                    <DropdownItem onClick={() => handleOptionSelect("Master's Degree")}>Master's Degree</DropdownItem>
                    <DropdownItem onClick={() => handleOptionSelect('Ph.D.')}>Ph.D.</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Form.Group>
            </Col>
          </Row>
           
        </section>
        <section>
          <hr></hr>
          <h2>Account Info</h2>
         <Row>
            <Col> 
              <Form.Group controlId="idCardUpload">
                <Form.Label>ID Card Upload</Form.Label>
               <Form.Control type="file" />
              <Form.Text className="text-muted">
                Upload a scanned copy of your identification proof.
              </Form.Text>
              </Form.Group>
             </Col>
           </Row> 
          <Row>
            <Col>
              <Form.Group controlId="accountType">
                <Form.Label>Account Type</Form.Label>
                <Form.Control type="text" placeholder="Enter the account type" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" placeholder="Enter the category" required />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="monthlySalary">
                <Form.Label>Monthly Salary</Form.Label>
                <Form.Control type="number" placeholder="Enter your monthly salary" required />
              </Form.Group>
            </Col>
          </Row>
        </section>
        <br />
        <Row className='text-center justify-content-center'>
        <Button style={{width:"30%"}} className='text-center' variant="primary" type="submit" >Submit</Button> 
        </Row>
      </Form>
    </Container>
    <Footer />
    </>
  );
};

export default BankAccountScreen;
