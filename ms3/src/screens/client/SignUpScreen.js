import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PersonalInfoStep from '../../components/client/RegisterForm/PersonalInfoStep';
import PersonalDocsStep from '../../components/client/RegisterForm/PerosnalDocumets';
import LinkBankAccountStep from '../../components/client/RegisterForm/LinkBankAccountStep';
import TermsAndServicesStep from '../../components/client/RegisterForm/TermsAndServicesStep';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

import Header from '../../components/client/Header';

const RegistrationForm = () => {
  const [step, setStep] = React.useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfoStep onNextStep={handleNextStep} />;
      case 2:
        return <PersonalDocsStep onNextStep={handleNextStep} />;
      case 3:
        return <LinkBankAccountStep onNextStep={handleNextStep} />;
      case 4:
        return <TermsAndServicesStep onNextStep={handleNextStep} />;
      default:
        return <PersonalInfoStep onNextStep={handleNextStep} />;
    }
  };

  return (
    <>
    <Header />
  <MDBContainer className="my-5 min-vh-100 d-flex align-items-center justify-content-center" style={{ maxWidth: "55%" }}>
  <MDBRow className='m-auto'>
    <MDBCol col='8'>
     <MDBCard className='my-5 cascading-right' style={{ background: 'linear-gradient(135deg, #eeeeee 0%, #eeeeee 100%)', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', height: '550px', width: '500px' }}>
  <MDBCol md={{ span: 6, offset: 3 }} className="d-flex flex-column align-items-center py-5">
    {renderStep()}

    { (
      <Button className='mt-4 btn-lg btn-primary' size='lg' onClick={handleNextStep}>{step !== 4 ? "Next": "Register"}</Button>
    )}
  </MDBCol>
</MDBCard>

    </MDBCol>
  </MDBRow>
</MDBContainer>
</>

  );
};

export default RegistrationForm;
