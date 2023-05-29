import React from "react";
import Datatable from "../../components/table";
import Grid from "../../components/grid";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/footer";
import { Table } from "react-bootstrap";

import Notification from "../../components/notification";

const ViewTransaction = () => {
  const transactions = [
    {
      reference: "TXN123456789",
      date: "2023-05-25",
      value: 50.99,
      description: "Purchase at XYZ Store",
    },
    {
      reference: "TXN987654321",
      date: "2023-05-26",
      value: 25.5,
      description: "Online payment for subscription",
    },
    {
      reference: "TXN246813579",
      date: "2023-05-27",
      value: 120.75,
      description: "Dinner at ABC Restaurant",
    },
    {
      reference: "TXN369258147",
      date: "2023-05-28",
      value: 80.0,
      description: "Clothing purchase at DEF Boutique",
    },
    {
      reference: "TXN951753628",
      date: "2023-05-29",
      value: 150.25,
      description: "Electronics purchase at GHI Store",
    },
    {
      reference: "TXN741852963",
      date: "2023-05-30",
      value: 200.0,
      description: "Hotel reservation at JKL Resort",
    },
    {
      reference: "TXN528496731",
      date: "2023-05-31",
      value: 65.99,
      description: "Grocery shopping at MNO Supermarket",
    },
    {
      reference: "TXN314159265",
      date: "2023-06-01",
      value: 75.5,
      description: "Gasoline purchase at PQR Station",
    },
    {
      reference: "TXN789456123",
      date: "2023-06-02",
      value: 300.0,
      description: "Furniture purchase at STU Home Decor",
    },
    {
      reference: "TXN123123123",
      date: "2023-06-03",
      value: 234.75,
      description: "Concert ticket purchase for XYZ Band",
    },
    {
      reference: "TXN125123123",
      date: "2023-06-02",
      value: 455.75,
      description: "Gasoline purchase at Mobil",
    },
    {
      reference: "TXN126123123",
      date: "2023-06-01",
      value: 75.75,
      description: "Talabat Cairo purchase",
    },
    {
      reference: "TXN127123123",
      date: "2023-05-31",
      value: 4232.5,
      description: "Nike Cairo Festival City Purchase",
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
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Transaction Reference</th>
                  <th>Transaction Description</th>
                  <th>Transaction Value</th>
                  <th>Transaction Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.reverse().map((transaction, index) => {
                  return (
                    <tr>
                      <td>{transaction.reference}</td>
                      <td>{transaction.description}</td>
                      <td>{transaction.value} USD</td>
                      <td>{transaction.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a class="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ViewTransaction;
