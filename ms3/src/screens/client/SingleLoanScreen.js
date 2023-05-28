import React, { useState } from 'react'
import { Accordion, Col, Container, Row, Table, Card, Button, Form, Modal } from 'react-bootstrap'
import '../../styles/Client.css';
import ClientNavbar from '../../components/client/Navbar';
import { ReactComponent as CreditCardSVG } from '../../imgs/credit_card.svg';
import testimonial1 from '../../imgs/testimonial_1.jpeg';
import testimonial2 from '../../imgs/testimonial_2.jpeg';
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import Footer from '../../components/client/Footer';
import { useLocation } from 'react-router-dom';


const SingleLoanScreen = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    // Access specific query string parameters
    const loanNumber = queryParams.get('id');

    const [loans, setLoans] = useState([
        {
            loanNumber: 1212,
            loanType: 'PERSONAL',
            loanTerm: '5 YEARS - 7.5%',
            loanedAmount: 600000,
            nextPaymentDate: '01-07-2023',
            startDate: '01-05-2023',
            endDate: '01-05-2028',
            amountPaid: 20000
        },
        {
            loanNumber: 1124,
            loanType: 'CAR',
            loanTerm: '3 YEARS - 6.5%',
            loanedAmount: 720000,
            nextPaymentDate: '01-07-2023',
            startDate: '01-03-2023',
            endDate: '01-03-2026',
            amountPaid: 80000
        },
        {
            loanNumber: 4112,
            loanType: 'PERSONAL',
            loanTerm: '3 YEARS - 6.5%',
            loanedAmount: 600000,
            nextPaymentDate: '01-07-2023',
            startDate: '01-03-2021',
            endDate: '01-03-2024',
            amountPaid: 461500
        }
    ]);

    const [payments, setPayments] = useState([
        {
            paymentId: 7890,
            paymentDate: '01-01-2023',
            paidAmount: 10000,
            status: 'PAID',
        },
        {
            paymentId: 6789,
            paymentDate: '01-02-2023',
            paidAmount: 10000,
            status: 'PAID',
        },
        {
            paymentId: 5678,
            paymentDate: '01-03-2023',
            paidAmount: 10000,
            status: 'PAID',
        },
        {
            paymentId: 4567,
            paymentDate: '01-04-2023',
            paidAmount: 10000,
            status: 'PAID',
        },
        {
            paymentId: 3456,
            paymentDate: '01-05-2023',
            paidAmount: 10000,
            status: 'PAID',
        },
        {
            paymentId: 2134,
            paymentDate: '01-06-2023',
            paidAmount: 10000,
            status: 'PAID',
        },
        {
            paymentId: 2345,
            paymentDate: '01-07-2023',
            paidAmount: 10000,
            status: 'AWAITING PAYMENT',
        }
    ]);

    const [bankAccounts, setBankAccounts] = useState(['100041652181', '100041652184']);
    return (
        <>
            <div className="min-vh-100 d-flex flex-column">
                <ClientNavbar loggedIn={true} />

                <Container className="my-5 d-flex flex-column rounded-5 px-3">

                    <div className='d-flex flex-row align-items-center'>
                        <h1 className="fw-bold font-big text-gradient">My Loan</h1>
                        <span className='flex-grow-1'></span>
                        <Button variant="outline-primary rounded-pill px-5 h-50" onClick={(e) => { e.preventDefault(); window.location.href = 'http://localhost:3000/LoanApplication'; }}>Apply for a New Loan</Button>
                    </div>

                    <Row>
                        <Col md={8}>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Payment ID</th>
                                        <th>Payment Due Date</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        payments.reverse().map((payment, index) => {
                                            return (
                                                <tr>
                                                    <td>{payment.paymentId}</td>
                                                    <td>{payment.paymentDate}</td>
                                                    <td>{payment.paidAmount} EGP</td>
                                                    <td>{payment.status}</td>
                                                </tr>
                                            );
                                        })
                                    }

                                </tbody>
                            </Table>
                        </Col>

                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Loan Details</Card.Title>
                                    <Card.Text>
                                        <ul class="list-group">
                                            <li class="list-group-item"><span className='fw-bold'>Loan Number: </span>{(loans.filter(loan => loan.loanNumber == loanNumber)[0]).loanNumber}</li>
                                            <li class="list-group-item"><span className='fw-bold'>Loan Type: </span>{(loans.filter(loan => loan.loanNumber == loanNumber)[0]).loanType}</li>
                                            <li class="list-group-item"><span className='fw-bold'>Loan Term: </span>{(loans.filter(loan => loan.loanNumber == loanNumber)[0]).loanTerm}</li>
                                            <li class="list-group-item"><span className='fw-bold'>Loaned Amount: </span>{(loans.filter(loan => loan.loanNumber == loanNumber)[0]).loanedAmount}</li>
                                            <li class="list-group-item"><span className='fw-bold'>Next Payment Date: </span>{(loans.filter(loan => loan.loanNumber == loanNumber)[0]).nextPaymentDate}</li>
                                            <li class="list-group-item"><span className='fw-bold'>Loan Start Date: </span>{(loans.filter(loan => loan.loanNumber == loanNumber)[0]).startDate}</li>
                                            <li class="list-group-item"><span className='fw-bold'>Loan Fullifilment Date: </span>{(loans.filter(loan => loan.loanNumber == loanNumber)[0]).endDate}</li>
                                            <li class="list-group-item"><span className='fw-bold'>Remaining Amount: </span>{(loans.filter(loan => loan.loanNumber == loanNumber)[0]).amountPaid}</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                </Container>

                <span className='flex-grow-1'></span>
                <Footer />
            </div>
        </>
    )
}

export default SingleLoanScreen