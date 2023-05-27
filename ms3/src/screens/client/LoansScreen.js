import React, { useState } from 'react'
import { Accordion, Col, Container, Row, Table, Card, Button, Form, Modal } from 'react-bootstrap'
import '../../styles/Client.css';
import ClientNavbar from '../../components/client/Navbar';
import { ReactComponent as CreditCardSVG } from '../../imgs/credit_card.svg';
import testimonial1 from '../../imgs/testimonial_1.jpeg';
import testimonial2 from '../../imgs/testimonial_2.jpeg';
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import Footer from '../../components/client/Footer';
const LoansScreen = () => {

  const [loans, setLoans] = useState([
    {
      loanNumber: 1212,
      loanType: 'PERSONAL',
      loanTerm: '5 YEARS - 7.5%',
      loanedAmount: 600000,
      nextPaymentDate: '01/07/2023',
      startDate: '01/05/2023',
      endDate: '01/05/2028',
      amountPaid: 20000
    },
    {
      loanNumber: 1124,
      loanType: 'CAR',
      loanTerm: '3 YEARS - 6.5%',
      loanedAmount: 720000,
      nextPaymentDate: '01/07/2023',
      startDate: '01/03/2023',
      endDate: '01/03/2026',
      amountPaid: 80000
    },
    {
      loanNumber: 4112,
      loanType: 'PERSONAL',
      loanTerm: '3 YEARS - 6.5%',
      loanedAmount: 600000,
      nextPaymentDate: '01/07/2023',
      startDate: '01/03/2021',
      endDate: '01/03/2024',
      amountPaid: 461500
    }
  ]);

  const [bankAccounts, setBankAccounts] = useState(['100041652181', '100041652184']);
  return (
    <>
      <div className="min-vh-100 d-flex flex-column">
        <ClientNavbar loggedIn={true} />

        <Container className="my-5 d-flex flex-column rounded-5 px-3">

          <div className='d-flex flex-row align-items-center'>
            <h1 className="fw-bold font-big text-gradient">Your Loans</h1>
            <span className='flex-grow-1'></span>
            <Button variant="outline-primary rounded-pill px-5 h-50" onClick={(e) => { e.preventDefault(); window.location.href='http://localhost:3000/LoanApplication'; }}>Apply for a New Loan</Button>
          </div>

          <div className='d-flex flex-column'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Loan Number</th>
                  <th>Loan Type</th>
                  <th>Loan Term</th>
                  <th>Loaned Amount</th>
                  <th>Next Payment Date</th>
                  <th>Loan Start Date</th>
                  <th>Final Payment Date</th>
                  <th>Percentage Covered</th>
                  <th>View Loan Details</th>
                </tr>
              </thead>
              <tbody>
                {
                  loans.map((loan, index) => {
                    return (
                      <tr>
                        <td>{loan.loanNumber}</td>
                        <td>{loan.loanType}</td>
                        <td>{loan.loanTerm}</td>
                        <td>{loan.loanedAmount} EGP</td>
                        <td>{loan.nextPaymentDate} EGP</td>
                        <td>{loan.startDate}</td>
                        <td>{loan.endDate}</td>
                        <td>{(loan.amountPaid * 100 / loan.loanedAmount).toFixed(2)}%</td>
                        <td className='text-center'><ArrowRightCircleFill className='text-primary cursor-pointer' size={24} /></td>
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
    </>
  )
}

export default LoansScreen