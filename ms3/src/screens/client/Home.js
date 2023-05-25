import React from 'react'
import { Button, Container, Nav, NavDropdown, Navbar, Form, Row, Col } from 'react-bootstrap'
import '../../styles/Client.css';
import ClientNavbar from '../../components/client/RegisterForm/Navbar';
import { ReactComponent as CreditCardSVG } from '../../imgs/credit_card.svg';
import testimonial1 from '../../imgs/testimonial_1.jpeg';
import testimonial2 from '../../imgs/testimonial_2.jpeg';
import { MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from 'mdb-react-ui-kit';
const Home = () => {
    return (
        <>
            <div className="min-vh-100">
                <ClientNavbar />

                <Container className="my-5 page-block d-flex flex-column rounded-5 px-3">
                    <h1 className="fw-bold font-very-big text-gradient">Hassle-free banking for all.</h1>
                    <Row className="p-0 mt-5 banner">
                        <Col xs={12} md={6} order={2} order-md={1} className="p-0 d-flex flex-col">
                            <div className="bg-gradient flex-fill first-image-borders p-5 justify-content-center d-flex flex-column">
                                <h1 className="text-white fw-bold font-big">Unlock Financial Flexibility: Enjoy 0% APR on Select Banking Services.</h1>
                                <p className="text-light fw-semibold mt-4">
                                    Take control of your financial journey with our exclusive offer. Enjoy 0% APR on qualifying banking services, empowering you to manage your finances with ease and peace of mind.</p>
                                <Button variant="light" className="rounded-pill get-started-btn px-5">
                                    <span className="fw-bold fs-5 text-gradient">
                                        Get Started Now
                                    </span>
                                </Button>
                            </div>
                        </Col>
                        <Col xs={12} md={6} order={1} order-md={2} className="p-0 bg-buffet second-image-borders">
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container fluid className="bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center">
                <h1 className='text-center fw-bold text-gradient font-very-big'>Empower Your Finances.<br />Master Your Future.</h1>
                <Container className="bg-light d-flex align-items-center justify-content-center flex-column p-5">
                    <Row className='w-100'>
                        <Col xs={12} md={6} className="d-flex flex-column align-items-start justify-content-center">
                            <p className='font-big fw-bold text-dark'>Earn 10% cashback on our platinum credit cards for a limited time only</p>
                            <Button className="bg-gradient rounded-pill fs-4 fw-bold px-5 py-2">Apply Now</Button>
                        </Col>
                        <Col xs={12} md={6} className="d-flex flex-column align-items-center justify-content-center">
                            <CreditCardSVG className='w-75' />
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
                <h1 className='text-center fw-bold text-gradient font-very-big mt-5'>Not Convinced?<br />See Our Client Testimonials</h1>
                <Container className="d-flex align-items-center justify-content-center flex-column p-5">
                    <Row className='w-100'>
                        <Col xs={12} md={6} className="d-flex flex-column align-items-start justify-content-center">
                            <img src={testimonial1} className="testimonial-img" />
                        </Col>
                        <Col xs={12} md={6} className="d-flex flex-column align-items-center justify-content-center">
                            <h3>"Apex Bank has truly exceeded my expectations. Their commitment to providing exceptional service and unwavering dedication to customer satisfaction is unmatched. From the moment I became a customer, I've experienced nothing but prompt and friendly assistance."<br /><span className='text-muted fs-5'>Ahmed Mohsen, Founder of Beatbox Co</span></h3>
                        </Col>

                        <Row className='d-flex flex-row mt-5'>
                            <Col xs={12} md={6} className="d-flex flex-column align-items-start justify-content-center">
                                <h3>"I am incredibly grateful for the financial guidance and support I have received from Apex Bank. Their team of knowledgeable professionals has been instrumental in helping me achieve my financial goals." <br /><span className='text-muted fs-5'>Ziad Zilzal, CEO of Spark Energies</span></h3>
                            </Col>

                            <Col xs={12} md={6} className="d-flex flex-column align-items-center justify-content-center">
                                <img src={testimonial2} className="testimonial-img" />
                            </Col>
                        </Row>

                    </Row>
                </Container>
            </Container>

            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="twitter" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="google" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="linkedin" />
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me-3" />
                                    APEX Bank
                                </h6>
                                <p>
                                © 2023 Apex Bank. All rights reserved. Member FDIC. Equal Housing Lender                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Online Banking</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Sign Up
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Log In
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Home
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Contact Us
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        About
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                    Banks Center, South 90th Street, New Cairo, Egypt.
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    info@apexeg.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3" /> + 20 100 507 9623
                                </p>
                                <p>
                                    <MDBIcon icon="print" className="me-3" /> + 03 422 60 37
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2021 Copyright:
                    <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                        APEX Bank
                    </a>
                </div>
            </MDBFooter>
        </>
    )
}

export default Home