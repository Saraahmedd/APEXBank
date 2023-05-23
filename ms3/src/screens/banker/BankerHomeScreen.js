import React from "react";
import Sidebar from "../../components/Sidebar";

const AdminHomeScreen = () => {
  return (
    <>
      <div className="row ">
        <Sidebar></Sidebar>
        <div className="col-9">
          <h1 className="p-4">Welcome, Banker</h1>
          <div className="row">
            <div className="card col-3 m-1">
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
            <div className="card col-3 m-1">
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
            <div className="card col-3 m-1">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHomeScreen;
