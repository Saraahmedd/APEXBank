import React from "react";
import { Button, Container, Nav, NavDropdown, Navbar, Form } from 'react-bootstrap'
import '../../styles/Client.css';

const ClientNavbar = () => {
    return (
        <>
            <Container fluid className="border-bottom border-dark-subtle">
                <div className="downloadApp d-flex flex-row align-items-center justify-content-center">
                    <p className="m-0 text-primary">Download the APEX Banking App</p>
                    <p className="m-0 ms-3 fw-bold text-primary">Get the App</p>
                </div>
            </Container>
            <Navbar bg="white" expand="lg" className="border-bottom border-light client-navbar">
                <Container>
                    <Navbar.Brand href="#home" className="fw-semibold fs-3">Apex Banking</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-flex flex-fill">
                            <Nav.Link href="#home" className="fw-semibold fs-5 text-primary">Home</Nav.Link>
                            <Nav.Link href="#link" className="fw-semibold fs-5 text-primary">About</Nav.Link>
                            <Nav.Link href="#link" className="fw-semibold fs-5 text-primary">Contact</Nav.Link>
                            <div className='flex-fill'></div>
                            <Button variant="outline-primary" className="px-4 rounded-pill">Log In</Button>
                            <Button variant="primary" className="ms-lg-2 mt-2 mt-lg-0 px-4 rounded-pill">Sign Up</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default ClientNavbar;