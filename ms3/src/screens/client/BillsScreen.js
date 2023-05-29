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


  const handleShow = () => setShow(true);
  const [isValidated, setIsValidated] = useState(false);
  const [isValidated2, setIsValidated2] = useState(false);
  const [isValidated3, setIsValidated3] = useState(false);

  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  let [chosenBill, setChosenBill] = useState('');

  const handleClose2 = () => setShow2(false);
  const handleClose3 = () => setShow3(false);
  const handleShow2 = () => setShow2(true);
  const handleShow3 = () => setShow3(true);
  const [amountPaid, setAmountPaid] = useState('');

  const [description, setDescription] = useState('');
  const [payeeName, setPayeeName] = useState('');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');


  const [bills, setBills] = useState([
    {
      billNumber: 312345,
      billType: 'UTILITY',
      billDescription: 'Telephone Bill for 01005079623',
      payee: 'Vodafone Egypt',
      billedAmt: 380.00,
      dueDate: '12-06-2023',
      status: 'UNPAID',
      reminder: false
    },
    {
      billNumber: 801312,
      billType: 'CREDIT CARD',
      billDescription: 'Credit Card Bill for 05/23',
      payee: 'APEX BANK',
      billedAmt: 4200.00,
      dueDate: '01-06-2023',
      status: 'UNPAID',
      reminder: false
    },
    {
      billNumber: 650134,
      billType: 'LOAN',
      billDescription: 'Loan Bill for 05/23',
      payee: 'APEX BANK',
      billedAmt: 10000.00,
      dueDate: '01-06-2023',
      status: 'UNPAID',
      reminder: false
    }
  ]);

  const handleClose = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (form.checkValidity()) {
      setBills([...bills, {
        billNumber: Math.floor(Math.random() * 999999),
        billType: 'UTILITY',
        billDescription: description,
        payee: payeeName,
        billedAmt: amount,
        dueDate: dueDate,
        status: 'UNPAID',
        reminder: false
      }]);
      setDescription('');
      setPayeeName('');
      setAmount('');
      setDueDate('');
      setShow(false);
    }

    setIsValidated(true);
  };

  const setReminderOff = (billNumber) => {
    setChosenBill(billNumber);
    let newBills = [];
    for (let bill of bills) {
      if (bill.billNumber == billNumber && bill.billType === "UTILITY") {
        if (!bill.reminder) {
          setShow3(true);
        } else {
          bill.reminder = !bill.reminder;
        }
        newBills.push(bill);
      } else {
        newBills.push(bill);
      }
    }
    setBills(newBills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      let i = 0;
      let newBills = [];
      console.log(chosenBill);
      for (let bill of bills) {
        if (bill.billNumber == chosenBill) {
          if (amountPaid >= bill.billedAmt) {
            bill.status = "PAID";
          } else {
            const amtLeft = (parseFloat(bill.billedAmt) - parseFloat(amountPaid)) >= 0 ? (parseFloat(bill.billedAmt) - parseFloat(amountPaid)) : 0;
            bill.status = "PARTIALLY PAID - " + amtLeft + " USD remaining";
          }
          newBills.push(bill);
        } else {
          newBills.push(bill);
        }
      }

      setBills(newBills);
      handleClose2();
    }

    setIsValidated2(true);
  };

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
                        <td>{bill.billedAmt} USD</td>
                        <td>{bill.dueDate}</td>
                        <td>{bill.status}</td>
                        <td className='text-center'>{(bill.billType === "UTILITY" && bill.reminder === false) ? (<BellFill onClick={() => setReminderOff(bill.billNumber)} className="text-secondary cursor-pointer" size={24} />) : (<BellFill onClick={() => setReminderOff(bill.billNumber)} className="text-warning cursor-pointer" size={24} />)}</td>
                        <td className='text-center'><Button className='rounded-pill' onClick={() => { setChosenBill(bill.billNumber); setShow2(true); }}>Pay Now</Button></td>
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


      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>New Bill</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={isValidated} onSubmit={handleClose}>
            <Form.Group className="mb-3" controlId="billDescription">
              <Form.Label>Bill Description <span className="text-danger">*</span></Form.Label>
              <Form.Control required onChange={(data) => setDescription(data.target.value)} type="text" placeholder="Description (e.g. Telephone bill)" />
              <Form.Control.Feedback type="invalid">
                A description for the bill is required.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3" controlId="billAmount">
              <Form.Label>Bill Amount (EGP)  <span className="text-danger">*</span></Form.Label>
              <Form.Control required pattern="[0-9]+" onChange={(data) => setAmount(data.target.value)} type="text" placeholder="e.g. 1000.00" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid number for the desired bill amount.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3" controlId="billDescription">
              <Form.Label>Payee International Bank Addressing Number (IBAN) <span className="text-danger">*</span></Form.Label>
              <Form.Control required type="text" placeholder="e.g. EG380019000500000000263180002" />
              <Form.Control.Feedback type="invalid">
                Please provide an IBAN for the payee.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3" controlId="billDescription">
              <Form.Label>Payee Company Name <span className="text-danger">*</span></Form.Label>
              <Form.Control required type="text" onChange={(data) => setPayeeName(data.target.value)} placeholder="e.g. Vodafone Egypt" />
              <Form.Control.Feedback type="invalid">
                Please provide a name for the payee.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3" controlId="billDescription">
              <Form.Label>Due Date <span className="text-danger">*</span></Form.Label>
              <Form.Control required onChange={(data) => setDueDate(data.target.value)} type="date" />
              <Form.Control.Feedback type="invalid">
                Please choose a due date for the bill.
              </Form.Control.Feedback>

            </Form.Group>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Add Bill
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>

      </Modal>


      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Bill Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={isValidated2} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="bankAccChoice">Choose Bank Account <span className="text-danger">*</span></Form.Label>
              <Form.Select required id="bankAccChoice">
                <option value="">Choose Account...</option>
                {
                  bankAccounts.map((acc, index) => {
                    return (<option>{acc}</option>);
                  })
                }
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select an account.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="loanAmt">Amount to Pay in USD <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                id="loanAmt"
                onChange={(e) => setAmountPaid(e.target.value)}
                placeholder="e.g. 1000.00"
                required
                pattern="[0-9]+"
              />
              <Form.Control.Feedback type="invalid">
                Please enter an amount.
              </Form.Control.Feedback>
            </Form.Group>
            <p>By clicking confirm, you acknowledge the full amount will be immediately deducted from your bank account.</p>
            <Modal.Footer>
              <Button onClick={handleClose2} variant="secondary">
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Pay Now
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>





      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Set Reminder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={isValidated3} onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            if (form.checkValidity()) {

              let newBills = [];
              for (let bill of bills) {
                console.log(chosenBill);
                if (bill.billNumber == chosenBill) {
                  bill.reminder = true;
                  newBills.push(bill);
                } else {
                  newBills.push(bill);
                }
              }
              setBills(newBills);
              handleClose3();
            }

            setIsValidated3(true);
          }}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="bankAccChoice">When do you want to be reminded?  <span className="text-danger">*</span></Form.Label>
              <Form.Select required id="bankAccChoice">
                <option value="">Choose...</option>
                <option value="1">24 hours before</option>
                <option value="3">48 hours befor</option>
                <option value="2">72 hours before</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select a time to be reminded at.
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Check // prettier-ignore
              type="checkbox"
              id={`default1`}
              label="Notify via SMS"
            />

            <Form.Check // prettier-ignore
              type="checkbox"
              id={`default-2`}
              label="Notify via Email"
            />

            <Modal.Footer className='mt-2'>
              <Button onClick={handleClose3} variant="secondary">
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Set Reminder
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default BillsScreen