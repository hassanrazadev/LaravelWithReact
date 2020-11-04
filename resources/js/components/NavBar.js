import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import routes from "../config/routes";

// pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

function NavBar () {
    return <React.Fragment>
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <NavLink className="navbar-brand" to={routes.home}>LaReact</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to={routes.home}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to={routes.login} >Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to={routes.register}>Register</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            <Switch>
                <Route path={routes.home} exact component={Home} />
                <Route path={routes.login} component={Login} />
                <Route path={routes.register}  component={Register} />
            </Switch>

        </Router>
    </React.Fragment>
}
export default NavBar;
