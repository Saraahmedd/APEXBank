import React, { useState, useEffect } from 'react';
import "../../styles/signUp.css";
import Footer from '../../components/client/Footer';
import Navbar from '../../components/client/Navbar';
import { Col, Container, Row } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap';
import Message from '../../components/client/Message';


const SignUpScreen = () => {
  const [activeForm, setActiveForm] = useState(1);
  const [message, setMessage] = React.useState("");
  const [success, setSuccess] = React.useState('');
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [routingNumber, setRoutingNumber] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [newsletterChecked, setNewsletterChecked] = useState(false);
  const [variant,setVariant] = useState("success");

  const handleNextForm = () => {
     if (activeForm === 1 && (!firstName || !lastName || !phoneNumber || !address)) {
      setSuccess(true)
      setMessage('Please fill in all fields.')
       setVariant("danger")
      return;
    }
    if (activeForm === 2 && (!username || !password || !password2 || !email)) {
       setSuccess(true)
      setMessage('Please fill in all fields.')
       setVariant("danger")
      return;
    }
    if (activeForm === 2 && (!email.includes("@") || !email.includes("."))) {
      setSuccess(true)
      setMessage('Please enter a valid email.')
        setVariant("danger")
      return;
    }
    if(activeForm === 2 && !(password === password2)) {
      setSuccess(true)
      setMessage('Passwords do not match.')
       setVariant("danger")
      return;
    }
    if (activeForm === 3 &&  ( (accountNumber && !routingNumber) || (!accountNumber && routingNumber)) ){
      setSuccess(true)
      setMessage('Please fill in all fields or none of them.')
       setVariant("danger")
      return;
    }
    if (activeForm === 4 && (!termsChecked || !privacyChecked)) {
       setSuccess(true)
       setVariant("danger")
      setMessage('Please agree to the terms and conditions and privacy policy.')
      return;
    }

    if (activeForm < 5){
      setActiveForm(activeForm + 1);
      setSuccess(false)
      setMessage("")
    }
    else {
      setSuccess(true)
      setVariant("success")
      setMessage('Account Created Successfuly. Redirecting you...')
      const timer = setTimeout(() => {
        setMessage("");
        window.location.replace("/portal")
      }, 5000);
    }

  };

  const handlePrevForm = () => {
    setActiveForm(activeForm - 1);
  };

  useEffect(() => {
    const ioniconsModuleScript = document.createElement('script');
    ioniconsModuleScript.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
    ioniconsModuleScript.type = 'module';
    document.body.appendChild(ioniconsModuleScript);

    const ioniconsScript = document.createElement('script');
    ioniconsScript.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
    ioniconsScript.setAttribute('nomodule', '');
    document.body.appendChild(ioniconsScript);

    return () => {
      document.body.removeChild(ioniconsModuleScript);
      document.body.removeChild(ioniconsScript);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        {message && <Message variant={variant} showMessage={success} setShowMessage={setSuccess}>
          {message}
        </Message>}
        <div className="form__container my-4">
          <div className="title__container">
            <h1>Register</h1>
            <p>Follow the 5 simple steps to create your profile</p>
          </div>
          <div className="body__container">
            <div className="left__container">
              <div className="side__titles">
                <div className="title__name">
                  <h3>Perosnal Info</h3>
                  <p>Enter & press next</p>
                </div>
                <div className="title__name">
                  <h3>Credentials</h3>
                  <p>Enter & press next</p>
                </div>
                <div className="title__name">
                  <h3>Link Existing Bank Account</h3>
                  <p>Enter & press next</p>
                </div>
                <div className="title__name">
                  <h3>User Agreement</h3>
                  <p>Select & press next</p>
                </div>
                <div className="title__name">
                  <h3>Complete</h3>
                  <p>Finally press submit</p>
                </div>
              </div>

              <div className="progress__bar__container">
                <ul>
                  <li className={activeForm === 1 ? "active" : ""} id="icon1">
                    <ion-icon name="person-outline"></ion-icon>
                  </li>
                  <li className={activeForm === 2 ? "active" : ""} id="icon2">
                    <ion-icon name="book-outline"></ion-icon>
                  </li>
                  <li className={activeForm === 3 ? "active" : ""} id="icon3">
                    <ion-icon name="layers-outline"></ion-icon>
                  </li>
                  <li className={activeForm === 4 ? "active" : ""} id="icon4">
                    <ion-icon name="pricetag-outline"></ion-icon>
                  </li>
                  <li className={activeForm === 5 ? "active" : ""} id="icon5">
                    <ion-icon name="mail-outline"></ion-icon>
                  </li>
                </ul>
              </div>
            </div>

            <Container className='d-flex flex-column' style={{ height: '50vh' }}>

              <Form id="form1" style={{ display: activeForm === 1 ? "block" : "none" }}>
                <p>
                  Step 1/5
                </p>
                <h3>
                  Personal Information
                </h3>
                <hr />
                <Row>
                  <Col lg={6}>
                    <Form.Group controlId="formFirstName">
                      <Form.Label>First Name *</Form.Label>
                      <Form.Control  onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Enter your first name" />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group controlId="formLastName">
                      <Form.Label>Last Name *</Form.Label>
                      <Form.Control type="text" onChange={(e) => setLastName(e.target.value)} placeholder="Enter your last name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <Form.Group controlId="formPhoneNumber">
                      <Form.Label>Phone Number *</Form.Label>
                      <Form.Control onChange={(e) => setPhoneNumber(e.target.value)} type="number" placeholder="Enter your phone number" />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group controlId="formAddress">
                      <Form.Label>Address *</Form.Label>
                      <Form.Control onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Enter your address" />
                    </Form.Group>
                  </Col>
                </Row>

                {/* <Button  variant="secondary" className='m-3' onClick={handlePrevForm}>
      Back
    </Button>
    <Button  className='m-3' onClick={handleNextForm}>
      Next
    </Button> */}
              </Form>

              {/* Rest of the forms */}



              <Form id="form2" style={{ display: activeForm === 2 ? "block" : "none" }}>

                <p>Step 2/5</p>
                <h2>Credentials</h2>
                <hr></hr>
                <Form.Group controlId="formUsername">
                  <Form.Label>Username *</Form.Label>
                  <Form.Control  onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter your username" />
                </Form.Group>
                <Form.Group controlId="formUsername">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password *</Form.Label>
                  <Form.Control  onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Confirm Password *</Form.Label>
                  <Form.Control  onChange={(e) => setPassword2(e.target.value)} type="password" placeholder="Enter your password" />
                </Form.Group>

                {/* <Button   variant="secondary" className='m-3' onClick={handlePrevForm}>Back</Button>
          <Button  className='m-3' onClick={handleNextForm}>Next</Button> */}

              </Form>

              <Form id="form3" style={{ display: activeForm === 3 ? "block" : "none" }}>

                <p>Step 3/5</p>
                <h2>Link existing bank account (Optional)</h2>
                <hr></hr>
                {/* <Form.Group controlId="formBankName">
                  <Form.Label>Bank Name *</Form.Label>
                  <Form.Control type="text" placeholder="Enter your bank name" />
                </Form.Group> */}
                <Form.Group controlId="formAccountNumber">
                  <Form.Label>  Account Number </Form.Label>
                  <Form.Control  onChange={(e) => setAccountNumber(e.target.value)} type="number" placeholder="Enter your account number" />
                </Form.Group>
                <Form.Group controlId="formRoutingNumber">
                  <Form.Label> Account PIN</Form.Label>
                  <Form.Control  onChange={(e) => setRoutingNumber(e.target.value)}  type="password" placeholder="Enter your account PIN" />
                </Form.Group>

                {/* <Button  variant="secondary" className='m-3' onClick={handlePrevForm}>Back</Button>
          <Button  className='m-3' id="submitBtn" onClick={handleNextForm}>Next</Button> */}

              </Form>

              <Form id="form3" style={{ display: activeForm === 4 ? "block" : "none" }}>

                <p>Step 4/5</p>
                <h2>User Agreement *</h2>
                <hr></hr>
                <Form.Group controlId="formTerms">
                  <Form.Check  onChange={(e) => setTermsChecked(e.target.checked)} type="checkbox" label="I agree to the terms and conditions" />
                </Form.Group>
                <Form.Group controlId="formPrivacy">
                  <Form.Check type="checkbox"  onChange={(e) => setPrivacyChecked(e.target.checked)} label="I agree to the privacy policy" />
                </Form.Group>

                {/* <Button   variant="secondary" className='m-3' onClick={handlePrevForm}>Back</Button>
          <Button  className='m-3' id="submitBtn" onClick={handleNextForm}>Next</Button> */}

              </Form>

              <Form id="form5" style={{ display: activeForm === 5 ? "block" : "none" }}>

                <p>Step 5/5</p>
                <h2>Complete Submission</h2>
                <hr></hr>

                <Form.Group controlId="formTerms">
                  <Form.Check type="checkbox" label="Subscribe to our newsletter and receive emails!" />
                </Form.Group>


                {/* <Button  className='m-3' variant="secondary" onClick={handlePrevForm}>Back</Button>
          <Button  className='m-3' id="submitBtn" onClick={handleNextForm}>Submit</Button> */}

              </Form>
              <div className='d-flex flex-column flex-fill'>
                <span className='flex-grow-1'></span>
                <Row className="justify-content-end" >
                  <Col xs="auto">
                    {activeForm > 1 &&
                      <Button className="rounded-pill m-1 px-4 fs-5" style={{ alignSelf: "flex-end" }} variant="secondary" onClick={handlePrevForm}>
                        Back
                      </Button>}
                  </Col>

                  <Col xs="auto">
                    <Button className="rounded-pill m-1 px-4 fs-5" style={{ alignSelf: "flex-end" }} onClick={handleNextForm}>
                      {activeForm === 5 ? "Submit" : "Next"}
                    </Button>
                  </Col>
                </Row>

              </div>

            </Container>
          </div>
        </div>

        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Container>
      <Footer />
    </>
  );
};

export default SignUpScreen;
