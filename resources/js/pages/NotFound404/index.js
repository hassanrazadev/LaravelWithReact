import React from 'react'
import {NavLink} from "react-router-dom";
import routes from "../../config/routes";

function NotFound404 (props){
    return <React.Fragment>
        <div className="container">
            <div className="row justify-content-center align-items-center h-100vh h-100">
                <div className="col-12 text-center">
                    <h1>404 Not Found</h1>
                    <NavLink to={routes.home}>Home</NavLink>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default NotFound404;
