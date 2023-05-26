import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/footer";
const maleAvatar = require("../../imgs/maleAvatar.png");
const femaleAvatar = require("../../imgs/femaleAvatar.png");

const ViewClientsScreen = () => {
  const clients = [
    {
      id: 0,
      name: "John Doe",
      icon: <img src={maleAvatar} alt="Male avatar"></img>,
    },
    {
      id: 1,
      name: "Jessica Smith",
      icon: <img src={femaleAvatar} alt="Male avatar"></img>,
    },
    {
      id: 2,
      name: "Liam Taylor",
      icon: <img src={maleAvatar} alt="Male avatar"></img>,
    },
  ];

  return (
    <>
      <div className="bg-light" style={{ display: "flex" }}>
        <div className="column" style={{ flex: "1" }}>
          <Sidebar />
        </div>
        <div className="column m-4" style={{ flex: "3" }}>
          <h2>Clients</h2>
          <hr />
          <div className="row">
            {clients.map((client) => (
              <Card
                key={client.id}
                className="mb-3 col-4 m-2"
                style={{ width: "18rem" }}
                as={Link}
                to={`/banker/viewClientData/${client.id}`}>
                <Card.Body
                  className="d-flex align-items-center justify-content-center col"
                  style={{ textDecoration: "none", textAlign: "left" }}>
                  <div className="row" style={{ marginRight: "10px" }}>
                    {client.icon}
                  </div>
                  <Card.Title
                    className="row"
                    style={{ textDecoration: "none" }}>
                    {client.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ViewClientsScreen;
