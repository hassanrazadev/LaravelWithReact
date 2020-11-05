import React from 'react';
import { Route } from 'react-router-dom';
import {withAuth} from "./AuthContext";

const PrivateRoute = ({Component: Component, ...props}) => {
    return (
        <Route {...props} render={ props => (
             <Component {...props} />
        )} />
    )
}
export default withAuth(PrivateRoute)
