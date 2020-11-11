import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import {Heart, Aperture} from "react-feather";
import React from 'react'
import {withAuthContext} from "./AuthContext";
import {NavLink} from "react-router-dom";
import routes from "../config/routes";

const SideNav = (props) =>  (
    <ProSidebar breakPoint={"md"} toggled={props.app.isSideBarToggle} onToggle={props.app.toggleSidebar}>

        <SidebarHeader>
            <NavLink exact to={routes.home}>LaReact</NavLink>
        </SidebarHeader>

        <SidebarContent>
            <Menu iconShape="circle">
                <MenuItem icon={<Aperture />}>
                    <NavLink exact to={routes.home}>Dashboard</NavLink>
                </MenuItem>
                <SubMenu title="Components" icon={<Heart />}>
                    <MenuItem>Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>
                </SubMenu>
            </Menu>
        </SidebarContent>
    </ProSidebar>
)
export default withAuthContext(SideNav);
