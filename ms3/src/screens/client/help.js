import React, { useState } from 'react'
import ClientNavbar from '../../components/client/Navbar'
import { Accordion, Col, Container, Row, Table, Card, Button, Form } from 'react-bootstrap'
import Footer from '../../components/client/Footer'
import cardpic from '../../imgs/cardpic.jpg';

const Help = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [newMessage, setNewMessage] = useState();
    const [reply, setReply] = useState(false);
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
                                    <h3>Your Tickets</h3>
                                    <div className="flex-grow-1"></div>
                                </div>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <table className='w-100'>
                                                <tr>
                                                    <th>Ticket Number</th>
                                                    <th>Ticket Type</th>
                                                    <th>Last Replier</th>
                                                    <th>Last Reply Date</th>
                                                </tr>
                                                <tr>
                                                    <td>142 <span className='text-success'>(Resolved)</span></td>
                                                    <td>Technical Issue</td>
                                                    <td>System Admin</td>
                                                    <td>May 25, 2023</td>
                                                </tr>
                                            </table>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <span className='fw-bold text-success'>This issue has been resolved</span>
                                            <Table className='mt-2' striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>Reply Date</th>
                                                        <th>Reply</th>
                                                        <th>Sender</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>25-05-2023</td>
                                                        <td>Hi, we have resolved your issue. Please check your email for more details.</td>
                                                        <td>System Admin</td>
                                                    </tr>
                                                    <tr>
                                                        <td>20-05-2023</td>
                                                        <td>Hi, we have received your issue. We will get back to you as soon as possible.</td>
                                                        <td>System Admin</td>
                                                    </tr>
                                                    <tr>
                                                        <td>19-05-2023</td>
                                                        <td>Hi, I have an issue with adding bills. When I add a bill and click "Submit", it doesn't get added to my bills page except after 24 hours. Thanks</td>
                                                        <td>You</td>
                                                    </tr>
                                                </tbody>
                                            </Table>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <table className='w-100'>
                                                <tr>
                                                    <th>Ticket Number</th>
                                                    <th>Ticket Type</th>
                                                    <th>Last Replier</th>
                                                    <th>Last Reply Date</th>
                                                </tr>
                                                <tr>
                                                    <td>112 <span className='text-warning'>(Ticket Open)</span></td>
                                                    <td>Technical Issue</td>
                                                    <td>Ahmed Magdy</td>
                                                    <td>May 25, 2023</td>
                                                </tr>
                                            </table>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <span className='fw-bold text-warning'>This issue is still open</span>
                                            <Table className='mt-2' striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>Reply Date</th>
                                                        <th>Reply</th>
                                                        <th>Sender</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        newMessage && reply && (
                                                        <tr>
                                                            <td>{new Date().getDate()}-0{new Date().getMonth()}-{new Date().getFullYear()}</td>
                                                            <td>{newMessage}</td>
                                                            <td>You</td>
                                                        </tr>)
                                                    }
                                                    <tr>
                                                        <td>25-05-2023</td>
                                                        <td>Hi, we have escalated your issue to the appropriate department. Expect a reply within 1 week. Thank you for your patience.</td>
                                                        <td>Ahmed Magdy</td>
                                                    </tr>
                                                    <tr>
                                                        <td>20-05-2023</td>
                                                        <td>Hi, we have received your issue. We will get back to you as soon as possible.</td>
                                                        <td>Ahmed Magdy</td>
                                                    </tr>
                                                    <tr>
                                                        <td>19-05-2023</td>
                                                        <td>Hi, I have an issue with adding bills. When I add a bill and click "Submit", it doesn't get added to my bills page except after 24 hours. Thanks</td>
                                                        <td>You</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <div className="d-flex flex-row">
                                                <Form.Control type="input" onChange={(e) => setNewMessage(e.target.value)}></Form.Control>
                                                <Button className="rounded-pill ms-3 px-4" onClick={() => { setReply(true) }}>Reply</Button>
                                            </div>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                {/* <Button
                                    variant={isRefreshing ? 'dark' : 'primary'}
                                    className="mt-3 rounded-pill"
                                    onClick={handleRefreshClick}
                                    disabled={isRefreshing}
                                >
                                    {isRefreshing ? 'Refreshing...' : 'Refresh Accounts'}
                                </Button> */}
                            </Container>
                        </Col>
                        <Col md={3}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={cardpic} />
                                <Card.Body>
                                    <Card.Title>Unlock Your Rewards!</Card.Title>
                                    <Card.Text>
                                        Redeem your credit card points today and start enjoying exclusive benefits. Click 'Redeem Now' to access the credit card point redemption page.                  </Card.Text>
                                    <Button variant="primary" onClick={() => { window.location.href = "http://localhost:3000/creditcard" }} className="rounded-pill">Redeem Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>


                <div className="flex-grow-1"></div>
                <Footer className="mt-3" />
            </div>

        </>
    )
}

export default Help