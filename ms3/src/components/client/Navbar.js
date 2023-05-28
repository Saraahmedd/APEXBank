import React from "react";
import { Button, Container, Row, Col, Nav, NavDropdown, Navbar, Form, OverlayTrigger, Popover } from 'react-bootstrap'
import '../../styles/Client.css';
import { BellFill, PersonCircle } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.png';

const ClientNavbar = ({ loggedIn = false }) => {
    const popover = (
        <Popover id="popover-basic" className="rounded-0">
            <Popover.Header as="h3">Notifications</Popover.Header>
            <Popover.Body className="p-0 rounded-0">
                <ul className="list-group rounded-0 border-0">
                    <li className="list-group-item">
                        <span className="fw-bold">Announcement</span><br />
                        Exciting news! Update our mobile banking app for a better, more secure experience. Discover new features and enhanced functionality today.<br />
                        <span className="text-muted">26/05/2023</span>
                    </li>
                    <li className="list-group-item">
                        <span className="fw-bold">Transaction</span><br />
                        Spent 175.50 EGP at Talabat Cairo EG<br />
                        <span className="text-muted">25/05/2023</span>
                    </li>
                    <li className="list-group-item">
                        <span className="fw-bold">Reminder</span><br />
                        Loan Payment for loan #32123 due in 1 week<br />
                        <span className="text-muted">22/05/2023</span>
                    </li>
                </ul>
            </Popover.Body>
        </Popover>
    );

    return (
        <>
            <Container fluid className="border-bottom border-dark-subtle">
                <div onClick={() => { window.open('https://apps.apple.com/eg/app/apex-bank/id1128362996') }} className="downloadApp cursor-pointer d-flex flex-row align-items-center justify-content-center">
                    <p className="m-0 text-primary">Download the APEX Banking App</p>
                    <p className="m-0 ms-3 fw-bold text-primary">Get the App</p>
                </div>
            </Container>
            <Navbar bg="white" expand="lg" className="border-bottom border-light client-navbar">
                <Container>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-flex flex-fill align-items-center">
                            <div className="d-flex flex-row" style={{flex: 1}}>
                                <Link to="/" className="text-decoration-none"><Nav.Link href="#home" className="fw-semibold fs-5 text-primary">Home</Nav.Link></Link>
                                <Link to="/about" className="text-decoration-none"><Nav.Link href="#link" className="fw-semibold fs-5 text-primary">About</Nav.Link></Link>
                                <Link to="/contact" className="text-decoration-none"><Nav.Link href="#link" className="fw-semibold fs-5 text-primary">Contact</Nav.Link></Link>
                            </div>
                            <div className='d-flex' style={{textAlign: 'center'}}>

                                <Navbar.Brand href="/">

                                    <img
                                        alt=""
                                        src={logo}
                                        height="50"
                                        className="d-inline-block align-top"
                                    />

                                </Navbar.Brand>

                            </div>
                            <div className='d-flex flex-row justify-content-end align-items-center' style={{flex: 1}}>
                                {!loggedIn &&
                                    <>
                                        <Button variant="outline-primary" className="px-4 rounded-pill">Log In</Button>
                                        <Button variant="primary" className="ms-lg-2 mt-2 mt-lg-0 px-4 rounded-pill">Sign Up</Button>
                                    </>
                                }
                                {loggedIn &&
                                    <>
                                        {/* <p className="fw-semibold fs-6 m-0 p-0">Logged in as Omar</p> */}
                                        <Link to="/bankaccounts" className="text-decoration-none"><Nav.Link href="#home" className="fw-semibold fs-5 text-primary">My Accounts</Nav.Link></Link>
                                        <Link to="/bills" className="text-decoration-none"><Nav.Link href="#home" className="fw-semibold fs-5 text-primary">Bills</Nav.Link></Link>
                                        <Link to="/loans" className="text-decoration-none"><Nav.Link href="#home" className="fw-semibold fs-5 text-primary">Loans</Nav.Link></Link>
                                        <Link to="/creditcard" className="text-decoration-none"><Nav.Link href="#home" className="fw-semibold fs-5 text-primary">Credit Cards</Nav.Link></Link>
                                        <Link to="/portal" className="text-decoration-none"><PersonCircle className="ms-3" size={36} /></Link>

                                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                            <BellFill className="text-warning ms-3 cursor-pointer" size={24} />
                                        </OverlayTrigger>
                                    </>}
                            </div>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default ClientNavbar;