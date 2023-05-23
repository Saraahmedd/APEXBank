import React from "react";
import Datatable from "../../components/table";
import Grid from "../../components/grid";
import Sidebar from "../../components/Sidebar";

const ViewCllientTransactionsScreen = () => {
  return (
    <>
      <div className="row">
        <Sidebar></Sidebar>
        <Grid></Grid>
      </div>
    </>
  );
};

export default ViewCllientTransactionsScreen;
