import Sidebar from "../../components/Sidebar";
import Datatable from "../../components/table";
import Grid from "../../components/grid";
import React from "react";

const ViewClientDataScreen = () => {
  return (
    <>
      <div className="row">
        <Sidebar></Sidebar>
        <Grid></Grid>
      </div>
    </>
  );
};

export default ViewClientDataScreen;
