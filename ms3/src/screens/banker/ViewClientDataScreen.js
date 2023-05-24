import Sidebar from "../../components/Sidebar";
import Datatable from "../../components/table";
import Grid from "../../components/grid";
import React from "react";
import UserDetails from "../../components/UserDetails";
import { useParams } from "react-router-dom";

const ViewClientDataScreen = () => {
  const { id } = useParams();

  return (
    <div style={{ display: "flex" }}>
      <div className="column" style={{ flex: "1" }}>
        <Sidebar />
      </div>
      <div className="column m-4" style={{ flex: "3" }}>
        <h2>Client Data</h2>
        <hr />
        <UserDetails userID={id} />
      </div>
    </div>
  );
};

export default ViewClientDataScreen;
