import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import routes from "../config/routes";
import {withAuthContext} from "./AuthContext";
// pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

function NavBar (props) {
    return <React.Fragment>
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <NavLink className="navbar-brand" to={routes.home}>LaReact</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100">
                        {
                            props.app.isLoggedIn &&
                                <React.Fragment>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact to={routes.home}>Home</NavLink>
                                    </li>
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

            <Switch>
                <PrivateRoute path={routes.home} exact component={Home} />
                <Route path={routes.login} component={Login} />
                <Route path={routes.register}  component={Register} />
            </Switch>

        </Router>
    </React.Fragment>
}
export default withAuthContext(NavBar);
