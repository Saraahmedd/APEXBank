import React, { useState } from 'react'
import { Accordion, Col, Container, Row, Table, Card, Button, Form, Modal } from 'react-bootstrap'
import '../../styles/Client.css';
import ClientNavbar from '../../components/client/Navbar';
import { ReactComponent as CreditCardSVG } from '../../imgs/credit_card.svg';
import testimonial1 from '../../imgs/testimonial_1.jpeg';
import testimonial2 from '../../imgs/testimonial_2.jpeg';
import { TelephoneFill, EnvelopeFill } from "react-bootstrap-icons";
import Footer from '../../components/client/Footer';
const About = () => {

    return (
        <>
            <div className="min-vh-100 d-flex flex-column">
                <ClientNavbar loggedIn={false} />

                <Container className="my-5 d-flex flex-column rounded-5 px-3">

                    <div className='d-flex flex-row align-items-center'>
                        <h1 className="fw-bold font-big text-gradient">About Our Bank</h1>
                    </div>

                    <div className='d-flex flex-column'>

                        <p>At Apex Bank, we believe in empowering our customers to achieve their financial goals with confidence. As a premier financial institution, we are dedicated to providing exceptional banking services and personalized solutions tailored to your unique needs.</p>

                        <p>With a strong foundation built on trust, integrity, and innovation, Apex Bank has been serving individuals, families, and businesses for over a decade. Our team of experienced professionals is committed to delivering excellence in every aspect of our banking services.</p>

                        <p>We understand that every customer is different, and that's why we offer a wide range of products and services to cater to your diverse financial requirements. Whether you're looking for a simple savings account, a mortgage for your dream home, or comprehensive wealth management solutions, we have you covered.</p>

                        <p>At Apex Bank, we prioritize your convenience and security. Our cutting-edge digital banking platform allows you to manage your accounts, make transactions, and access financial tools anytime, anywhere. Rest assured that your sensitive information is protected with the highest standards of security.</p>

                        <p>Beyond our commitment to delivering exceptional banking services, we also strive to make a positive impact on the communities we serve. Through various corporate social responsibility initiatives, we actively support local organizations and initiatives that foster education, environmental sustainability, and social well-being.</p>

                        <p>We value the relationships we have built with our customers, and we continuously strive to enhance your banking experience. Our friendly and knowledgeable customer service team is always ready to assist you and provide expert guidance on your financial journey.</p>

                        <p>Thank you for choosing <span class="text-gradient fw-bold">Apex Bank</span> as your trusted financial partner. We look forward to helping you navigate your financial future with confidence and success.</p>

                        <p>Welcome to <span class="text-gradient fw-bold">Apex Bank</span> – where your financial goals take center stage.</p>

                    </div>

                </Container>

                <span className='flex-grow-1'></span>
                <Footer />
            </div>

        </>
    )
}

export default About;