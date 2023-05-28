import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";

const Footer = ({ className }) => {
  return (
    <MDBFooter
      bgColor="light"
      className={"text-center text-lg-start text-muted " + className}>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                APEX Bank
              </h6>
              <p>
                © 2023 Apex Bank. All rights reserved. Member FDIC. Equal
                Housing Lender{" "}
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Online Banking</h6>
              <p>
                <a href="#!" className="text-reset">
                  Sign Up
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Log In
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  About
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Banks Center, South 90th Street, New Cairo, Egypt.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@apexeg.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 20 100 507 9623
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 03 422 60 37
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2021 Copyright:
        <a className="text-reset fw-bold ms-2" href="https://mdbootstrap.com/">
          APEX Bank
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
