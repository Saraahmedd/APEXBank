import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="col-3 h-100 ">
      <CDBSidebar textColor="#fff" className="bg-primary pb-5">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <h4 className="text-decoration-none" style={{ color: "inherit" }}>
            Sidebar
          </h4>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/banker/viewclientdata"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="table">client data</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Analytics
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/termsandconditions"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="book">
                terms and conditions
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/privacypolicy" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="sign">
                privacy policy
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/login" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">logout</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};
export default Sidebar;
