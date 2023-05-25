import React from 'react'
import { Button, Container, Nav, NavDropdown, Navbar, Form, Row, Col } from 'react-bootstrap'
import '../../styles/Client.css';
import ClientNavbar from '../../components/client/RegisterForm/Navbar';
import buffet from '../../imgs/buffet.jpeg';
const Home = () => {
    return (
        <div>
            <ClientNavbar />

            <Container className="my-5 page-block d-flex rounded-5">
                <Row className="p-0 flex-fill">
                    <Col className="p-0 d-flex flex-col">
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
                    <Col className="p-0 bg-buffet second-image-borders">
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home