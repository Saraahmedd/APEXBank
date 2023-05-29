import React from "react";
import Datatable from "../../components/table";
import Grid from "../../components/grid";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/footer";

import Notification from "../../components/notification2";

const ViewCllientTransactionsScreen = () => {
  return (
    <>
      <div className="row bg-light">
        <Sidebar></Sidebar>
        <Grid></Grid>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ViewCllientTransactionsScreen;
