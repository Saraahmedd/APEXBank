import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./styles/UserDetails.css"; // Custom CSS file for additional styling
import CardComponent from "./CardComponent.js";

const UserDetails = () => {
  const basicInfoFields = [
    { label: "Full Name", value: "John Doe" },
    { label: "Email", value: "johndoe@example.com" },
    { label: "Phone", value: "123-456-7890" },
    { label: "Age", value: 30 },
    { label: "Username", value: "johndoe123" },
    { label: "Marital Status", value: "single" },
  ];

  const addressFields = [
    { label: "Address", value: "123 Main Street" },
    { label: "City", value: "New York City" },
  ];

  const renderFields = (fields) => {
    const rows = [];
    for (let i = 0; i < fields.length; i += 3) {
      const rowFields = fields.slice(i, i + 3);
      const row = (
        <Row key={i} className="m-2">
          {rowFields.map((field, index) => (
            <Col key={index} sm={4}>
              <div className="field-label">
                <strong>{field.label}:</strong>
              </div>
              <div className="field-value">{field.value}</div>
            </Col>
          ))}
        </Row>
      );
      rows.push(row);
    }
    return rows;
  };

  return (
    <div className="user-details">
      <Card className="mb-3 user-card">
        <Card.Header className="card-header">
          <strong>Basic Information</strong>
        </Card.Header>
        <Card.Body className="container">
          {renderFields(basicInfoFields)}
        </Card.Body>
      </Card>

      {/* <CardComponent
        title="Basic Information"
        data={basicInfoFields}
      ></CardComponent> */}

      <Card className="mb-3 user-card">
        <Card.Header className="card-header --bs-secondary-bg-rgb">
          <strong>Address Information</strong>
        </Card.Header>
        <Card.Body>{renderFields(addressFields)}</Card.Body>
      </Card>
    </div>
  );
};

export default UserDetails;
