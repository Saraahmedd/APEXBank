import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import SuccessModal from './SuccessModal';

const ForgetPasswordModal = ({ show, onHide }) => {
  const [category, setCategory] = useState('');
  const [otherCategory, setOtherCategory] = useState('');
  const [description, setDescription] = useState('');
  const [show2,setShow2] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleOtherCategoryChange = (event) => {
    setOtherCategory(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (e) => {
    // Implement your logic to handle the form submission here
    console.log('Category:', category);
    console.log('Other Category:', otherCategory);
    console.log('Description:', description);
    e.preventDefault();
    // Reset the form fields
    setCategory('');
    setOtherCategory('');
    setDescription('');

    // Close the modal
    onHide();
    setShow2(true)
  };
  const handleClose = () => {setShow2(false);}
 

  return (
    <>
 <SuccessModal link={"/bankAccounts"} modal={show2} toggleShow={handleClose} title={"Success"} message={"Password reset link has been sent. \n Please check your email."}/>
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Reset Password</Modal.Title>
      </Modal.Header>
       <Form onSubmit={handleSubmit}>
      <Modal.Body>
       
          <Form.Group controlId="descriptionTextarea">
            <Form.Label>Email Address *</Form.Label>
            <Form.Control  required
             type='email'
              placeholder="Enter your email"
              value={description}
              onChange={handleDescriptionChange}
            />
          </Form.Group>
      
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" type='submit'>
          Send
        </Button>
      </Modal.Footer>
        </Form>
      
    </Modal>
    </>
  );
};

export default ForgetPasswordModal;