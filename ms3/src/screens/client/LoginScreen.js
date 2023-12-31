import React, { useEffect } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import Navbar from '../../components/client/Navbar';
import Message from '../../components/client/Message';
import Footer from '../../components/client/Footer';
import ForgetPasswordModal from '../../components/client/ForgetPasswordModal';
import LoginScreenReader from '../../components/client/LoginScreenReader';

const logo = require('../../imgs/logo_transparent.png');

function App() {
  const [username, setUsername] = React.useState('');
  const [showModal, setShowModal] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [success, setSuccess] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'F10') {
        // set timeout for 10 seconds
        setTimeout(() => {
          // alert('10 seconds');
          window.location.href = 'http://localhost:3000/portal';
        }, 5000);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    // Handle form submission
    // You can perform any necessary logic here

    if (username === 'abdullah@yahoo.com' && password === 'pass1234') {
      window.history.pushState({}, '', '/portal');
      window.location.reload();
    } else {
      setSuccess(true);
      setMessage('Incorrect username or password');
      const timer = setTimeout(() => {
        setMessage('');
      }, 5000);
    }
  };

  return (
    <>
      <Navbar />
      {/* <LoginScreenReader /> */}

      <MDBContainer className="mb-5 gradient-form min-vh-100 d-flex justify-content-center">
        <MDBRow className="m-auto border-1 border-primary">
          <MDBCol col="6" className="mb-5">
            <ForgetPasswordModal show={showModal} onHide={handleCloseModal} />

            <div className="d-flex flex-column ms-5">
              {message && (
                <Message className="" variant="danger" showMessage={success} setShowMessage={setSuccess}>
                  {message}
                </Message>
              )}
              <div className="text-center">
                <img src={logo} style={{ width: '185px' }} alt="logo" />
                <h4 className="mt-1 mb-5 pb-1">Apex Bank</h4>
              </div>

              <p>Please login to your account</p>
              <p style={{fontSize: '0px'}}>Please press F10 to enable voice login, please say "email" followed by your email, and then "password" followed by your password</p>

              <label htmlFor="email">Email address</label>
              <MDBInput
                id="email"
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="omartamer@gmail.com"
                wrapperClass="mb-4"
                aria-label="Email address"
              />

              <label htmlFor="password">Password</label>
              <MDBInput
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                wrapperClass="mb-4"
                aria-label="Password"
              />

              <div className="text-center pt-1 mb-5 pb-1">
                <Button className="mb-4 w-100 gradient-custom-2" onClick={handleSubmit}>
                  Sign in
                </Button>
                <a onClick={handleOpenModal} className="text-muted" href="#!" aria-label="Forgot password">
                  Forgot password?
                </a>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Don't have an account?</p>
                <Button
                  outline
                  className="mx-2"
                  color="primary"
                  onClick={(e) => {
                    window.history.pushState({}, '', '/register');
                    window.location.reload();
                  }}
                >
                  Register
                </Button>
              </div>
            </div>
          </MDBCol>

          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">We are more than just a Bank</h4>
                <p className="small mb-0">
                  Welcome to our Banking App! Sign in to access your account and experience convenient banking services.
                  Your financial well-being is our priority.
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  );
}

export default App;
