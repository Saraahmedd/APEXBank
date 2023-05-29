import React, { useState } from 'react'
import { Accordion, Col, Container, Row, Table, Card, Alert, Button, Form, Modal } from 'react-bootstrap'
import '../../styles/Client.css';
import ClientNavbar from '../../components/client/Navbar';
import { ReactComponent as CreditCardSVG } from '../../imgs/credit_card.svg';
import testimonial1 from '../../imgs/testimonial_1.jpeg';
import testimonial2 from '../../imgs/testimonial_2.jpeg';
import { FlagFill, Flag, Coin, PlusLg, SlashCircleFill } from "react-bootstrap-icons";
import Footer from '../../components/client/Footer';
import { useLocation } from 'react-router-dom';
import cashbackPic from '../../imgs/cashback.jpg'

const SingleCardScreen = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    // Access specific query string parameters
    const cardId = queryParams.get('id');

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [validated, setValidated] = useState(false);



    const [cardDisabled, setCardDisabled] = useState(false);
    const [redeem, setRedeem] = useState(false);
    const [cardReplacement, setCardReplacement] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);


    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
    
        if (form.checkValidity()) {
          // Perform form submission or validation success actions here
          setCardDisabled(true);
          handleClose4();
        }
    
        setValidated(true);
    }


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


    const transactions = [
        {
            reference: "TXN123456789",
            date: "2023-05-25",
            value: 50.99,
            description: "Purchase at XYZ Store"
        },
        {
            reference: "TXN987654321",
            date: "2023-05-26",
            value: 25.5,
            description: "Online payment for subscription"
        },
        {
            reference: "TXN246813579",
            date: "2023-05-27",
            value: 120.75,
            description: "Dinner at ABC Restaurant"
        },
        {
            reference: "TXN369258147",
            date: "2023-05-28",
            value: 80.0,
            description: "Clothing purchase at DEF Boutique"
        },
        {
            reference: "TXN951753628",
            date: "2023-05-29",
            value: 150.25,
            description: "Electronics purchase at GHI Store"
        },
        {
            reference: "TXN741852963",
            date: "2023-05-30",
            value: 200.0,
            description: "Hotel reservation at JKL Resort"
        },
        {
            reference: "TXN528496731",
            date: "2023-05-31",
            value: 65.99,
            description: "Grocery shopping at MNO Supermarket"
        },
        {
            reference: "TXN314159265",
            date: "2023-06-01",
            value: 75.5,
            description: "Gasoline purchase at PQR Station"
        },
        {
            reference: "TXN789456123",
            date: "2023-06-02",
            value: 300.0,
            description: "Furniture purchase at STU Home Decor"
        },
        {
            reference: "TXN123123123",
            date: "2023-06-03",
            value: 234.75,
            description: "Concert ticket purchase for XYZ Band"
        },
        {
            reference: "TXN125123123",
            date: "2023-06-02",
            value: 455.75,
            description: "Gasoline purchase at Mobil"
        },
        {
            reference: "TXN126123123",
            date: "2023-06-01",
            value: 75.75,
            description: "Talabat Cairo purchase"
        }, {
            reference: "TXN127123123",
            date: "2023-05-31",
            value: 4232.5,
            description: "Nike Cairo Festival City Purchase"
        },
    ];


    return (
        <>
            <div className="min-vh-100 d-flex flex-column">
                <ClientNavbar loggedIn={true} />

                <Container className="my-5 d-flex flex-column rounded-5 px-3">

                    <div className='d-flex flex-row align-items-center'>
                        <h1 className="fw-bold font-big text-gradient">Manage Your Card</h1>
                    </div>

                    {cardDisabled && !cardReplacement && <Alert key='danger' variant='danger'>
                        Warning: This Credit Card has been locked. {' '}
                        <Alert.Link onClick={() => setShow2(true)}>Click here to re-enable the card.</Alert.Link>
                    </Alert>}

                    {cardReplacement && <Alert key='success' variant='success'>
                        Thank you! Your replacement has been requested. You will be notified when it is processed.
                    </Alert>}

                    {redeem && <Alert key='success' variant='success'>
                        <span className='fw-bold'>Congratulations!</span> You have successfully redeemed 200000 points as cashback! The money will be credited to your account within 3 business days!
                    </Alert>}

                    <div className='d-flex flex-column mt-3'>
                        <Row>
                            <Col md={9}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Transaction Reference</th>
                                            <th>Transaction Description</th>
                                            <th>Transaction Value</th>
                                            <th>Transaction Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            transactions.reverse().map((transaction, index) => {
                                                return (
                                                    <tr>
                                                        <td>{transaction.reference}</td>
                                                        <td>{transaction.description}</td>
                                                        <td>{transaction.value} USD</td>
                                                        <td>{transaction.date}</td>
                                                    </tr>
                                                );
                                            })
                                        }

                                    </tbody>
                                </Table>
                            </Col>
                            <Col md={3}>
                                <Card style={{}}>
                                    <Card.Body>
                                        <Card.Title>
                                            <div className='d-flex flex-fill'>
                                                • • • {cards.filter(card => card.id == cardId)[0].cardNumber.split(' ')[3]}
                                                {/* <span className="flex-grow-1"></span> */}
                                                {/* <Flag onClick={() => { setShow4(true) }} className='text-danger cursor-pointer' /> */}
                                                {/* <SlashCircleFill className='text-secondary' /> */}
                                            </div>
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{cards.filter(card => card.id == cardId)[0].type}</Card.Subtitle>
                                        <Card.Text>
                                            <span className='text-muted fw-bold fs-6'>
                                                {cards.filter(card => card.id == cardId)[0].remaining} / {cards.filter(card => card.id == cardId)[0].limit} USD
                                            </span>
                                        </Card.Text>
                                        <div className='d-flex flex-row'>
                                            <Button onClick={() => cardDisabled ? setShow2(true) : setShow(true)} variant="outline-secondary rounded-pill">{cardDisabled ? 'Enable Card' : 'Disable Card'}</Button>
                                            {!cardDisabled &&
                                                <Button className='ms-1' onClick={() => setShow4(true)} variant="outline-secondary rounded-pill">Report as Lost</Button>
                                            }
                                            {cardDisabled &&
                                                <Button className='ms-1' onClick={() => setShow5(true)} variant="outline-secondary rounded-pill">Card Replacement</Button>
                                            }
                                        </div>

                                    </Card.Body>
                                </Card>
                                {!redeem &&
                                    <Card className='mt-3'>
                                        <Card.Img variant="top" src={cashbackPic} />
                                        <Card.Body>
                                            <Card.Title>You've Got Points!</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Points Balance: 200000 Points <span style={{ fontSize: '0.75rem' }}>(=2000EGP)</span></Card.Subtitle>
                                            <Card.Text>
                                                <Button onClick={() => setShow3(true)} variant="outline-primary rounded-pill">Redeem</Button>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                }
                            </Col>
                        </Row>
                    </div>

                </Container>

                <span className='flex-grow-1'></span>
                <Footer />
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Disable Card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Are you sure you want to disable this card?</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => { setCardDisabled(true); setShow(false); }}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Re-enable Card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Are you sure you want to re-enable this card?</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => { setCardDisabled(false); setShow2(false); }}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal show={show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                    <Modal.Title>Redeem Points</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Are you sure you want to redeem 20,000 points? 2000 USD will be credited to your account.</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose3}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => { setRedeem(true); handleClose3(); }}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show4} onHide={handleClose4}>
                <Modal.Header closeButton>
                    <Modal.Title>Report as Stolen/Lost</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="bankAccChoice">Report Type <span className="text-danger">*</span></Form.Label>
                            <Form.Select id="bankAccChoice" required>
                                <option value="">Choose...</option>
                                <option>I lost my card</option>
                                <option>I believe my card was stolen</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Please select a report type.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="billDescription">
                            <Form.Label>When did this incident occur? <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="date" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid date.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose4}>
                                Cancel
                            </Button>
                            <Button variant="primary" type="submit">
                                Confirm Report
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>



            <Modal show={show5} onHide={handleClose5}>
                <Modal.Header closeButton>
                    <Modal.Title>Request a Card Replacement</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='text-warning'><span className='fw-bold'>Warning: </span>By clicking confirm, your current card will be disabled forever.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose5}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => { setCardDisabled(true); setCardReplacement(true); handleClose5(); }}>
                        Confirm Replacement Request
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SingleCardScreen;