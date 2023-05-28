import React from "react";
import {
  Button,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import "../../styles/Client.css";
import ClientNavbar from "../../components/client/Navbar";
import { ReactComponent as CreditCardSVG } from "../../imgs/credit_card.svg";
import testimonial1 from "../../imgs/testimonial_1.jpeg";
import testimonial2 from "../../imgs/testimonial_2.jpeg";
import {
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import Footer from "../../components/client/Footer";
const Home = () => {
  return (
    <>
      <div className="min-vh-100">
        <ClientNavbar loggedIn={false} />

        <Container className="my-5 d-flex flex-column rounded-5 px-3">
          <h1 className="fw-bold font-very-big text-gradient">
            Hassle-free banking for all.
          </h1>
          <Row className="p-0 mt-5 banner">
            <Col
              xs={12}
              md={6}
              order={2}
              order-md={1}
              className="p-0 d-flex flex-col">
              <div className="bg-gradient flex-fill first-image-borders p-5 justify-content-center d-flex flex-column">
                <h1 className="text-white fw-bold font-big">
                  Unlock Financial Flexibility: Enjoy 0% APR on Select Banking
                  Services.
                </h1>
                <p className="text-light fw-semibold mt-4">
                  Take control of your financial journey with our exclusive
                  offer. Enjoy 0% APR on qualifying banking services, empowering
                  you to manage your finances with ease and peace of mind.
                </p>
                <Button
                  variant="light"
                  className="rounded-pill get-started-btn px-5">
                  <span className="fw-bold fs-5 text-gradient">
                    Get Started Now
                  </span>
                </Button>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              order={1}
              order-md={2}
              className="p-0 bg-buffet second-image-borders"></Col>
          </Row>
        </Container>
      </div>
      <Container
        fluid
        className="bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center fw-bold text-gradient font-very-big">
          Empower Your Finances.
          <br />
          Master Your Future.
        </h1>
        <Container className="bg-light d-flex align-items-center justify-content-center flex-column p-5">
          <Row className="w-100">
            <Col
              xs={12}
              md={6}
              className="d-flex flex-column align-items-start justify-content-center">
              <p className="font-big fw-bold text-dark">
                Earn 10% cashback on our platinum credit cards for a limited
                time only
              </p>
              <Button className="bg-gradient rounded-pill fs-4 fw-bold px-5 py-2">
                Apply Now
              </Button>
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex flex-column align-items-center justify-content-center">
              <CreditCardSVG className="w-75" />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container
        fluid
        className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center fw-bold text-gradient font-very-big mt-5">
          Not Convinced?
          <br />
          See Our Client Testimonials
        </h1>
        <Container className="d-flex align-items-center justify-content-center flex-column p-5">
          <Row className="w-100">
            <Col
              xs={12}
              md={6}
              className="d-flex flex-column align-items-start justify-content-center">
              <img src={testimonial1} className="testimonial-img" />
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex flex-column align-items-center justify-content-center">
              <h3>
                "Apex Bank has truly exceeded my expectations. Their commitment
                to providing exceptional service and unwavering dedication to
                customer satisfaction is unmatched. From the moment I became a
                customer, I've experienced nothing but prompt and friendly
                assistance."
                <br />
                <span className="text-muted fs-5">
                  Ahmed Mohsen, Founder of Beatbox Co
                </span>
              </h3>
            </Col>

            <Row className="d-flex flex-row mt-5">
              <Col
                xs={12}
                md={6}
                className="d-flex flex-column align-items-start justify-content-center">
                <h3>
                  "I am incredibly grateful for the financial guidance and
                  support I have received from Apex Bank. Their team of
                  knowledgeable professionals has been instrumental in helping
                  me achieve my financial goals." <br />
                  <span className="text-muted fs-5">
                    Ziad Zilzal, CEO of Spark Energies
                  </span>
                </h3>
              </Col>

              <Col
                xs={12}
                md={6}
                className="d-flex flex-column align-items-center justify-content-center">
                <img src={testimonial2} className="testimonial-img" />
              </Col>
            </Row>
          </Row>
        </Container>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
