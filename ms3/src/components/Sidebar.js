import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import logo from "../imgs/logo_transparent.png";

const Sidebar = () => {
  const params = useParams();
  useEffect(() => {
    // Sidebar logic...
  });

  const navigate = useNavigate();

  return (
    <div className="col-3 min-vh-100 ">
      <CDBSidebar textColor="#fff" className=" bg-light pb-5">
        <CDBSidebarHeader className="d-flex justify-content-center">
          <img src={logo} height="100" className="p-0" alt="Logo" />
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content text-primary d-flex justify-content-center">
          <CDBSidebarMenu>
            <Link to="#" onClick={() => navigate(-1)} className="text-primary">
              <CDBSidebarMenuItem id="" icon="arrow-left" className="a">
                Back
              </CDBSidebarMenuItem>
            </Link>
            <Link
              to="/banker/homescreen"
              className="text-primary"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem id="home" icon="columns" className="a">
                Home
              </CDBSidebarMenuItem>
            </Link>
            <Link
              to="/banker/viewclients"
              className="text-primary"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem id="viewclients" className="a" icon="table">
                Clients
              </CDBSidebarMenuItem>
            </Link>
            <Link
              to="/banker/termsandconditions"
              className="text-primary"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem
                id="termsandconditions"
                className="a"
                icon="book"
              >
                Terms and Conditions
              </CDBSidebarMenuItem>
            </Link>
            <Link
              to="/banker/privacypolicy"
              className="text-primary"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem id="privacypolicy" className="a" icon="sign">
                Privacy Policy
              </CDBSidebarMenuItem>
            </Link>
            <Link
              to="/banker/login"
              className="text-primary"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem className="a" icon="user">
                Logout
              </CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
