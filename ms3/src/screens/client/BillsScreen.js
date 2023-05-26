import React, { useState } from 'react'
import { Accordion, Col, Container, Row, Table, Card, Button, Form, Modal } from 'react-bootstrap'
import '../../styles/Client.css';
import ClientNavbar from '../../components/client/Navbar';
import { ReactComponent as CreditCardSVG } from '../../imgs/credit_card.svg';
import testimonial1 from '../../imgs/testimonial_1.jpeg';
import testimonial2 from '../../imgs/testimonial_2.jpeg';
import { BellFill, Coin } from "react-bootstrap-icons";
import Footer from '../../components/client/Footer';
const BillsScreen = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


  const [bills, setBills] = useState([
    {
      billNumber: 312345,
      billType: 'UTILITY',
      billDescription: 'Telephone Bill for 01005079623',
      payee: 'Vodafone Egypt',
      billedAmt: 380.00,
      dueDate: '12/06/2023',
      status: 'UNPAID'
    },
    {
      billNumber: 801312,
      billType: 'CREDIT CARD',
      billDescription: 'CREDIT CARD BILL FOR 05/23',
      payee: 'APEX BANK',
      billedAmt: 4200.00,
      dueDate: '01/06/2023',
      status: 'UNPAID'
    },
    {
      billNumber: 650134,
      billType: 'LOAN',
      billDescription: 'LOAN BILL FOR 05/23',
      payee: 'APEX BANK',
      billedAmt: 10000.00,
      dueDate: '01/06/2023',
      status: 'UNPAID'
    }
  ]);

  const [bankAccounts, setBankAccounts] = useState(['100041652181', '100041652184']);
  return (
    <>
      <div className="min-vh-100 d-flex flex-column">
        <ClientNavbar loggedIn={true} />

        <Container className="my-5 d-flex flex-column rounded-5 px-3">

          <div className='d-flex flex-row align-items-center'>
            <h1 className="fw-bold font-big text-gradient">Bills</h1>
            <span className='flex-grow-1'></span>
            <Button variant="outline-primary rounded-pill px-5 h-50" onClick={(e) => { e.preventDefault(); setShow(true) }}>New Bill</Button>
          </div>

          <div className='d-flex flex-column'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Bill Number</th>
                  <th>Bill Type</th>
                  <th>Bill Description</th>
                  <th>Payee</th>
                  <th>Billed Amount</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Reminder</th>
                  <th>Pay Now</th>
                </tr>
              </thead>
              <tbody>
                {
                  bills.map((bill, index) => {
                    return (
                      <tr>
                        <td>{bill.billNumber}</td>
                        <td>{bill.billType}</td>
                        <td>{bill.billDescription}</td>
                        <td>{bill.payee}</td>
                        <td>{bill.billedAmt} EGP</td>
                        <td>{bill.dueDate}</td>
                        <td>{bill.status}</td>
                        <td className='text-center'><BellFill className="text-warning cursor-pointer" size={24} /></td>
                        <td className='text-center'><Button className='rounded-pill' onClick={() => setShow2(true)}>Pay Now</Button></td>
                      </tr>
                    );
                  })
                }

              </tbody>
            </Table>
          </div>

        </Container>

        <span className='flex-grow-1'></span>
        <Footer />
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Bill</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="billDescription">
              <Form.Label>Bill Description</Form.Label>
              <Form.Control type="text" placeholder="Description (e.g. Telephone bill)" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="billAmount">
              <Form.Label>Bill Amount (EGP)</Form.Label>
              <Form.Control type="text" placeholder="e.g. 1000.00" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="billDescription">
              <Form.Label>Payee International Bank Addressing Number (IBAN)</Form.Label>
              <Form.Control type="text" placeholder="e.g. EG380019000500000000263180002" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="billDescription">
              <Form.Label>Payee Company Name</Form.Label>
              <Form.Control type="text" placeholder="e.g. Vodafone Egypt" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="billDescription">
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>



          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Bill
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Bill Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="bankAccChoice">Choose Bank Account</Form.Label>
              <Form.Select id="bankAccChoice">
                {
                  bankAccounts.map((acc, index) => {
                    return (<option>{acc}</option>);
                  })
                }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="loanAmt">Amount to Pay in EGP</Form.Label>
              <Form.Control
                type="text"
                id="loanAmt"
                placeholder="e.g. 1000.00"
              />
            </Form.Group>
          </Form>
          <p>By clicking confirm, you acknowledge the full amount will be immediately deducted from your bank account.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Pay Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default BillsScreen