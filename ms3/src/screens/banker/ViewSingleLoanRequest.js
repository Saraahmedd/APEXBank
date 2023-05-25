import React from "react";
import Datatable from "../../components/table";
import Grid from "../../components/grid";
import Sidebar from "../../components/Sidebar";

const ViewSingleLoanRequest = () => {
  return (
    <>
      <div className="row">
        <Sidebar></Sidebar>
        <div className="col-8">
          <Datatable></Datatable>
          <Datatable></Datatable>
        </div>
      </div>
    </>
  );
};

export default ViewSingleLoanRequest;
