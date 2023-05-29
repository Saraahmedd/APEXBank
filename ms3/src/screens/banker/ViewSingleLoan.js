import React from "react";
import Datatable from "../../components/table";
import Grid from "../../components/grid";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/footer";
import CardComponent from "../../components/CardComponent";

import Notification from "../../components/notification2";

const ViewSingleLoan = () => {
  const addressFields = [
    { label: "Loan type", value: "Car loan" },
    { label: "Loan term", value: "	5 YEARS - 7.5%" },
    { label: "Loaned amount", value: "200000" },
    { label: "Loan start date", value: "01/01/20020" },
    { label: "Loan end date", value: "01/01/2028" },
    { label: "Percentage covered", value: "33%" },
  ];
  return (
    <>
      <div className="row bg-light">
        <Sidebar></Sidebar>
        <div className="col-8">
          <h1 className="py-3">
            {" "}
            <Notification></Notification> Loan Details
          </h1>
          <div className="my-5">
            <CardComponent
              title="Loan Information"
              data={addressFields}></CardComponent>
          </div>
          <div className="my-4">
            <h2>Upcoming Deadlines</h2>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Payment ID</th>
                  <th scope="col">amount</th>
                  <th scope="col">Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>2000</td>
                  <td>27/03/2023</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>2000</td>
                  <td>27/04/2023</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>2000</td>
                  <td>27/05/2023</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-5">
            <h2>Paid amounts</h2>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Loan amount ID</th>
                  <th scope="col">amount</th>
                  <th scope="col">Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>2000</td>
                  <td>27/03/2023</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>2000</td>
                  <td>27/04/2023</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>2000</td>
                  <td>27/05/2023</td>
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

export default ViewSingleLoan;
