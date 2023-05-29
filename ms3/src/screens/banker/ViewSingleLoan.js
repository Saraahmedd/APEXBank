import React from "react";
import Datatable from "../../components/table";
import Grid from "../../components/grid";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/footer";

import Notification from "../../components/notification";

const ViewSingleLoan = () => {
  return (
    <>
      <div className="row bg-light">
        <Sidebar></Sidebar>
        <div className="col-8">
          <h1 className="py-3">
            {" "}
            <Notification></Notification> Loan Details
          </h1>

          <div className="my-4">
            <h2>Upcoming Deadlines</h2>
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

          <div className="my-4">
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

export default ViewSingleLoan;
