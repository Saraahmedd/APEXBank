import React from "react";
import Datatable from "../../components/table";
import Grid from "../../components/grid";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/footer";
import CardComponent from "../../components/CardComponent";

import Notification from "../../components/notification2";

const ViewSingleCC = () => {
  const addressFields = [
    { label: "last 4 digits", value: "**** **** **** 1234" },
    { label: "Card limit", value: "20000" },
    { label: "Card type", value: "TRAVEL PLATINUM" },
    { label: "Points Balance", value: "10000" },
  ];
  return (
    <>
      <div className="row bg-light">
        <Sidebar></Sidebar>
        <div className="col-8">
          <h1 className="py-3">
            Credit Card Details <Notification></Notification>{" "}
          </h1>
          <div className="my-5">
            <CardComponent
              title="Credit Card Information"
              data={addressFields}></CardComponent>
          </div>
          <div className="my-4">
            <h2>Transactions</h2>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Transaction ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Transaction description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>22/03/2023</td>
                  <td>2000</td>
                  <td>Zara</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>22/03/2023</td>
                  <td>2000</td>
                  <td>H&M</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>22/03/2023</td>
                  <td>2000</td>
                  <td>T&A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br></br>
          <div className="my-4">
            <h2>Upcoming Deadlines</h2>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Payment ID</th>
                  <th scope="col">Required amount</th>
                  <th scope="col">Paid amount</th>
                  <th scope="col">Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>2000</td>
                  <td>1000</td>
                  <td>27/03/2023</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>2000</td>
                  <td>0</td>
                  <td>27/04/2023</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>2000</td>
                  <td>0</td>
                  <td>27/05/2023</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-5">
            <h2>History</h2>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Payment ID</th>
                  <th scope="col">Total amount</th>
                  <th scope="col">Paid amount</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>2000</td>
                  <td>1000</td>
                  <td>27/03/2023</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>2000</td>
                  <td>2000</td>
                  <td>27/02/2023</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>2000</td>
                  <td>2000</td>
                  <td>27/01/2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ViewSingleCC;
