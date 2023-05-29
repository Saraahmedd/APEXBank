import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaChevronDown, FaDollarSign } from 'react-icons/fa';
import { MDBInput } from 'mdbreact';
import Message from './Message';

function CloseBankAccountModal({ show, handleClose, handleShow,id,list }) {
  const [reason, setReason] = useState('');
  const [additionalComments, setAdditionalComments] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message,setMessage] = useState("");
  const [success,setSuccess] = useState('');

  const handleSubmit = (e) => {
    // Handle form submission
    // You can perform any necessary logic here
    console.log(list)
    e.preventDefault()
    list.splice(id,1);
    console.log(list)
    setSuccess(true)

    setMessage('Account closed successfully')
     const timer = setTimeout(() => {
      setMessage("");
    }, 6000);
    handleClose();
  };
 

  return (
    <>
    {message && <Message variant='success' showMessage={success} setShowMessage={setSuccess}>
                 {message}  
                </Message> }
   
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Close Bank Account</Modal.Title>
        </Modal.Header>
         <Form onSubmit={ (e) => handleSubmit(e)}>
        <Modal.Body>
         
            <Form.Group controlId="formFirstName">
              <Form.Label> Assocciated First Name *</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Assocciated Last Name *</Form.Label>
              <Form.Control
                type="text"
                Assocciated
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Assocciated Email *</Form.Label>
              <Form.Control
                type="email"
                required
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Transfer all funds to*</Form.Label>
              <Form.Control
                type="number"
                required
                placeholder="Account Number"
                
                // onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Assocciated Phone Number *</Form.Label>
              <Form.Control
                type="number"
                required
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formReason">
              <Form.Label>Reason for Closure *</Form.Label>
              <Form.Select
                as="select"
                value={reason}
                required
                onChange={(e) => setReason(e.target.value)}
              >
                <option value="">Select a reason</option>
                <option value="personal">Personal</option>
                <option value="migration">Migration</option>
                <option value="unhappy">Unhappy with services</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formAdditionalComments">
              <Form.Label>Additional Comments</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={additionalComments}
                onChange={(e) => setAdditionalComments(e.target.value)}
              />
            </Form.Group>

            
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger"type='submit'>
            Close Account
          </Button>
        </Modal.Footer>
         </Form>
      </Modal>
    </>
  );
}

export default CloseBankAccountModal;
