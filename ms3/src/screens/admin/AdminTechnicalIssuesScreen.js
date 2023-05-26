import Sidebar from "../../components/Sidebar";
import Datatable from "../../components/table";
import Grid from "../../components/grid";
import Footer from "../../components/footer";
import React from "react";

const AdminTechnicalIssuesScreen = () => {
  return (
    <>
      <div className="row">
        <Sidebar></Sidebar>
        <div className="col-8 ">
          <h1 className="p-5">Technical issues screen</h1>
          <div class="card p-4 ">
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card p-4">
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card p-4 ">
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AdminTechnicalIssuesScreen;
