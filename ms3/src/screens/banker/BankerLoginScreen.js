import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import "./styles/bankerLogin.css";

export default function () {
  const navigate = useNavigate();
  const [warning, setWarning] = useState("");
  const Submit = (e) => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email === "hazem" && password === "1234") {
      navigate("/banker/homescreen");
    } else if (email === "hazem") {
      setWarning("Incorrect email");
    } else if (password === "1234") {
      setWarning("Incorrect password");
    } else {
      setWarning("Incorrect password and email");
    }
    // e.preventDefault;
    // console.log("hey");
    // console.log(document.getElementById("email").value);
  };
  return (
    <>
      <div className="Auth-form-container bg-light">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            {warning && (
              <div className="alert alert-danger" role="alert">
                {warning}
              </div>
            )}
            <div className="form-group mt-3">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                id="email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                id="password"
              />
            </div>

            <div className="d-grid gap-2 mt-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={Submit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}
