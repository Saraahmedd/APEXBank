import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./styles/UserDetails.css"; // Custom CSS file for additional styling
import CardComponent from "./CardComponent.js";

const UserDetails = ({ userID }) => {
  const basicInfoFields = [
    [
      { label: "First Name", value: "John" },
      { label: "Last Name", value: "Doe" },
      { label: "Email", value: "johndoe@example.com" },
      { label: "Phone", value: "123-456-7890" },
      { label: "Age", value: 30 },
      { label: "Username", value: "johndoe123" },
    ],
    [
      { label: "First Name", value: "Jessica" },
      { label: "Last Name", value: "Smith" },
      { label: "Email", value: "jessicasmith@example.com" },
      { label: "Phone", value: "123-456-7890" },
      { label: "Age", value: 25 },
      { label: "Username", value: "jessicasmith220" },
    ],
    [
      { label: "First Name", value: "Liam" },
      { label: "Last Name", value: "Taylor" },
      { label: "Email", value: "liamtaylor@example.com" },
      { label: "Phone", value: "123-456-7890" },
      { label: "Age", value: 27 },
      { label: "Username", value: "liamtaylor997" },
    ],
  ];

  const addressFields = [
    { label: "Address", value: "123 Main Street" },
    { label: "City", value: "New York City" },
  ];

  const bankAccounts = [
    [
      { label: "Account 1", value: "XXXX XXXX XXXX 0583" },
      { label: "Account 2", value: "XXXX XXXX XXXX 8936" },
    ],
    [{ label: "Account 1", value: "XXXX XXXX XXXX 7394" }],
    [{ label: "Account 1", value: "XXXX XXXX XXXX 9376" }],
  ];

  return (
    <div className="user-details" style={{ width: "100%" }}>
      <CardComponent
        title="Basic Information"
        data={basicInfoFields[userID]}
      ></CardComponent>

      <CardComponent
        title="Address Information"
        data={addressFields}
      ></CardComponent>

      <CardComponent
        title="Bank Accounts"
        data={bankAccounts[userID]}
      ></CardComponent>
    </div>
  );
};

export default UserDetails;
