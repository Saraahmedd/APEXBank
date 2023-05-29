import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import SuccessModal from './SuccessModal';

const ReportIssueModal = ({ show, onHide }) => {
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
 <SuccessModal link={"/bankAccounts"} modal={show2} toggleShow={handleClose} title={"Success"} message={"Thank you for your feedback. \n We will get back to you."}/>
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Report Technical Issue</Modal.Title>
      </Modal.Header>
       <Form onSubmit={handleSubmit}>
      <Modal.Body>
       
          <Form.Group controlId="categorySelect">
            <Form.Label>Category *</Form.Label>
           <Form.Control as="select" className='form-select' required value={category} onChange={handleCategoryChange} defaultValue="">
              <option value="">Select a Category</option>
              <option value="category1">Security Issue</option>
              <option value="category2">Bug Report</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>
          {category === 'other' && (
            <Form.Group controlId="otherCategoryInput">
              <Form.Label>Please Specify *</Form.Label>
              <Form.Control required
                type="text"
                placeholder="Specify other category"
                value={otherCategory}
                onChange={handleOtherCategoryChange}
              />
            </Form.Group>
          )}
          <Form.Group controlId="descriptionTextarea">
            <Form.Label>Description</Form.Label>
            <Form.Control 
              as="textarea"
              rows={5}
              placeholder="Enter issue description"
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

export default ReportIssueModal;
