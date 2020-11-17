import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import {Aperture, Share2, Package, LogOut} from "react-feather";
import React from 'react'
import {withAuthContext} from "./AuthContext";
import {NavLink} from "react-router-dom";
import routes from "../config/routes";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

const SideNav = (props) =>  (
    <PerfectScrollbar>
        <ProSidebar breakPoint={"md"} toggled={props.app.isSideBarToggle} onToggle={props.app.toggleSidebar}>

            <SidebarHeader>
                <NavLink exact to={routes.home}>LaReact</NavLink>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem icon={<Aperture />}>
                        <NavLink exact to={routes.home}>Dashboard</NavLink>
                    </MenuItem>

                    <SubMenu title="Category" icon={<Share2 />}>
                        <MenuItem>
                            <NavLink to={routes.categories_add}>Add</NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to={routes.categories_manage}>Manage</NavLink>
                        </MenuItem>
                    </SubMenu>

                    <SubMenu title="Product" icon={<Package />}>
                        <MenuItem>
                            <NavLink to={routes.products_add}>Add</NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to={routes.products_manage}>Manage</NavLink>
                        </MenuItem>
                    </SubMenu>

                    <MenuItem icon={<LogOut />}>
                        <NavLink onClick={() => {props.app.setLoggedIn(false)}} to={routes.home}>Logout</NavLink>
                    </MenuItem>
                </Menu>
            </SidebarContent>
        </ProSidebar>
    </PerfectScrollbar>
)
export default withAuthContext(SideNav);
