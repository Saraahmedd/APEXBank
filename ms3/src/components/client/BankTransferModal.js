import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';
import { MDBInput } from 'mdbreact';
import { FaChevronDown, FaDollarSign } from 'react-icons/fa'; // Import additional icon
import Message from './Message';

function BankTransferModal( {show, handleClose, handleShow,list,id} ) {

     const availableAmount = 5000;
  const currentAmount = 10000;
    const [message,setMessage] = useState("");
  const [success,setSuccess] = useState('');
  const [amount,setAmount] = useState(0);
  const [variant,setVariant] = useState('');
  const [transferType,seTransferType] = useState('');

  const handleSubmit = (e) => {
    // Handle form submission
    // You can perform any necessary logic here
    e.preventDefault()
    setSuccess(true)
    
    let newBalance =  list[id].balance - amount;

    if(newBalance > 0) {
     list[id].balance = newBalance
     setVariant("success")
    setMessage('Funds Transfered Successfully')
     const timer = setTimeout(() => {
      setMessage("");
    }, 5000);}
    else {
        setMessage('Not Enough Funds')
        setVariant("danger")
    }
    
    handleClose();

  };
  useEffect(()=> {},[id]);

  return (
    <>
     {message && <Message variant={variant} showMessage={success} setShowMessage={setSuccess}>
                 {message}  
                </Message> }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bank Transfer</Modal.Title>
        </Modal.Header>
         <Form onSubmit={ (e) => handleSubmit(e)}>
        <Modal.Body>
             
             <Form.Group controlId="formBank">
  <Form.Label>Transfer Type*</Form.Label>
  <Form.Select required as="select" onChange={(e) => seTransferType(e.target.value)}>
    <option value="bank1">Domestic</option>
    <option value="bank2">Internal</option>
    <option value="bank3">International</option>
  </Form.Select>
</Form.Group>

<Form.Group controlId="formAccountNumber">
  <Form.Label>Account Number*</Form.Label>
  <MDBInput required type="number" outline />
</Form.Group>

<Form.Group controlId="formRecipientName">
  <Form.Label>Recipient Name*</Form.Label>
  <MDBInput required type="text" outline />
</Form.Group>

<Form.Group controlId="formBank">
  <Form.Label>Bank*</Form.Label>
  <MDBInput required type="text" outline />
</Form.Group>

{/* Additional fields based on transfer type */}
{transferType === "bank1" && (
  <div>
    <Form.Group controlId="formRoutingNumber">
      <Form.Label>Routing Number/Sort Code*</Form.Label>
      <MDBInput required type="text" outline />
    </Form.Group>

    <Form.Group controlId="formDescription">
      <Form.Label>Description/Reference</Form.Label>
      <MDBInput type="text" outline />
    </Form.Group>
  </div>
)}

{transferType === "bank2" && (
  <div>
    <Form.Group controlId="formInternalAccountNumber">
      <Form.Label>Internal Account Number*</Form.Label>
      <MDBInput required type="text" outline />
    </Form.Group>

    <Form.Group controlId="formDescription">
      <Form.Label>Description/Reference</Form.Label>
      <MDBInput type="text" outline />
    </Form.Group>
  </div>
)}

{transferType === "bank3" && (
  <div>
    {/* Include the IBAN field for international transfers */}
    <Form.Group controlId="formIBAN">
      <Form.Label>IBAN (International Bank Account Number)*</Form.Label>
      <MDBInput required type="text" outline />
    </Form.Group>

    <Form.Group controlId="formSWIFTCode">
      <Form.Label>SWIFT/BIC Code</Form.Label>
      <MDBInput type="text" outline />
    </Form.Group>

    {/* <Form.Group controlId="formDescription">
      <Form.Label>Description/Reference</Form.Label>
      <MDBInput type="text" outline />
    </Form.Group> */}
  </div>
)}

<Form.Group controlId="formAmount">
  <Form.Label>Amount*</Form.Label>
  <div className="input-group"> {/* Add input group for icon */}
    <div className="input-group-prepend">
      <span className="input-group-text icon-container">
        <FaDollarSign />
      </span>
    </div>
    <MDBInput required onChange={(e) => setAmount(e.target.value)} type="number" outline />
  </div>
</Form.Group>

<Form.Group>
  <Form.Label>Available Amount</Form.Label>
  <div className="input-group"> {/* Display available amount */}
    <div className="input-group-prepend">
      <span className="input-group-text icon-container">
        <FaDollarSign />
      </span>
    </div>
    <MDBInput type="text" outline value={list[id]?.balance || 5000} disabled />
  </div>
</Form.Group>



            
              
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Transfer Funds
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default BankTransferModal;