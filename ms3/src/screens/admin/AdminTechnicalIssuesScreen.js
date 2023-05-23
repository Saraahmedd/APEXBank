import Sidebar from "../../components/Sidebar";
import Datatable from "../../components/table";
import Grid from "../../components/grid";
import React from "react";

const AdminTechnicalIssuesScreen = () => {
  return (
    <>
      <div className="row">
        <Sidebar></Sidebar>
        <Grid></Grid>
      </div>
    </>
  );
};

export default AdminTechnicalIssuesScreen;
