import React from "react";
import Datatable from "../../components/table";
import Grid from "../../components/grid";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/footer";

const ViewCreditCardReports = () => {
  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam condimentum libero, id efficitur quam accumsan eu. Aenean gravida erat id risus aliquet, ac consequat quam malesuada. In hac habitasse platea dictumst. Proin eget feugiat metus. Sed vitae augue mauris. Phasellus posuere tincidunt risus sed faucibus. Nullam aliquam tortor non tincidunt cursus. Suspendisse potenti. Duis facilisis arcu vitae semper vehicula. Vestibulum ac gravida nisi.";

  const removeCard = (number) => {
    if (document.getElementById(`card ${number}`)) {
      console.log("ALOOOOOI");
      document.getElementById(`card ${number}`).classList.add("d-none");
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="row bg-light">
          <Sidebar></Sidebar>
        </div>
        <div className="column m-4" style={{ flex: "3" }}>
          <div className="col-11 mt-2">
            <div class="card" id="card 1">
              <div class="card-header h1">Report</div>
              <div class="card-body row">
                <h5 class="card-title col-6">Stolen credit card</h5>
                <p>{loremText}</p>
                <div className="col-10"></div>
                <button
                  type="button"
                  class="btn btn-primary col-2 justify-content-end"
                  onClick={() => removeCard(1)}
                >
                  resolved
                </button>
              </div>
            </div>
          </div>
          <div className="col-11 mt-2">
            <div class="card" id="card 2">
              <div class="card-header h1">Report</div>
              <div class="card-body row">
                <h5 class="card-title col-6">Poor customer service</h5>
                <p>{loremText}</p>
                <p></p>
                <div className="col-10"></div>
                <button
                  type="button"
                  class="btn btn-primary col-2 justify-content-end"
                  onClick={() => removeCard(2)}
                >
                  resolved
                </button>
              </div>
            </div>
          </div>
          <div className="col-11 mt-2">
            <div class="card" id="card 3">
              <div class="card-header h1">Report</div>
              <div class="card-body row">
                <h5 class="card-title col-6">
                  Unsatisfactory customer service
                </h5>
                <p>{loremText}</p>
                <div className="col-10"></div>
                <button
                  type="button"
                  class="btn btn-primary col-2 justify-content-end"
                  onClick={() => removeCard(3)}
                >
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

export default ViewCreditCardReports;