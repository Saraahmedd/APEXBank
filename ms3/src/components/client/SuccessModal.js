import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SuccessModal = ({ modal, toggleShow, title, message }) => {
  return (
    <Modal show={modal} onHide={toggleShow} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <i className="fas fa-check-circle text-success me-2"></i>
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={toggleShow}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SuccessModal;
