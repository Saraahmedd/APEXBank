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
const AdminSidebar = () => {
  return (
    <div className="col-3 min-vh-100 p-0 m-0">
      <CDBSidebar textColor="#fff" className="bg-primary pb-5">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <h4 className="text-decoration-none" style={{ color: "inherit" }}>
            Sidebar
          </h4>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to="/admin/homescreen"
              activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Homescreen</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/admin/technicalissues"
              activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">
                technical issues
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/termsandconditions"
              activeClassName="activeClicked">
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
      </CDBSidebar>
    </div>
  );
};
export default AdminSidebar;
