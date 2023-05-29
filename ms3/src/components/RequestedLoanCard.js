import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import "./styles/UserDetails.css"; // Custom CSS file for additional styling

const RequestedLoanCard = ({
  title,
  data,
  button1Name,
  button1Click,
  button2Name,
  button2Click,
}) => {
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
      <Card className="mb-3 user-card custom-card" style={{ width: "95%" }}>
        <Card.Header className="card-header">
          <strong>{title}</strong>
        </Card.Header>
        <Card.Body className="container">{renderFields(data)}</Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="primary" onClick={button1Click}>
            {button1Name}
          </Button>{" "}
          <Button variant="secondary" onClick={button2Click}>
            {button2Name}
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default RequestedLoanCard;
