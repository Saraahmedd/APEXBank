import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "../../components/styles/UserDetails.css";
import Footer from "../../components/footer"; // Custom CSS file for additional styling
import { useState, useEffect } from "react";
import Message from "../../components/client/Message";

import Notification from "../../components/notification";

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
          status: "Requested",
          creditLimit: "$8,000",
          isReplacement: "replacement",
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
          status: "Requested",
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
  const [selectedClient, setClient] = useState(
    clients.find((client) => client.id === parseInt(id))
  );

  const [granted, setGranted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [deactivated, setDeactivated] = useState(false);
  const [activated, setActivated] = useState(false);

  const [cardUpdated, setCardUpdated] = useState(false);

  const handleGrant = (ccId) => {
    updateCardStatus(ccId);
  };

  const updateCardStatus = (ccId) => {
    const updatedClient = { ...selectedClient };
    const Index = updatedClient.creditCards.findIndex(
      (card) => card.id === ccId
    );
    if (Index !== -1) {
      updatedClient.creditCards[Index].status = "Active";
      setClient(updatedClient);
      setCardUpdated(true);
      setGranted(true);
    }
  };

  useEffect(() => {
    if (cardUpdated) {
    }
  }, [cardUpdated]);

  const removeCard = (number) => {
    if (document.getElementById(`card ${number}`)) {
      console.log("ALOOOOOI");
      document.getElementById(`card ${number}`).classList.add("d-none");
      setRejected(true);
    }
  };

  const handleDeactivate = (ccId) => {
    deactivateCard(ccId);
  };

  const deactivateCard = (ccId) => {
    const updatedClient = { ...selectedClient };
    const Index = updatedClient.creditCards.findIndex(
      (card) => card.id === ccId
    );
    if (Index !== -1) {
      updatedClient.creditCards[Index].status = "Inactive";
      setClient(updatedClient);
      setCardUpdated(true);
      setDeactivated(true);
      //Activate-btn  --  showDetails
      if (
        document.getElementById(`Activate-btn ${ccId}`) &&
        document.getElementById(`showDetails ${ccId}`) &&
        document.getElementById(`Deactivate-btn ${ccId}`)
      ) {
        document
          .getElementById(`Activate-btn ${ccId}`)
          .classList.remove("d-none");
        document.getElementById(`showDetails ${ccId}`).classList.add("d-none");
        document
          .getElementById(`Deactivate-btn ${ccId}`)
          .classList.add("d-none");
      }
    }
  };

  const handleActivate = (ccId) => {
    activateCard(ccId);
  };

  const activateCard = (ccId) => {
    const updatedClient = { ...selectedClient };
    const Index = updatedClient.creditCards.findIndex(
      (card) => card.id === ccId
    );
    if (Index !== -1) {
      updatedClient.creditCards[Index].status = "Active";
      setClient(updatedClient);
      setCardUpdated(true);
      setActivated(true);
      //Activate-btn  --  showDetails
      if (
        document.getElementById(`Activate-btn ${ccId}`) &&
        document.getElementById(`showDetails ${ccId}`) &&
        document.getElementById(`Deactivate-btn ${ccId}`)
      ) {
        document.getElementById(`Activate-btn ${ccId}`).classList.add("d-none");
        document
          .getElementById(`showDetails ${ccId}`)
          .classList.remove("d-none");
        document
          .getElementById(`Deactivate-btn ${ccId}`)
          .classList.remove("d-none");
      }
    }
  };

  return (
    <>
      <div className="bg-light" style={{ display: "flex" }}>
        <Sidebar />
        <div className="column m-4" style={{ flex: "3" }}>
          <Notification></Notification>
          {granted && (
            <Message
              variant="success"
              children="Credit-card approved successfully!"
              showMessage={granted}
              setShowMessage={setGranted}
            ></Message>
          )}
          {activated && (
            <Message
              variant="success"
              children="Credit-card activated successfully!"
              showMessage={activated}
              setShowMessage={setActivated}
            ></Message>
          )}{" "}
          {rejected && (
            <Message
              variant="danger"
              children="Credit-card request rejected!"
              showMessage={rejected}
              setShowMessage={setRejected}
            ></Message>
          )}
          {deactivated && (
            <Message
              variant="danger"
              children="Credit-card Deactivated!"
              showMessage={deactivated}
              setShowMessage={setDeactivated}
            ></Message>
          )}
          <h2>Credit Cards - {selectedClient.name}</h2>
          <hr />
          {selectedClient && (
            <>
              {/* <h3>{selectedClient.name}'s Credit Cards</h3> */}
              <h4>Active Credit Cards</h4>
              {selectedClient.creditCards.length > 0 ? (
                selectedClient.creditCards
                  .filter(
                    (card) =>
                      card.status === "Active" || card.status === "Inactive"
                  )
                  .map((card) => (
                    <Card className="mb-3" key={card.id}>
                      <Card.Header
                        className="card-header"
                        style={{ size: "18px" }}
                      >
                        <strong>Credit Card Number:</strong> {card.cardNumber}
                      </Card.Header>
                      <Card.Body>
                        <Card.Text
                          style={{
                            fontSize: "17px",
                            color:
                              card.status === "Active" ? "#00AA22" : "#b33022",
                          }}
                        >
                          <strong>Status:</strong> {card.status}
                        </Card.Text>
                        <Card.Text>
                          <strong>Issue Date:</strong> {card.issueDate}
                        </Card.Text>
                        <Card.Text>
                          <strong>Expiry Date:</strong> {card.expiryDate}
                        </Card.Text>
                        <Card.Text>
                          <strong>Balance:</strong> {card.balance}
                        </Card.Text>
                        <Card.Text>
                          <strong>Credit Limit:</strong> {card.creditLimit}
                        </Card.Text>
                        <Card.Text>
                          <strong>Reward Points:</strong> {card.rewardPoints}
                        </Card.Text>
                        <button
                          className="btn btn-primary btn-rounded col-3 m-2"
                          id={`Deactivate-btn ${card.id}`}
                          onClick={(e) => handleDeactivate(card.id)}
                        >
                          Deactivate card
                        </button>
                        <button
                          className=" btn btn-primary btn-rounded col-3 m-2 d-none"
                          id={`Activate-btn ${card.id}`}
                          onClick={(e) => handleActivate(card.id)}
                        >
                          Activate Card
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary btn-rounded col-3 m-2"
                          id={`showDetails ${card.id}`}
                        >
                          <a
                            className="text-light text-decoration-none"
                            href="/banker/viewsingleCC"
                          >
                            show details
                          </a>
                        </button>
                      </Card.Body>
                    </Card>
                  ))
              ) : (
                <p>No credit cards found.</p>
              )}
              <h4>Requested Credit Cards</h4>
              {selectedClient.creditCards.length > 0 ? (
                selectedClient.creditCards
                  .filter((card) => card.status === "Requested")
                  .map((card) => (
                    <Card className="mb-3" key={card.id} id={`card ${card.id}`}>
                      <Card.Header
                        className="card-header"
                        style={{ size: "18px" }}
                      >
                        <strong>Pending Credit Card Request</strong>
                      </Card.Header>
                      <Card.Body>
                        <Card.Text
                          style={{ fontSize: "17px", color: "#d99c2b" }}
                        >
                          <strong>Status:</strong> {card.status}
                        </Card.Text>
                        <Card.Text>
                          <strong>Credit Limit:</strong> {card.creditLimit}
                        </Card.Text>
                        <Card.Text>
                          <strong>Card Type:</strong> {card.isReplacement}
                        </Card.Text>
                        <button
                          className="btn btn-primary btn-rounded col-3 m-2"
                          onClick={(e) => handleGrant(card.id)}
                        >
                          Approve
                        </button>
                        <button
                          className="btn btn-primary btn-rounded col-3 m-2"
                          onClick={(e) => removeCard(card.id)}
                        >
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
      <Footer></Footer>
    </>
  );
};

export default ViewCreditCardDetails;
