import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams, NavLink
} from "react-router-dom";
import routes from "../config/routes";

function NavBar () {
    return <React.Fragment>
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to={routes.home}>LaravelWithReact</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={routes.home}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={routes.login} >Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={routes.register}>Register</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>



        </Router>
    </React.Fragment>
}
export default NavBar;
