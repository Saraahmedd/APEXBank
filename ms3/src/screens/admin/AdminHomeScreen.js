import AdminSidebar from "../../components/adminSidebar";
import CardComponent from "../../components/CardComponent";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";
import Footer from "../../components/footer";
import Inbox from "../../components/Inbox";
import Message from "../../components/client/Message";

const AdminHomeScreen = () => {
  const [notification, setNotification] = new useState(0);

  const removeCard = (number) => {
    if (document.getElementById(`card ${number}`)) {
      document.getElementById(`card ${number}`).classList.add("d-none");
    }
  };

  return (
    <>
      <div className="row">
        <AdminSidebar></AdminSidebar>
        <div className="col-9 p-4">
          {notification == 1 && (
            // <div
            //   class="alert alert-success position-absolute"
            //   role="alert"
            //   style={{ left: "60%" }}
            // >
            //   Notification successfuly posted
            //   <button
            //     type="button"
            //     class="btn-close"
            //     data-bs-dismiss="alert"
            //     aria-label="Close"
            //     onClick={() => setNotification(false)}
            //   ></button>
            // </div>
            <Message
              variant="success"
              children="Notification posted successfully!"
              showMessage={notification}
              setShowMessage={setNotification}></Message>
          )}
          {notification == 2 && (
            // <div
            //   class="alert alert-success position-absolute"
            //   role="alert"
            //   style={{ left: "60%" }}
            // >
            //   Notification successfuly posted
            //   <button
            //     type="button"
            //     class="btn-close"
            //     data-bs-dismiss="alert"
            //     aria-label="Close"
            //     onClick={() => setNotification(false)}
            //   ></button>
            // </div>
            <Message
              variant="danger"
              children="missing fields"
              showMessage={notification}
              setShowMessage={setNotification}></Message>
          )}
          <h1 className="p-4">Welcome, Admin</h1>
          <div className="row flex-row">
            <div className="col-6 flex-col">
              <div className="col-12">
                <CardComponent
                  title="Admin Information"
                  data={[
                    { label: "Name", value: "Ahmed Mohsen" },
                    { label: "ID", value: "7394" },
                  ]}></CardComponent>
              </div>
              <div className="col-12">
                <CardComponent
                  title="Technical Issues Summary"
                  data={[
                    { label: "New issues", value: "34 " },
                    { label: "Unresolved issues", value: "7394" },
                    { label: "Total issues", value: "10000" },
                  ]}></CardComponent>
              </div>
            </div>
            <div className="col-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Post a new Announcement</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Announcement title
                  </h6>
                  <div className="input-group">
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      placeholder=""
                      aria-label="Username"
                      aria-describedby="basic-addon1"></input>
                  </div>

                  <h6 className="card-subtitle mt-4 text-muted">
                    Announcement content
                  </h6>
                  <div className="input-group">
                    <textarea
                      id="content"
                      className="form-control"
                      aria-label="With textarea"></textarea>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Post for clients
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Post for bankers
                    </label>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary mt-4"
                    onClick={() => {
                      if (
                        document.getElementById("content").value &&
                        document.getElementById("title").value
                      ) {
                        setNotification(1);
                      } else {
                        setNotification(2);
                      }
                    }}>
                    Publish notification
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-11 mt-4 pl-1">
            <Inbox></Inbox>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AdminHomeScreen;
