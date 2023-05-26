import React from 'react'
import ClientNavbar from '../../components/client/Navbar'
import { Accordion, Col, Container, Row, Table } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <>
      <div className="min-vh-100">
        <ClientNavbar loggedIn={true} />

        <Container className='mt-5'>
          <Row>
            <Col md={9}>
              <Container fluid>
                <h3>Accounts</h3>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <table className='w-100'>
                        <tr>
                          <th>Account Number</th>
                          <th>Account Type</th>
                          <th>Balance</th>
                          <th>Last Transaction</th>
                        </tr>
                        <tr>
                          <td>100041652181</td>
                          <td>Savings</td>
                          <td>214,550.50 EGP</td>
                          <td>May 25, 2023</td>
                        </tr>
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
                            <td>25/05/2023</td>
                            <td>FT23145YHS41 - Talabat Cairo EG 526805 53180500000</td>
                            <td>-175.50 EGP</td>
                            <td>214,550.50 EGP</td>
                          </tr>
                          <tr>
                            <td>24/05/2023</td>
                            <td>FT23145GP244 - CAREEM TEMPORARY HOLD Giza EG NBE01</td>
                            <td>-34.00 EGP</td>
                            <td>214,726.00 EGP</td>
                          </tr>
                          <tr>
                            <td>21/05/2023</td>
                            <td>FT23145LCGKW - TRANSFER FROM CIB "PAYMENT"</td>
                            <td>+5500.00 EGP</td>
                            <td>214,760.00 EGP</td>
                          </tr>
                        </tbody>
                      </Table>

                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <table className='w-100'>
                        <tr>
                          <th>Account Number</th>
                          <th>Account Type</th>
                          <th>Balance</th>
                          <th>Last Transaction</th>
                        </tr>
                        <tr>
                          <td>100041652181</td>
                          <td>Current</td>
                          <td>300,213.31 EGP</td>
                          <td>May 13, 2023</td>
                        </tr>
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
                            <td>13/05/2023</td>
                            <td>FT67140KLC62 - Nike Cairo EG 526805 53180500000</td>
                            <td>-3750.00 EGP</td>
                            <td>300,213.31 EGP</td>
                          </tr>
                          <tr>
                            <td>12/05/2023</td>
                            <td>FT23545XK944 - CAREEM TEMPORARY HOLD Giza EG NBE01</td>
                            <td>-34.00 EGP</td>
                            <td>303,963.31 EGP</td>
                          </tr>
                          <tr>
                            <td>11/05/2023</td>
                            <td>FT23145LCGKW - TRANSFER FROM HSBC "PAYMENT"</td>
                            <td>+5500.00 EGP</td>
                            <td>303,997.31 EGP</td>
                          </tr>
                        </tbody>
                      </Table>

                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Container>
            </Col>
            <Col md={3}>
            </Col>
          </Row>
        </Container>

      </div>

    </>
  )
}

export default HomeScreen