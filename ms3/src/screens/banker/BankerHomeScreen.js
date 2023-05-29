import Sidebar from "../../components/Sidebar";
import CardComponent from "../../components/CardComponent";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Notification from "../../components/notification2";
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
            <div className="col-9 flex-col">
              <div className="col-12">
                <CardComponent
                  title="Banker Information"
                  data={[
                    { label: "Name", value: "Ahmed Mohsen" },
                    { label: "ID", value: "7394" },
                    { label: "Branch ID", value: "73" },
                  ]}></CardComponent>
              </div>
              <div className="col-12">
                <CardComponent
                  title="Issues summary"
                  data={[
                    { label: "New credit card requests", value: "34 " },
                    { label: "Denied credit card requests", value: "7394" },
                    { label: "Total credit card requests", value: "10000" },
                  ]}></CardComponent>
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
