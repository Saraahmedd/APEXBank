import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./styles/UserDetails.css"; // Custom CSS file for additional styling

const CardComponent = ({ title, data }) => {
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
      </Card>
    </div>
  );
};
export default CardComponent;
