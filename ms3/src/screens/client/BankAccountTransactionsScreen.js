import React from 'react';
import { Card, Col, Pagination, Row, Table } from 'react-bootstrap';
import { MDBIcon, MDBPagination } from 'mdbreact';
import Navbar from '../../components/client/Navbar'
import { Line } from 'react-chartjs-2';
import Footer from '../../components/client/Footer';
import { MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

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
  {
    id: 1,
    referenceNumber: '#123456789',
    date: '2022-05-30',
    description: 'Payment for goods',
    amount: 100.0,
    from: 'My Bank Account',
    to: 'Online Store',
    type: 'Purchase',
    status: 'Completed',
    comments: 'Transaction successful'
  },
  {
    id: 2,
    referenceNumber: '#987654321',
    date: '2022-06-01',
    description: 'Salary payment',
    amount: 5000.0,
    from: 'ABC Company',
    to: 'My Bank Account',
    type: 'Income',
    status: 'Pending',
    comments: 'Awaiting approval'
  },
  {
    id: 3,
    referenceNumber: '#456789012',
    date: '2022-06-02',
    description: 'Payment for services',
    amount: 250.0,
    from: 'Client X',
    to: 'My Bank Account',
    type: 'Income',
    status: 'Completed',
    comments: 'Transaction successful'
  },
  {
    id: 4,
    referenceNumber: '#890123456',
    date: '2022-06-05',
    description: 'Payment for rent',
    amount: 800.0,
    from: 'My Bank Account',
    to: 'Landlord Y',
    type: 'Expense',
    status: 'Completed',
    comments: 'Transaction successful'
  },
  {
    id: 5,
    referenceNumber: '#234567890',
    date: '2022-06-07',
    description: 'Payment for subscription',
    amount: 50.0,
    from: 'My Bank Account',
    to: 'Online Service',
    type: 'Purchase',
    status: 'Pending',
    comments: 'Awaiting approval'
  },
  {
    id: 6,
    referenceNumber: '#678901234',
    date: '2022-06-10',
    description: 'Payment for services',
    amount: 300.0,
    from: 'Client Z',
    to: 'My Bank Account',
    type: 'Income',
    status: 'Completed',
    comments: 'Transaction successful'
  },
  {
    id: 7,
    referenceNumber: '#345678901',
    date: '2022-06-12',
    description: 'Payment for goods',
    amount: 75.0,
    from: 'My Bank Account',
    to: 'Online Store',
    type: 'Purchase',
    status: 'Completed',
    comments: 'Transaction successful'
  }
]

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
      <Navbar  loggedIn={true} />
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
          <MDBIcon icon="user-circle" className="me-2" />
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
          <MDBIcon icon="wallet" className="me-2" />
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
          <MDBIcon icon="dollar-sign" className="me-2" />
         <b> Currency: </b> <br/>  Dollar
        </div>
        <div style={{textAlign:"left"}} >
          <MDBIcon icon="circle" className="me-2 " />
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
            <th>From</th>
            <th>To</th>
            <th>Type</th>
            <th>Status</th>
            <th>Comments</th>
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
              <td>{transaction.from}</td>
              <td>{transaction.to}</td>
              <td>{transaction.type}</td>
              <td>{transaction.status}</td>
              <td>{transaction.comments}</td>
            </tr>
          ))}
        </tbody>

      </Table>
           <MDBPagination className='mb-0 justify-content-center'>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>Previous</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>1</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>2</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>3</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>Next</MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
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
