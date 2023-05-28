import React, { useState } from 'react'
import { Accordion, Col, Container, Row, Table, Card, Button, Form, Modal } from 'react-bootstrap'
import '../../styles/Client.css';
import ClientNavbar from '../../components/client/Navbar';
import { ReactComponent as CreditCardSVG } from '../../imgs/credit_card.svg';
import testimonial1 from '../../imgs/testimonial_1.jpeg';
import testimonial2 from '../../imgs/testimonial_2.jpeg';
import { TelephoneFill, EnvelopeFill } from "react-bootstrap-icons";
import Footer from '../../components/client/Footer';
const Contact = () => {

    return (
        <>
            <div className="min-vh-100 d-flex flex-column">
<<<<<<< HEAD
                <ClientNavbar loggedIn={false} />
=======
                <ClientNavbar loggedIn={true} />
>>>>>>> 6b38fae8323d86ddafe8fe5c5675e4eb7ea6fd36

                <Container className="my-5 d-flex flex-column rounded-5 px-3">

                    <div className='d-flex flex-row align-items-center'>
                        <h1 className="fw-bold font-big text-gradient">Contact Us</h1>
                    </div>

                    <div className='d-flex flex-column'>
                        <Row className='justify-content-center mt-3'>
                            <Col md={8}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control type="text" placeholder="Issue while paying my bills" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="bankAccChoice">Department</Form.Label>
                                        <Form.Select id="bankAccChoice">
                                            <option>Technical Issues</option>
                                            <option>Accounts</option>
                                            <option>Cards</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Attachments</Form.Label>
                                        <Form.Control multiple type="file" />
                                    </Form.Group>
                                    <Button className='rounded-pill px-4' variant="primary" type="submit">
                                        Send
                                    </Button>
                                </Form>
                            </Col>

                            <Col md={4} className='mx-auto my-auto text-center'>
                                <h4>Reach Us Directly</h4>
                                <Card>
                                    <Card.Body>
                                        <Card.Text>
                                            <p className='fw-semibold'><TelephoneFill className='me-3' /> +20 19728</p>

                                            
                                            <p className='fw-semibold'><EnvelopeFill className='me-3' /> help@apexbanking.com</p>
                                        </Card.Text>
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

export default Contact;