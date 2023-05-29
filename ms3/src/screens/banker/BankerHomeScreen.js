import Sidebar from "../../components/Sidebar";
import CardComponent from "../../components/CardComponent";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Notification from "../../components/notification";
import { CDBContainer } from "cdbreact";
import Grid from "../../components/grid";
import Footer from "../../components/footer";

const BankerHomeScreen = () => {
  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Total Expenses",
        data: [500, 700, 600, 800, 400, 900, 750, 650, 850, 700, 600, 1000],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.4)",
      },
    ],
  };

  const removeCard = (number) => {
    if (document.getElementById(`card ${number}`)) {
      console.log("ALOOOOOI");
      document.getElementById(`card ${number}`).classList.add("d-none");
    }
  };

  return (
    <>
      <div className="row bg-white ">
        <Sidebar></Sidebar>
        <div className="col-9 p-4">
          <Notification></Notification>
          <h1 className="p-4">Welcome, Banker</h1>
          <div className="row flex-row">
            <div className="col-6 flex-col">
              <div className="col-12">
                <CardComponent
                  title="Banker Information"
                  data={[
                    { label: "Name", value: "Ahmed Mohsen" },
                    { label: "ID", value: "7394" },
                  ]}></CardComponent>
              </div>
              <div className="col-12">
                <CardComponent
                  title="issues summary"
                  data={[
                    { label: "new Credit Card requests", value: "34 " },
                    { label: "denied credit card requests", value: "7394" },
                    { label: "total credit card requests", value: "10000" },
                  ]}></CardComponent>
              </div>
            </div>
            <div className="col-5 bg-secondary">
              {/* <div className="mt-5">
                <h4>Total Expenses per Month</h4>
                <Line data={chartData} />
              </div> */}
            </div>
          </div>
          <hr />
          <div class="h2">To-do List</div>
          <div className="col-11 mt-2">
            <div class="card" id="card 1">
              {/* <div class="card-header h1">To do</div> */}

              <div class="card-body row">
                <h5 class="card-title col-6">
                  Admit/reject credit card requests
                </h5>
                <div className="col-4"></div>
                <button
                  type="button"
                  class="btn btn-primary col-2 justify-content-end"
                  onClick={() => removeCard(1)}>
                  done
                </button>
              </div>
            </div>
          </div>
          <div className="col-11 mt-2">
            <div class="card" id="card 2">
              {/* <div class="card-header h1">To do</div> */}
              <div class="card-body row">
                <h5 class="card-title col-6">
                  Admit/reject credit loan requests
                </h5>
                <div className="col-4"></div>
                <button
                  type="button"
                  class="btn btn-primary col-2 justify-content-end"
                  onClick={() => removeCard(2)}>
                  done
                </button>
              </div>
            </div>
          </div>
          <div className="col-11 mt-2">
            <div class="card" id="card 3">
              {/* <div class="card-header h1">To do</div> */}
              <div class="card-body row">
                <h5 class="card-title col-6">resolve business reports</h5>
                <div className="col-4"></div>
                <button
                  type="button"
                  class="btn btn-primary col-2 justify-content-end"
                  onClick={() => removeCard(3)}>
                  done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default BankerHomeScreen;
