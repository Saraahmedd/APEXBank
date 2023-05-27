import React, { useState } from 'react'
import { Accordion, Col, Container, Row, Table, Card, Button, Form, Modal } from 'react-bootstrap'
import '../../styles/Client.css';
import ClientNavbar from '../../components/client/Navbar';
import { ReactComponent as CreditCardSVG } from '../../imgs/credit_card.svg';
import testimonial1 from '../../imgs/testimonial_1.jpeg';
import testimonial2 from '../../imgs/testimonial_2.jpeg';
import { FlagFill, Flag, Coin, PlusLg, SlashCircleFill } from "react-bootstrap-icons";
import Footer from '../../components/client/Footer';
import { useLocation } from 'react-router-dom';


const SingleCardScreen = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    // Access specific query string parameters
    const cardId = queryParams.get('id');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            value: 95.75,
            description: "Concert ticket purchase for XYZ Band"
        }
    ];


    return (
        <>
            <div className="min-vh-100 d-flex flex-column">
                <ClientNavbar loggedIn={true} />

                <Container className="my-5 d-flex flex-column rounded-5 px-3">

                    <div className='d-flex flex-row align-items-center'>
                        <h1 className="fw-bold font-big text-gradient">Manage Your Card</h1>
                    </div>

                    <div className='d-flex flex-column mt-3'>
                        <Row>
                            <Col md={8}>
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
                                                        <td>{transaction.value} EGP</td>
                                                        <td>{transaction.date}</td>
                                                    </tr>
                                                );
                                            })
                                        }

                                    </tbody>
                                </Table>
                            </Col>
                            <Col md={4}>
                                <Card style={{ width: '18rem', marginLeft: '0.5rem', marginRight: '0.5rem' }}>
                                    <Card.Body>
                                        <Card.Title>
                                            <div className='d-flex flex-fill'>
                                                • • • {cards.filter(card => card.id == cardId)[0].cardNumber.split(' ')[3]}
                                                <span className="flex-grow-1"></span>
                                                <Flag className='text-danger' />
                                                {/* <SlashCircleFill className='text-secondary' /> */}
                                            </div>
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{cards.filter(card => card.id == cardId)[0].type}</Card.Subtitle>
                                        <Card.Text>
                                            <span className='text-muted fw-bold fs-6'>
                                                {cards.filter(card => card.id == cardId)[0].remaining} / {cards.filter(card => card.id == cardId)[0].limit} EGP
                                            </span>
                                        </Card.Text>
                                        <Button variant="outline-secondary rounded-pill">Disable Card</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>

                </Container>

                <span className='flex-grow-1'></span>
                <Footer />
            </div>
        </>
    )
}

export default SingleCardScreen;