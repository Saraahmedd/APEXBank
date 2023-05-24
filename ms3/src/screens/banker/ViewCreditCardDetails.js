import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "../../components/styles/UserDetails.css"; // Custom CSS file for additional styling

const ViewCreditCardDetails = () => {
  const { id } = useParams();

  // Dummy data for clients
  const clients = [
    {
      id: 0,
      name: "John Doe",
      creditCards: [
        {
          id: 0,
          cardNumber: "1234 5678 9012 3456",
          expiryDate: "10/25",
          issueDate: "05/20",
          status: "Active",
          creditLimit: "$10,000",
          balance: "$2,500",
          rewardPoints: 1500,
        },
        {
          id: 1,
          cardNumber: "9876 5432 1098 7654",
          expiryDate: "08/24",
          issueDate: "03/19",
          status: "Active",
          creditLimit: "$5,000",
          balance: "$1,200",
          rewardPoints: 800,
        },
        {
          id: 2,
          status: "Inactive",
        },
      ],
    },
    {
      id: 1,
      name: "Jessica Smith",
      creditCards: [
        {
          id: 0,
          cardNumber: "4567 8901 2345 6789",
          expiryDate: "12/23",
          issueDate: "07/18",
          status: "Inactive",
          creditLimit: "$8,000",
          balance: "$0",
          rewardPoints: 2500,
        },
      ],
    },
    {
      id: 2,
      name: "Liam Taylor",
      creditCards: [],
    },
  ];

  // Find the client based on the id parameter
  const selectedClient = clients.find((client) => client.id === Number(id));

  return (
    <div style={{ display: "flex" }}>
      <div className="column" style={{ flex: "1" }}>
        <Sidebar />
      </div>
      <div className="column m-4" style={{ flex: "3" }}>
        <h2>Credit Cards - {selectedClient.name}</h2>
        <hr />
        {selectedClient && (
          <>
            {/* <h3>{selectedClient.name}'s Credit Cards</h3> */}
            <h4>Active Credit Cards</h4>
            {selectedClient.creditCards.length > 0 ? (
              selectedClient.creditCards
                .filter((card) => card.status === "Active")
                .map((card) => (
                  <Card className="mb-3" key={card.id}>
                    <Card.Header
                      className="card-header"
                      style={{ size: "18px" }}
                    >
                      <strong>Credit Card Number:</strong> {card.cardNumber}
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <strong>Expiry Date:</strong> {card.expiryDate}
                      </Card.Text>
                      <Card.Text>
                        <strong>Issue Date:</strong> {card.issueDate}
                      </Card.Text>
                      <Card.Text>
                        <strong>Status:</strong> {card.status}
                      </Card.Text>
                      <Card.Text>
                        <strong>Credit Limit:</strong> {card.creditLimit}
                      </Card.Text>
                      <Card.Text>
                        <strong>Balance:</strong> {card.balance}
                      </Card.Text>
                      <Card.Text>
                        <strong>Reward Points:</strong> {card.rewardPoints}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))
            ) : (
              <p>No credit cards found.</p>
            )}
            <h4>Requested Credit Cards</h4>
            {selectedClient.creditCards.length > 0 ? (
              selectedClient.creditCards
                .filter((card) => card.status === "Inactive")
                .map((card) => (
                  <Card className="mb-3" key={card.id}>
                    <Card.Header
                      className="card-header"
                      style={{ size: "18px" }}
                    >
                      <strong>Pending Credit Card Request</strong>
                    </Card.Header>
                    <Card.Body>
                      <button className="btn btn-primary btn-rounded col-3 m-2">
                        Approve
                      </button>
                      <button className="btn btn-primary btn-rounded col-3 m-2">
                        Reject
                      </button>
                    </Card.Body>
                  </Card>
                ))
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ViewCreditCardDetails;
