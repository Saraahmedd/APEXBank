import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
const logo = require('../../imgs/lightLogo.png')
function App() {
  return (
   <MDBContainer className="my-5 gradient-form min-vh-100 d-flex align-items-center justify-content-center">

      <MDBRow className='m-auto'>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src={logo}
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">Blue Horizon Bank</h4>
            </div>

            <p>Please login to your account</p>


           <label htmlFor="form1">Email address</label>
<MDBInput wrapperClass="mb-4" id="form1" type="email" />

<label htmlFor="form2">Password</label>
<MDBInput wrapperClass="mb-4" id="form2" type="password" />


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
              <a className="text-muted" href="#!">Forgot password?</a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <Button outline className='mx-2' color='primary' onClick={(e) =>  {window.history.pushState({},"","/register")
              window.location.reload();}
            }>
                Register
              </Button>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a Bank</h4>
              <p class="small mb-0">Welcome to our Banking App!
              Sign in to access your account and experience convenient banking services. Your financial well-being is our priority.
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;