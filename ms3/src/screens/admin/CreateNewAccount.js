import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import "../banker/styles/bankerLogin.css";
import Message from "../../components/client/Message";

export default function () {
  const navigate = useNavigate();
  const [warning, setWarning] = useState("");
  const [accountType, setAccountType] = useState("banker");
  const [bankerId, setBankerId] = useState("");
  const [department, setDepartment] = useState("");
  const [adminId, setAdminId] = useState("");
  const [success, setSuccess] = useState(false);

  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value);
  };

  const handleBankerIdChange = (e) => {
    setBankerId(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleAdminIdChange = (e) => {
    setAdminId(e.target.value);
  };

  const Submit = (e) => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // const bankerId = document.getElementById("bankerId").value;
    // const bankerDept = document.getElementById("bankerDept").value;
    // const adminId = document.getElementById("adminId").value;

    if (!email || !password) {
      setWarning("Missing fields! Please fill out the full form");
      setSuccess(false);
    } else {
      // Perform account creation logic based on the selected accountType
      if (accountType === "banker") {
        if (
          !document.getElementById("bankerId").value ||
          !document.getElementById("bankerDept").value
        ) {
          setWarning("Missing fields! Please fill out the full form");
          setSuccess(false);
        } else {
          setWarning("");
        }
      } else if (accountType === "admin") {
        if (!document.getElementById("adminId").value) {
          setWarning("Missing fields! Please fill out the full form");
          setSuccess(false);
        } else {
          setWarning("");
          setSuccess(true);
        }
      }
    }
  };

  return (
    <>
      <div className="Auth-form-container bg-light">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Create Account</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
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
            <div className="form-group mt-3">
              <label>Account Type:</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="accountType"
                  value="banker"
                  checked={accountType === "banker"}
                  onChange={handleAccountTypeChange}
                />
                <label className="form-check-label">Banker</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="accountType"
                  value="admin"
                  checked={accountType === "admin"}
                  onChange={handleAccountTypeChange}
                />
                <label className="form-check-label">Admin</label>
              </div>
            </div>
            {accountType === "banker" ? (
              <div>
                <div className="form-group mt-3">
                  <label>Banker ID</label>
                  <input
                    type="text"
                    id="bankerId"
                    className="form-control mt-1"
                    placeholder="Enter banker ID"
                    value={bankerId}
                    onChange={handleBankerIdChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Department</label>
                  <input
                    type="text"
                    id="bankerDept"
                    className="form-control mt-1"
                    placeholder="Enter department"
                    value={department}
                    onChange={handleDepartmentChange}
                  />
                </div>
              </div>
            ) : (
              <div className="form-group mt-3">
                <label>Admin ID</label>
                <input
                  type="text"
                  id="adminId"
                  className="form-control mt-1"
                  placeholder="Enter admin ID"
                  value={adminId}
                  onChange={handleAdminIdChange}
                />
              </div>
            )}
            <hr />
            {warning && (
              <div className="alert alert-danger" role="alert" id="warning">
                {warning}
              </div>
            )}
            {success && (
              <Message
                variant="success"
                children="Account successfully created!"
                showMessage={success}
                setShowMessage={setSuccess}
              ></Message>
            )}
            <div className="d-grid gap-2 mt-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={Submit}
              >
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
