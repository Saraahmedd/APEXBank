import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';

const ReportIssueModal = ({ show, onHide }) => {
  const [category, setCategory] = useState('');
  const [otherCategory, setOtherCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleOtherCategoryChange = (event) => {
    setOtherCategory(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    // Implement your logic to handle the form submission here
    console.log('Category:', category);
    console.log('Other Category:', otherCategory);
    console.log('Description:', description);

    // Reset the form fields
    setCategory('');
    setOtherCategory('');
    setDescription('');

    // Close the modal
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Report Technical Issue</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="categorySelect">
            <Form.Label>Category</Form.Label>
           <Form.Control as="select" className='form-select' value={category} onChange={handleCategoryChange} defaultValue="">
              <option value="">Select a category</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>
          {category === 'other' && (
            <Form.Group controlId="otherCategoryInput">
              <Form.Label>Please specify</Form.Label>
              <Form.Control
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReportIssueModal;
