import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./styles/sidebar.css";
import logo from "../imgs/logo_transparent.png";
const AdminSidebar = () => {
  useEffect(() => {
    console.log(window.location.href);
    switch (window.location.href) {
      case "http://localhost:3000/admin/technicalissues":
        document.getElementById("technicalissues").classList.add("fw-bold");
        break;
      case "http://localhost:3000/admin/homescreen":
        document.getElementById("home").classList.add("fw-bold");
        break;
      case "http://localhost:3000/admin/privacypolicy":
        document.getElementById("privacypolicy").classList.add("fw-bold");
        break;
      case "http://localhost:3000/admin/termsandconditions":
        document.getElementById("termsandconditions").classList.add("fw-bold");
        break;
      case "http://localhost:3000/admin/createaccount":
        document.getElementById("create").classList.add("fw-bold");
        break;
    }
  });
  const navigate = useNavigate();
  return (
    <div className="col-3 min-vh-100 p-0 m-0">
      <CDBSidebar textColor="#fff" className="bg-light pb-5">
        <CDBSidebarHeader className=" d-flex justify-content-center">
          <img src={logo} height="100" className="p-0" />
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link to="#" onClick={() => navigate(-1)} className="text-primary">
              <CDBSidebarMenuItem id="" icon="arrow-left" className="a">
                Back
              </CDBSidebarMenuItem>
            </Link>
            <NavLink
              exact
              to="/admin/homescreen"
              activeClassName="activeClicked">
              <CDBSidebarMenuItem
                id="home"
                className="text-primary a"
                icon="columns">
                Homescreen
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/admin/technicalissues"
              activeClassName="activeClicked">
              <CDBSidebarMenuItem
                id="technicalissues"
                className="text-primary a"
                icon="table">
                Technical Issues
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/admin/createaccount"
              activeClassName="activeClicked">
              <CDBSidebarMenuItem
                id="create"
                className="text-primary a"
                icon="table">
                Create Account
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/admin/termsandconditions"
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
              to="/admin/privacypolicy"
              activeClassName="activeClicked">
              <CDBSidebarMenuItem
                id="privacypolicy"
                className="text-primary a"
                icon="sign">
                Privacy Policy
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/login" activeClassName="activeClicked">
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
export default AdminSidebar;
