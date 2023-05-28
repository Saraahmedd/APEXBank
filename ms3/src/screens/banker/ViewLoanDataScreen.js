import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/footer";
import { useState, useEffect } from "react";

import Notification from "../../components/notification";

const ViewLoanDataScreen = () => {
  const { id } = useParams();

  const clients = [
    {
      id: 0,
      name: "John Doe",
      loans: [
        {
          id: 0,
          type: "Car Loan",
          amount: 5000,
          interestRate: 5,
          status: "Active",
          monthlyPayment: 200,
          borrower: "John Doe",
          nextDeadline: "2023-06-01",
        },
        {
          id: 1,
          type: "Personal Loan",
          amount: 10000,
          interestRate: 7,
          status: "Requested",
          monthlyPayment: null,
          borrower: "John Doe",
          nextDeadline: null,
        },
      ],
    },
    {
      id: 1,
      name: "Jessica Smith",
      loans: [
        {
          id: 2,
          type: "Car Loan",
          amount: 8000,
          interestRate: 6,
          status: "Active",
          monthlyPayment: 300,
          borrower: "Jessica Smith",
          nextDeadline: "2023-06-05",
        },
      ],
    },
    {
      id: 2,
      name: "Liam Taylor",
      loans: [
        {
          id: 3,
          type: "Personal Loan",
          amount: 15000,
          interestRate: 8,
          status: "Requested",
          monthlyPayment: null,
          borrower: "Liam Taylor",
          nextDeadline: null,
        },
        {
          id: 4,
          type: "Car Loan",
          amount: 10000,
          interestRate: 6,
          status: "Active",
          monthlyPayment: 400,
          borrower: "Liam Taylor",
          nextDeadline: "2023-06-10",
        },
      ],
    },
  ];

  const [client, setClient] = useState(
    clients.find((client) => client.id === parseInt(id))
  );

  const [loanUpdated, setLoanUpdated] = useState(false);

  const handleGrant = (loanId) => {
    updateLoanStatus(loanId);
  };

  const updateLoanStatus = (loanId) => {
    const updatedClient = { ...client };
    const loanIndex = updatedClient.loans.findIndex(
      (loan) => loan.id === loanId
    );
    if (loanIndex !== -1) {
      updatedClient.loans[loanIndex].status = "Active";
      setClient(updatedClient);
      setLoanUpdated(true);
    }
  };

  useEffect(() => {
    if (loanUpdated) {
    }
  }, [loanUpdated]);

  const removeCard = (number) => {
    if (document.getElementById(`card ${number}`)) {
      console.log("ALOOOOOI");
      document.getElementById(`card ${number}`).classList.add("d-none");
    }
  };

  return (
    <>
      <div className="bg-light" style={{ display: "flex" }}>
        <Sidebar />
        <div className="column m-4" style={{ flex: "3" }}>
          <Notification></Notification>
          <h2>Loan Details - {client.name}</h2>
          <hr />
          <div className="mb-4">
            <h4>Active Loans</h4>
            {client.loans
              .filter((loan) => loan.status === "Active")
              .map((loan) => (
                <Card className="mb-3" key={loan.id}>
                  <Card.Header className="card-header">
                    <strong>Type:</strong> {loan.type}
                  </Card.Header>
                  <Card.Body>
                    <div>
                      <strong>Amount:</strong> ${loan.amount}
                    </div>
                    <div>
                      <strong>Interest Rate:</strong> {loan.interestRate}%
                    </div>

                    <div>
                      <strong>Monthly Payment:</strong>{" "}
                      {loan.monthlyPayment ? `$${loan.monthlyPayment}` : "N/A"}
                    </div>
                    <div>
                      <strong>Borrower:</strong> {loan.borrower}
                    </div>
                    <div>
                      <strong>Next Deadline:</strong>{" "}
                      {loan.nextDeadline ? loan.nextDeadline : "N/A"}
                    </div>
                    <hr />
                    <button type="submit" className="btn btn-primary mt-3">
                      <a
                        className="text-light text-decoration-none"
                        href="/banker/viewsingleloan">
                        show details
                      </a>
                    </button>
                  </Card.Body>
                </Card>
              ))}
          </div>
          <div>
            <h4>Requested Loans</h4>
            {client.loans
              .filter((loan) => loan.status === "Requested")
              .map((loan) => (
                <Card className="mb-3" key={loan.id} id={`card ${loan.id}`}>
                  <Card.Header className="card-header">
                    <strong>Type:</strong> {loan.type}
                  </Card.Header>
                  <Card.Body>
                    <div>
                      <strong>Amount:</strong> ${loan.amount}
                    </div>
                    <div>
                      <strong>Interest Rate:</strong> {loan.interestRate}%
                    </div>
                    <div>
                      <strong>Status:</strong> {loan.status}
                    </div>
                    <div>
                      <strong>Borrower:</strong> {loan.borrower}
                    </div>
                    <hr />
                    <button
                      type="submit"
                      className="btn btn-primary m-2"
                      onClick={(e) => handleGrant(loan.id)}>
                      Grant
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary m-2"
                      onClick={(e) => removeCard(loan.id)}>
                      Reject
                    </button>
                  </Card.Body>
                </Card>
              ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ViewLoanDataScreen;
