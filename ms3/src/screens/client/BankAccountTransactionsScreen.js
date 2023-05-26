import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';
import Navbar from '../../components/client/Navbar'
import { Line } from 'react-chartjs-2';
import Footer from '../../components/client/Footer';

const SingleAccountScreen = () => {
  // Dummy data for the bank account
  const account = {
    accountNumber: '1234567890',
    type: 'Savings Account',
    name: 'John Doe',
    balance: 5000,
    interestRate: '2.5%',
    lastUpdated: '2023-05-01',
  };

  // Dummy data for transactions
  const transactions = [
    { id: 1, date: '2023-01-01', description: 'Groceries', amount: -100,to:"30219" },
    { id: 2, date: '2023-01-05', description: 'Salary', amount: 2000,to:"10302" },
    { id: 3, date: '2023-01-15', description: 'Rent', amount: -800,to:"103" },
    // ... add more dummy transactions
  ];

  // Dummy data for the line chart
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Total Expenses',
        data: [500, 700, 600, 800, 400, 900, 750, 650, 850, 700, 600, 1000],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.4)',
      },
    ],
  };

  return (
    <div className="text-center">
      <Navbar />
      <div className="container mt-5">
        <h2>Bank Account Details</h2>
        <Card>
  <Card.Body className=" justify-content-space-between align-items-center" >
    <div>
      <Card.Title className='justify-content-center'>Basic Details</Card.Title>
      <Row className='justify-content-center' >
        <Col lg={3} className=''>
      <div className="d-flex flex-column " >
        <div className="mb-2 text-left" style={{textAlign:"left"}} >
          <MDBIcon icon="university" className="me-2" />
         <b> Account Number: </b> <br/> {account.accountNumber}
        </div>
        <div className="mb-2" style={{textAlign:"left"}} >
          <MDBIcon icon="wallet" className="me-2" />
         <b>Type:</b>  <br/>  {account.type}
        </div>
        </div>
        </Col>
        <Col lg={3}>
        <div className="d-flex flex-column">
        <div className="mb-2" style={{textAlign:"left"}} >
          <MDBIcon icon="user" className="me-2" />
          <b>  Name:</b> <br/>  {account.name}
        </div>
        <div className="mb-2" style={{textAlign:"left"}} >
          <MDBIcon icon="balance-scale" className="me-2" />
         <b> Balance: </b>  <br/>  ${account.balance}
        </div>
        </div>
        </Col>
        <Col lg={3}>
        <div className="d-flex flex-column">
        <div className="mb-2" style={{textAlign:"left"}} >
          <MDBIcon icon="percentage" className="me-2" />
         <b> Interest Rate: </b> <br/>  {account.interestRate}
        </div>
        <div style={{textAlign:"left"}} >
          <MDBIcon icon="calendar-alt" className="me-2" />
         <b> Last Updated: </b> <br/>  {account.lastUpdated}
        </div>
      </div>
      </Col>
      <Col lg={3}>
        <div className="d-flex flex-column">
        <div className="mb-2" style={{textAlign:"left"}} >
          <MDBIcon icon="percentage" className="me-2" />
         <b> Currency: </b> <br/>  EGP
        </div>
        <div style={{textAlign:"left"}} >
          <MDBIcon icon="calendar-alt" className="me-2 " />
        <b>  Status: </b><br/>  active
        </div>
      </div>
      </Col>
      </Row>
    </div>
    {/* <div>
      <MDBIcon icon="credit-card" size="3x" />
    </div> */}
  </Card.Body>
</Card>


        <div className="mt-5">
          <h4>Transactions</h4>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Reference Number</th>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>to</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.id}</td>
                  <td>{transaction.referenceNumber}</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.to}</td>
                  <td>{transaction.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div className="mt-5 mb-5">
          <h4>Total Expenses per Month</h4>
          <Line data={chartData} />
        </div>
      </div>
      
       <Footer />
    </div>
  );
};

export default SingleAccountScreen;
