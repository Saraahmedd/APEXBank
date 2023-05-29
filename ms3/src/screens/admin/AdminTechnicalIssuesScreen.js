import AdminSidebar from "../../components/adminSidebar";
import Datatable from "../../components/table";
import Grid from "../../components/grid";
import Footer from "../../components/footer";
import React, { useState } from "react";
import Message from "../../components/client/Message";

const AdminTechnicalIssuesScreen = () => {
  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam condimentum libero, id efficitur quam accumsan eu. Aenean gravida erat id risus aliquet, ac consequat quam malesuada. In hac habitasse platea dictumst. Proin eget feugiat metus. Sed vitae augue mauris. Phasellus posuere tincidunt risus sed faucibus. Nullam aliquam tortor non tincidunt cursus. Suspendisse potenti. Duis facilisis arcu vitae semper vehicula. Vestibulum ac gravida nisi.";

  const [resolve, setResolve] = new useState(false);
  const removeCard = (number) => {
    if (document.getElementById(`card ${number}`)) {
      document.getElementById(`card ${number}`).classList.add("d-none");
      setResolve(true);
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="row bg-light">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="column m-4" style={{ flex: "3" }}>
          {resolve && (
            // <div
            //   class="alert alert-success position-absolute"
            //   role="alert"
            //   style={{ left: "60%" }}>
            //   Error resolved successfuly
            //   <button
            //     type="button"
            //     class="btn-close"
            //     data-bs-dismiss="alert"
            //     aria-label="Close"
            //     onClick={() => setResolve(false)}></button>
            // </div>
            <Message
              variant="success"
              children="Report resolved successfully!"
              showMessage={resolve}
              setShowMessage={setResolve}></Message>
          )}
          <div className="m-3">
            <h1 className="mt-3">Technical Issues Page</h1>
            <h4 className="mb-5">Make sure to resolve all technical errors</h4>
          </div>
          <div className="col-11 mt-2">
            <div class="card" id="card 1">
              <div class="card-header h1">Report</div>
              <div class="card-body row">
                <h5 class="card-title col-12">
                  I'm unable to log into my account.
                </h5>
                <p>{loremText}</p>
                <div className="col-10"></div>
                <button
                  type="button"
                  class="btn btn-primary col-2 justify-content-end"
                  onClick={() => removeCard(1)}>
                  resolved
                </button>
              </div>
            </div>
          </div>
          <div className="col-11 mt-2">
            <div class="card" id="card 2">
              <div class="card-header h1">Report</div>
              <div class="card-body row">
                <h5 class="card-title col-12">
                  I've been charged twice for the same transaction on my online
                  statement.
                </h5>
                <p>{loremText}</p>
                <p></p>
                <div className="col-10"></div>
                <button
                  type="button"
                  class="btn btn-primary col-2 justify-content-end"
                  onClick={() => removeCard(2)}>
                  resolved
                </button>
              </div>
            </div>
          </div>
          <div className="col-11 mt-2">
            <div class="card" id="card 3">
              <div class="card-header h1">Report</div>
              <div class="card-body row">
                <h5 class="card-title col-12">
                  I tried to transfer funds to another account, but the
                  transaction failed, and the money was not returned to my
                  account.
                </h5>
                <p>{loremText}</p>
                <div className="col-10"></div>
                <button
                  type="button"
                  class="btn btn-primary col-2 justify-content-end"
                  onClick={() => removeCard(3)}>
                  resolved
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <Footer></Footer>
    </>
  );
};

export default AdminTechnicalIssuesScreen;
