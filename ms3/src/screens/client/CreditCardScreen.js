import React, { useState } from 'react'
import { Accordion, Col, Container, Row, Table, Card, Button, Form, Modal } from 'react-bootstrap'
import '../../styles/Client.css';
import ClientNavbar from '../../components/client/Navbar';
import { ReactComponent as CreditCardSVG } from '../../imgs/credit_card.svg';
import testimonial1 from '../../imgs/testimonial_1.jpeg';
import testimonial2 from '../../imgs/testimonial_2.jpeg';
import { FlagFill, Flag, Coin, PlusLg, SlashCircleFill } from "react-bootstrap-icons";
import Footer from '../../components/client/Footer';
const CreditCardScreen = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [hoveredCard, setHoveredCard] = useState(0);
  const [cards, setCards] = useState([
    {
      id: 1,
      type: 'TRAVEL PLATINUM',
      cardNumber: '5317 3774 2846 2309',
      remaining: 15000,
      limit: 20000
    },
    {
      id: 2,
      type: 'CASHBACK TITANIUM',
      cardNumber: '5317 3774 2846 1182',
      remaining: 147250,
      limit: 150000
    },
    {
      id: 3,
      type: 'TRAVEL GOLD',
      cardNumber: '5317 3774 2846 2451',
      remaining: 30000,
      limit: 30000
    },
  ]);

  const [bankAccounts, setBankAccounts] = useState(['100041652181', '100041652184']);
  return (
    <>
      <div className="min-vh-100 d-flex flex-column">
        <ClientNavbar loggedIn={true} />

        <Container className="my-5 d-flex flex-column rounded-5 px-3">

          <div className='d-flex flex-row align-items-center'>
            <h1 className="fw-bold font-big text-gradient">Your Cards</h1>
          </div>

          <div className='d-flex flex-column'>
            <Row className='justify-content-center mt-3'>
              {
                cards.map((card, index) => {
                  return (
                    <Card
                      className={"cursor-pointer " + (hoveredCard === card.id ? 'bg-lightgray' : '')}
                      onMouseOver={() => setHoveredCard(card.id)}
                      onMouseLeave={() => setHoveredCard(0)}
                      onClick={() => window.location.href = "http://localhost:3000/card?id=" + card.id}
                      style={{ width: '18rem', marginLeft: '0.5rem', marginRight: '0.5rem' }}>
                      <Card.Body>
                        <Card.Title>
                          <div className='d-flex flex-fill'>
                            • • • {card.cardNumber.split(' ')[3]}
                            <span className="flex-grow-1"></span>
                            <Flag className='text-danger' />
                            {/* <SlashCircleFill className='text-secondary' /> */}
                          </div>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{card.type}</Card.Subtitle>
                        <Card.Text>
                          <span className='text-muted fw-bold fs-6'>
                            {card.remaining} / {card.limit} EGP
                          </span>
                        </Card.Text>
                        <Button variant="outline-secondary rounded-pill">Disable Card</Button>
                      </Card.Body>
                    </Card>
                  );
                })
              }
              <Card
                className={"cursor-pointer " + (hoveredCard === -1 ? 'bg-lightgray' : '')}
                onMouseOver={() => setHoveredCard(-1)}
                onMouseLeave={() => setHoveredCard(0)}
                onClick={() => window.location.href = "http://localhost:3000/CreditCardApplication"}
                style={{ width: '18rem', marginLeft: '0.5rem', marginRight: '0.5rem' }}>
                <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
                  <PlusLg className="text-primary" size={72} />
                  <span className='text-primary mt-1'>Apply For a New Credit Card</span>
                </Card.Body>
              </Card>
            </Row>
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
    </>
  )
}

export default CreditCardScreen;