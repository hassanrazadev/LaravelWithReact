import React from "react";
import {NavLink} from "react-router-dom";

import routes from "../config/routes";
import {withAuthContext} from "./AuthContext";

function NavBar (props) {
    return <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink className="navbar-brand d-lg-none d-md-inline-block mr-auto" to={routes.home}>LaReact</NavLink>
            <button onClick={props.app.toggleSidebar} className="navbar-toggler order-first" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav w-100">
                    {
                        props.app.isLoggedIn &&
                        <React.Fragment>
                            <li className="nav-item ml-auto">
                                <button className="nav-link btn btn-link" onClick={() => { props.app.setLoggedIn(false) }} >Logout</button>
                            </li>
                        </React.Fragment>
                    }

                    {
                        !props.app.isLoggedIn &&
                        <React.Fragment>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to={routes.login} >Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to={routes.register}>Register</NavLink>
                            </li>
                        </React.Fragment>
                    }
                </ul>
            </div>
        </nav>
    </React.Fragment>
}
export default withAuthContext(NavBar);
