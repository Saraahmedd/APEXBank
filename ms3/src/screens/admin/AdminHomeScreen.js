import AdminSidebar from "../../components/adminSidebar";
import CardComponent from "../../components/CardComponent";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";
import Footer from "../../components/footer";
import Inbox from "../../components/Inbox";

const AdminHomeScreen = () => {
  // const chartData = {
  //   labels: [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ],
  //   datasets: [
  //     {
  //       label: "Total Expenses",
  //       data: [500, 700, 600, 800, 400, 900, 750, 650, 850, 700, 600, 1000],
  //       fill: false,
  //       borderColor: "rgba(75,192,192,1)",
  //       backgroundColor: "rgba(75,192,192,0.4)",
  //     },
  //   ],
  // };

  const [data] = useState({
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(194, 116, 161, 0.5)",
        borderColor: "rgb(194, 116, 161)",
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgba(71, 225, 167, 0.5)",
        borderColor: "rgb(71, 225, 167)",
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  });

  const removeCard = (number) => {
    if (document.getElementById(`card ${number}`)) {
      document.getElementById(`card ${number}`).classList.add("d-none");
    }
  };

  return (
    <>
      <div className="row">
        <AdminSidebar></AdminSidebar>
        <div className="col-9 p-4">
          <h1 className="p-4">Welcome, Admin</h1>
          <div className="row flex-row">
            {/* <div className="card col-9 col-lg-3 m-1">
              <div className="card-body">
                <img
                  className="card-img-top"
                  src="https://www.conseilspatrimoineservices.fr/wp-content/uploads/2020/01/gestionnaires-de-patrimoine.svg"
                  alt="Card image cap"
                />
                <h5 className="card-title">View clients</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  View all the details for one client
                </h6>
              </div>
            </div>
            <div className="card col-9 col-lg-3 m-1">
              <div className="card-body">
                <img
                  className="card-img-top"
                  src="https://www.conseilspatrimoineservices.fr/wp-content/uploads/2020/01/gestionnaires-de-patrimoine.svg"
                  alt="Card image cap"
                />
                <h5 className="card-title">View clients</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  View all the details for one client
                </h6>
              </div>
            </div>
            <div className="card col-9 col-lg-3 m-1">
              <div className="card-body">
                <img
                  className="card-img-top"
                  src="https://www.conseilspatrimoineservices.fr/wp-content/uploads/2020/01/gestionnaires-de-patrimoine.svg"
                  alt="Card image cap"
                />
                <h5 className="card-title">View clients</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  View all the details for one client
                </h6>
              </div>
            </div> */}
            <div className="col-6 flex-col">
              <div className="col-12">
                <CardComponent
                  title="Admin Information"
                  data={[
                    { label: "Name", value: "Ahmed Mohsen" },
                    { label: "ID", value: "7394" },
                  ]}></CardComponent>
              </div>
              <div className="col-12">
                <CardComponent
                  title="Technical Issues Summary"
                  data={[
                    { label: "New issues", value: "34 " },
                    { label: "Unresolved issues", value: "7394" },
                    { label: "Total issues", value: "10000" },
                  ]}></CardComponent>
              </div>
            </div>
            <div className="col-5">
              <div className="col-12 mt-2">
                <div class="card" id="card 1">
                  <div class="card-header h1">To do</div>
                  <div class="card-body row">
                    <h5 class="card-title col-9">
                      Admit/Reject credit card requests
                    </h5>
                    <button
                      type="button"
                      class="btn btn-primary col-3 justify-content-end"
                      onClick={() => removeCard(1)}>
                      Done
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-2">
                <div class="card" id="card 2">
                  <div class="card-header h1">To do</div>
                  <div class="card-body row">
                    <h5 class="card-title col-9">
                      Admit/Reject credit loan requests
                    </h5>
                    <button
                      type="button"
                      class="btn btn-primary col-3 justify-content-end"
                      onClick={() => removeCard(2)}>
                      Done
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-2">
                <div class="card" id="card 3">
                  <div class="card-header h1">To do</div>
                  <div class="card-body row">
                    <h5 class="card-title col-9">Resolve business reports</h5>
                    <button
                      type="button"
                      class="btn btn-primary col-3 justify-content-end"
                      onClick={() => removeCard(3)}>
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-11 mt-4 pl-1">
            <Inbox></Inbox>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AdminHomeScreen;
