import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./styles/UserDetails.css";
import CardComponent from "./CardComponent.js";
import BankCardComponent from "./bankCardComponent.js";

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
      {
        label: "Account 1",
        value: "1426 3784 5263 0583",
      },
      {
        label: "Account 2",
        value: "9495 52637 1497 8936",
      },
    ],
    [
      {
        label: "Account 1",
        value: "6472 8596 7495 7394",
      },
    ],
    [
      {
        label: "Account 1",
        value: "7349 6372 6378 9376",
      },
    ],
  ];

  return (
    <div className=" col-12" style={{ width: "100%" }}>
      <CardComponent
        title="Basic Information"
        data={basicInfoFields[userID]}></CardComponent>

      <CardComponent
        title="Address Information"
        data={addressFields}></CardComponent>

      <BankCardComponent
        title="Bank Accounts"
        data={bankAccounts[userID]}></BankCardComponent>
    </div>
  );
};

export default UserDetails;
