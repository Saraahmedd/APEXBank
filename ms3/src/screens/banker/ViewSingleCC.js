import React from "react";
import Datatable from "../../components/table";
import Grid from "../../components/grid";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/footer";

import Notification from "../../components/notification";

const ViewSingleCC = () => {
  return (
    <>
      <div className="row bg-light">
        <Sidebar></Sidebar>
        <div className="col-8">
          <Notification></Notification>
          <h1 className="py-3">Credit Card Details </h1>

          <div className="my-4">
            <h2>Transactions</h2>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Transaction ID</th>
                  <th scope="col">amount</th>
                  <th scope="col">Place</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>2000</td>
                  <td>Zara</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>2000</td>
                  <td>H&M</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>2000</td>
                  <td>T&A</td>
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
          <br></br>
          <div className="my-4">
            <h2>Upcoming Deadlines</h2>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">amount ID</th>
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
            <h2>History</h2>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">amount ID</th>
                  <th scope="col">amount</th>
                  <th scope="col">Paid amount</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>2000</td>
                  <td>2000</td>
                  <td>27/03/2023</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>2000</td>
                  <td>2000</td>
                  <td>27/04/2023</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>2000</td>
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

export default ViewSingleCC;
