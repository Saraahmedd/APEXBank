import React, { Button } from "react";
import { useEffect } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { BellFill, PersonCircle } from "react-bootstrap-icons";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./styles/sidebar.css";
import logo from "../imgs/logo_transparent.png";
const Sidebar = () => {
  const params = useParams();
  useEffect(() => {
    console.log(window.location.href, params.id);
    console.log("http://localhost:3000//banker/viewclientdata/" + params.id);
    switch (window.location.href) {
      case "http://localhost:3000/banker/viewclients":
      case "http://localhost:3000/banker/viewclientdata/" + params.id:
      case "http://localhost:3000/banker/viewclienttransactions":
      case "http://localhost:3000/banker/viewcreditcards/" + params.id:
      case "http://localhost:3000/banker/viewloans/" + params.id:
      case "http://localhost:3000/banker/viewreports/" + params.id:
      case "http://localhost:3000/banker/viewsingleCC":
      case "http://localhost:3000/banker/viewsingleloan":
      case "http://localhost:3000/banker/viewtransactions":
        document.getElementById("viewclients").classList.add("fw-bold");
        break;
      case "http://localhost:3000/banker/homescreen":
        document.getElementById("home").classList.add("fw-bold");
        break;
      case "http://localhost:3000/banker/privacypolicy":
        document.getElementById("privacypolicy").classList.add("fw-bold");
        break;
      case "http://localhost:3000/banker/termsandconditions":
        document.getElementById("termsandconditions").classList.add("fw-bold");
        break;
    }
  });

  return (
    <div className="col-3 min-vh-100 ">
      <CDBSidebar textColor="#fff" className=" bg-light pb-5">
        <CDBSidebarHeader className=" d-flex justify-content-center">
          <img src={logo} height="100" className="p-0" />
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content text-primary">
          <CDBSidebarMenu>
            <NavLink
              exact
              to="/banker/homescreen"
              activeClassName="activeClicked">
              <CDBSidebarMenuItem
                id="home"
                icon="columns"
                className="text-primary a">
                Home
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/banker/viewclients"
              activeClassName="activeClicked">
              <CDBSidebarMenuItem
                id="viewclients"
                className="text-primary a"
                icon="table">
                Clients
              </CDBSidebarMenuItem>
            </NavLink>
            {/* <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="text-primary" icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink> */}
            {/* <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="text-primary" icon="chart-line">
                Analytics
              </CDBSidebarMenuItem>
            </NavLink> */}
            <NavLink
              exact
              to="/banker/termsandconditions"
              activeClassName="activeClicked">
              <CDBSidebarMenuItem
                id="termsandconditions"
                className="text-primary a"
                icon="book">
                Terms and Conditions
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/banker/privacypolicy"
              activeClassName="activeClicked">
              <CDBSidebarMenuItem
                id="privacypolicy"
                className="text-primary a"
                icon="sign">
                Privacy Policy
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/banker/login" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="text-primary a" icon="user">
                Logout
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};
export default Sidebar;
