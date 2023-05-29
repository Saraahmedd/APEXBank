import React, { useState } from 'react';
import ClientNavbar from '../../components/client/Navbar';
import { Accordion, Col, Container, Row, Table, Card, Button } from 'react-bootstrap';
import Footer from '../../components/client/Footer';
import cardpic from '../../imgs/cardpic.jpg';

const HomeScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefreshClick = () => {
    setIsRefreshing(true);

    // Simulate refreshing for a few seconds
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <>
      <div className="min-vh-100 d-flex flex-column">
        <ClientNavbar loggedIn={true} />

        <Container className='mt-5'>
          <Row>
            <Col md={9}>
              <Container fluid>
                <div className='d-flex w-100'>
                  <h3>Accounts Overview</h3>
                  <div className="flex-grow-1"></div>
                  <div className="d-flex flex-column align-items-end">
                    <h4 className="m-0 p-0">Net Position</h4>
                    <p className="m-0 p-0 fw-semibold text-success">513,763.81 USD</p>
                  </div>
                </div>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <table className='w-100'>
                        <thead>
                          <tr>
                            <th>Account Number</th>
                            <th>Account Type</th>
                            <th>Balance</th>
                            <th>Last Transaction</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>100041652181</td>
                            <td>Savings</td>
                            <td>214,550.50 USD</td>
                            <td>May 25, 2023</td>
                          </tr>
                        </tbody>
                      </table>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Transaction Date</th>
                            <th>Transaction Brief</th>
                            <th>Value</th>
                            <th>Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>25-05-2023</td>
                            <td>FT23145YHS41 - Talabat Cairo EG 526805 53180500000</td>
                            <td className="text-danger">-175.50 USD</td>
                            <td>214,550.50 USD</td>
                          </tr>
                          <tr>
                            <td>24-05-2023</td>
                            <td>FT23145GP244 - CAREEM TEMPORARY HOLD Giza EG NBE01</td>
                            <td className="text-danger">-34.00 USD</td>
                            <td>214,726.00 USD</td>
                          </tr>
                          <tr>
                            <td>21-05-2023</td>
                            <td>FT23145LCGKW - TRANSFER FROM CIB "PAYMENT"</td>
                            <td className="text-success">+5500.00 USD</td>
                            <td>214,760.00 USD</td>
                          </tr>
                        </tbody>
                      </Table>

                      <div className='d-flex w-100 align-items-end'>
                        <Button
                          variant="outline-primary"
                          onClick={() => {
                            window.location.href = "http://localhost:3000/bankaccount/transaction";
                          }}
                          className="rounded-pill ms-auto"
                          aria-label="View More Transactions"
                        >
                          View More
                        </Button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <table className='w-100'>
                        <thead>
                          <tr>
                            <th>Account Number</th>
                            <th>Account Type</th>
                            <th>Balance</th>
                            <th>Last Transaction</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>100041652184</td>
                            <td>Current</td>
                            <td>300,213.31 USD</td>
                            <td>May 13, 2023</td>
                          </tr>
                        </tbody>
                      </table>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Transaction Date</th>
                            <th>Transaction Brief</th>
                            <th>Value</th>
                            <th>Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>13-05-2023</td>
                            <td>FT67140KLC62 - Nike Cairo EG 526805 53180500000</td>
                            <td className="text-danger">-3750.00 USD</td>
                            <td>300,213.31 USD</td>
                          </tr>
                          <tr>
                            <td>12-05-2023</td>
                            <td>FT23545XK944 - CAREEM TEMPORARY HOLD Giza EG NBE01</td>
                            <td className="text-danger">-34.00 USD</td>
                            <td>303,963.31 USD</td>
                          </tr>
                          <tr>
                            <td>11-05-2023</td>
                            <td>FT23145LCGKW - TRANSFER FROM HSBC "PAYMENT"</td>
                            <td className="text-success">+5500.00 USD</td>
                            <td>303,997.31 USD</td>
                          </tr>
                        </tbody>
                      </Table>

                      <div className='d-flex w-100 align-items-end'>
                        <Button
                          variant="outline-primary"
                          onClick={() => {
                            window.location.href = "http://localhost:3000/bankAccount/transaction";
                          }}
                          className="rounded-pill ms-auto"
                          aria-label="View More Transactions"
                        >
                          View More
                        </Button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Button
                  variant={isRefreshing ? 'dark' : 'primary'}
                  className="mt-3 rounded-pill"
                  onClick={handleRefreshClick}
                  disabled={isRefreshing}
                  aria-label={isRefreshing ? 'Refreshing...' : 'Refresh Accounts'}
                >
                  {isRefreshing ? 'Refreshing...' : 'Refresh Accounts'}
                </Button>
              </Container>
            </Col>
            <Col md={3}>
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={cardpic} alt="Card" />
                <Card.Body>
                  <Card.Title>Unlock Your Rewards!</Card.Title>
                  <Card.Text>
                    Redeem your credit card points today and start enjoying exclusive benefits. Click 'Redeem Now' to access the credit card point redemption page.
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      window.location.href = "http://localhost:3000/creditcard";
                    }}
                    className="rounded-pill"
                    aria-label="Redeem Now"
                  >
                    Redeem Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <div className="flex-grow-1"></div>
        <Footer className="mt-3" />
      </div>
    </>
  );
};

export default HomeScreen;
