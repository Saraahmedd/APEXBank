import React from "react";
import Datatable from "../../components/table";
import Grid from "../../components/grid";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/footer";
import { Table } from "react-bootstrap";

import Notification from "../../components/notification2";

const ViewTransaction = () => {
  const transactions = [
    {
      id: 1,
      referenceNumber: "#123456789",
      date: "2022-05-30",
      description: "Payment for goods",
      amount: 100.0,
      from: "1234 5678 1234 5678",
      to: "2345 6789 2345 6789",
      type: "Purchase",
      status: "Completed",
      comments: "Transaction successful",
    },
    {
      id: 2,
      referenceNumber: "#987654321",
      date: "2022-06-01",
      description: "Salary payment",
      amount: 5000.0,
      from: "3456 7890 3456 7890",
      to: "1234 5678 1234 5678",
      type: "Income",
      status: "Pending",
      comments: "Awaiting approval",
    },
    {
      id: 3,
      referenceNumber: "#456789012",
      date: "2022-06-02",
      description: "Payment for services",
      amount: 250.0,
      from: "1234 5678 9012 3456",
      to: "1234 5678 1234 5678",
      type: "Income",
      status: "Completed",
      comments: "Transaction successful",
    },
    {
      id: 4,
      referenceNumber: "#890123456",
      date: "2022-06-05",
      description: "Payment for rent",
      amount: 800.0,
      from: "1234 5678 1234 5678",
      to: "1234 1234 5678 5678",
      type: "Expense",
      status: "Completed",
      comments: "Transaction successful",
    },
    {
      id: 5,
      referenceNumber: "#234567890",
      date: "2022-06-07",
      description: "Payment for subscription",
      amount: 50.0,
      from: "1234 5678 1234 5678",
      to: "1111 2222 3333 4444",
      type: "Purchase",
      status: "Pending",
      comments: "Awaiting approval",
    },
    {
      id: 6,
      referenceNumber: "#678901234",
      date: "2022-06-10",
      description: "Payment for services",
      amount: 300.0,
      from: "3456 7890 3456 7890",
      to: "1234 5678 1234 5678",
      type: "Income",
      status: "Completed",
      comments: "Transaction successful",
    },
    {
      id: 7,
      referenceNumber: "#345678901",
      date: "2022-06-12",
      description: "Payment for goods",
      amount: 75.0,
      from: "1234 5678 1234 5678",
      to: "2345 6789 2345 6789",
      type: "Purchase",
      status: "Completed",
      comments: "Transaction successful",
    },
  ];

  return (
    <>
      <div className="row bg-light">
        <Sidebar></Sidebar>
        <div className="col-8">
          <Notification></Notification>
          <h1 className="py-3">Transactions Details </h1>

          <div className="my-4">
            <h2>Transactions</h2>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Reference Number</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.id}</td>
                    <td>{transaction.referenceNumber}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.from}</td>
                    <td>{transaction.to}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.status}</td>
                    <td>{transaction.comments}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ViewTransaction;
