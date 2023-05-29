import React, { useState } from "react";
import Datatable from "../../components/table";
import Grid from "../../components/grid";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/footer";
import Notification from "../../components/notification";
import Message from "../../components/client/Message";

const ViewCreditCardReports = () => {
  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam condimentum libero, id efficitur quam accumsan eu. Aenean gravida erat id risus aliquet, ac consequat quam malesuada. In hac habitasse platea dictumst. Proin eget feugiat metus. Sed vitae augue mauris. Phasellus posuere tincidunt risus sed faucibus. Nullam aliquam tortor non tincidunt cursus. Suspendisse potenti. Duis facilisis arcu vitae semper vehicula. Vestibulum ac gravida nisi.";

  const [resolve, setResolve] = useState(false);
  const [descriptions, setDescriptions] = useState({});

  const removeCard = (number) => {
    if (document.getElementById(`card ${number}`)) {
      console.log("ALOOOOOI");
      document.getElementById(`card ${number}`).classList.add("d-none");
      setResolve(true);
    }
  };

  const handleDescriptionChange = (event, number) => {
    setDescriptions((prevDescriptions) => ({
      ...prevDescriptions,
      [number]: event.target.value,
    }));
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="row bg-light">
          <Sidebar></Sidebar>
        </div>
        <div className="column m-3" style={{ flex: "3" }}>
          <Notification></Notification>
          {resolve && (
            <Message
              variant="success"
              children="Report resolved successfully!"
              showMessage={resolve}
              setShowMessage={setResolve}
            ></Message>
          )}
          <h1 className="pt-4 px-4">Reports by client</h1>
          <div className="col-11 mt-5">
            <div class="card m-2" id="card 1">
              <div class="card-header h4">Stolen credit card</div>
              <div class="card-body row">
                <p>{loremText}</p>
                <div className="col-9">
                  <textarea
                    className="form-control"
                    placeholder="Add description..."
                    value={descriptions[1] || ""}
                    onChange={(e) => handleDescriptionChange(e, 1)}
                  ></textarea>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-end">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => removeCard(1)}
                  >
                    Resolve
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-11 mt-2">
            <div class="card m-2" id="card 2">
              <div class="card-header h4">Poor customer service</div>
              <div class="card-body row">
                <p>{loremText}</p>
                <div className="col-9">
                  <textarea
                    className="form-control"
                    placeholder="Add description..."
                    value={descriptions[2] || ""}
                    onChange={(e) => handleDescriptionChange(e, 2)}
                  ></textarea>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-end">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => removeCard(1)}
                  >
                    Resolve
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-11 mt-2">
            <div class="card m-2" id="card 3">
              <div class="card-header h4">Unsatisfactory customer service</div>
              <div class="card-body row ">
                <p>{loremText}</p>
                <div className="col-9">
                  <textarea
                    className="form-control"
                    placeholder="Add description..."
                    value={descriptions[3] || ""}
                    onChange={(e) => handleDescriptionChange(e, 3)}
                  ></textarea>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-end">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => removeCard(1)}
                  >
                    Resolve
                  </button>
                </div>
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
