import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter
      bgColor="primary"
      className="text-center text-lg-start text-light pt-2">
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
        </div>
      </section>

      <div
        className="text-center p-4 "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://ApexBank.com/">
          ApexBank
        </a>
      </div>
    </MDBFooter>
  );
}
