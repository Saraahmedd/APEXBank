import React, { useState, useEffect } from 'react';
import "../../styles/signUp.css";
import Footer from '../../components/client/Footer';
import Navbar from '../../components/client/Navbar';
import {Container} from 'react-bootstrap'


const SignUpScreen = () => {
  const [activeForm, setActiveForm] = useState(1);

  const handleNextForm = () => {
    setActiveForm(activeForm + 1);
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
      <Container >
      <div className="form__container my-4">
        <div className="title__container">
          <h1>Register</h1>
          <p>Follow the 4 simple steps to create your profile</p>
        </div>
        <div className="body__container">
          <div className="left__container">
            <div className="side__titles">
              <div className="title__name">
                <h3>Your name</h3>
                <p>Enter & press next</p>
              </div>
              <div className="title__name">
                <h3>Desctibes</h3>
                <p>select & press next</p>
              </div>
              <div className="title__name">
                <h3>Services</h3>
                <p>select & press next</p>
              </div>
              <div className="title__name">
                <h3>Budget</h3>
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
          <div className="right__container">
            <fieldset id="form1" style={{ display: activeForm === 1 ? "block" : "none" }}>
              <div className="sub__title__container">
                <p>Step 1/5</p>
                <h2>Let's start with your name</h2>
                <p>Please fill the details below so that we can we can get in contact with you about our product</p>
              </div>
              <div className="input__container">
                <label htmlFor="name">Enter your name</label>
                <input type="text" />
                <a className="nxt__btn" onClick={handleNextForm}>Next</a>
              </div>
            </fieldset>
            <fieldset className={`active__form`} id="form2" style={{ display: activeForm === 2 ? "block" : "none" }}>
              <div className="sub__title__container">
                <p>Step 2/5</p>
                <h2>What best describes you?</h2>
                <p>Please let us know what type of business best describes you as an entrepreneur or businessman.</p>
              </div>
              <div className="input__container">
                <div className="selection newB">
                  <div className="imoji">
                    <ion-icon name="happy"></ion-icon>
                  </div>
                  <div className="descriptionTitle">
                    <h3>New Business</h3>
                    <p>Started trading in the last 12 months</p>
                  </div>
                </div>
                <div className="selection exitB">
                  <div className="imoji">
                    <ion-icon name="business"></ion-icon>
                  </div>
                  <div className="descriptionTitle">
                    <h3>Existing Business</h3>
                    <p>Have been operating beyond 12 months</p>
                  </div>
                </div>
                <div className="buttons">
                  <a className="prev__btn" onClick={handlePrevForm}>Back</a>
                  <a className="nxt__btn" onClick={handleNextForm}>Next</a>
                </div>
              </div>
            </fieldset>
            <fieldset className={`active__form`} id="form3" style={{ display: activeForm === 3 ? "block" : "none" }}>
              <div className="sub__title__container">
                <p>Step 3/5</p>
                <h2>What service are you looking for?</h2>
                <p>Please let us know what type of business best describes you as an entrepreneur or businessman.</p>
              </div>
              <div className="input__container">
                <div className="selection newB">
                  <div className="imoji">
                    <ion-icon name="desktop"></ion-icon>
                  </div>
                  <div className="descriptionTitle">
                    <h3>Website Development</h3>
                    <p>Development of online websites</p>
                  </div>
                </div>
                <div className="selection exitB">
                  <div className="imoji">
                    <ion-icon name="phone-portrait"></ion-icon>
                  </div>
                  <div className="descriptionTitle">
                    <h3>Development of Mobile App</h3>
                    <p>Development of Android and iOS mobile apps</p>
                  </div>
                </div>
                <div className="buttons">
                  <a className="prev__btn" onClick={handlePrevForm}>Back</a>
                  <a className="nxt__btn" onClick={handleNextForm}>Next</a>
                </div>
              </div>
            </fieldset>
            <fieldset className={`active__form`} id="form4" style={{ display: activeForm === 4 ? "block" : "none" }}>
              <div className="sub__title__container">
                <p>Step 4/5</p>
                <h2>Please select your budget</h2>
                <p>Please let us know the budget for your project so that we can give the right quote. Thanks!</p>
              </div>
              <div className="input__container">
                <input type="range" min="10000" max="500000" value="250000" className="slider" />
                <div className="output__value"></div>
                <div className="buttons">
                  <a className="prev__btn" onClick={handlePrevForm}>Back</a>
                  <a className="nxt__btn" onClick={handleNextForm}>Next</a>
                </div>
              </div>
            </fieldset>
            <fieldset className={`active__form`} id="form5" style={{ display: activeForm === 5 ? "block" : "none" }}>
              <div className="sub__title__container">
                <p>Step 5/5</p>
                <h2>Complete Submission</h2>
                <p>Thanks for completing the form and for your time. Please enter your email below and submit the form.</p>
              </div>
              <div className="input__container">
                <label htmlFor="Email">Enter your email</label>
                <input type="text" />
                <div className="buttons">
                  <a className="prev__btn" onClick={handlePrevForm}>Back</a>
                  <a className="nxt__btn" id="submitBtn" onClick={handleNextForm}>Next</a>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
     
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Container>
       <Footer/>
    </>
  );
};

export default SignUpScreen;
