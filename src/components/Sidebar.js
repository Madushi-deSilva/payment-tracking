import React, {Component} from 'react';
import { NavLink} from './NavbarElements';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
import '../App.css'
import './pages/Home.css';


class Sidebar extends Component {
    render() { 
        
        return ( 
            // -------sidebar------- 
            <div className="col-2 sidebarComponent">
            <CDBSidebar textColor="#fff" backgroundColor="#333" >
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        DASHBOARD
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu style={{ fontWeight: 'bold' }}>
                        <NavLink exact to="/home-main" activeClassName="activeClicked" className="sideNavlink">
                            <CDBSidebarMenuItem icon="columns" className="sideMenuitem">HOME</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/clients" activeClassName="activeClicked" className="sideNavlink">
                            <CDBSidebarMenuItem icon="user" className="sideMenuitem">CLIENTS</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/due-payments" activeClassName="activeClicked" className="sideNavlink">
                            <CDBSidebarMenuItem icon="table" className="sideMenuitem">DUE PAYMENTS</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/overdue-payments" activeClassName="activeClicked" className="sideNavlink">
                            <CDBSidebarMenuItem icon="envelope" className="sideMenuitem">OVERDUE PAYMENTS</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/received-payments" activeClassName="activeClicked" className="sideNavlink">
                            <CDBSidebarMenuItem icon="dollar-sign" className="sideMenuitem">RECEIVED PAYMENTS</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/reports" activeClassName="activeClicked" className="sideNavlink">
                            <CDBSidebarMenuItem icon="chart-line" className="sideMenuitem">REPORTS</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
         </div>
         );
    }
}
 
export default Sidebar;