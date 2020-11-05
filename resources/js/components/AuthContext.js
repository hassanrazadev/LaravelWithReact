import React from 'react'
import {Redirect} from 'react-router-dom'
import routes from "../config/routes";

const AuthContext = React.createContext(null);

const withAuth = Component => props => (
    <AuthContext.Consumer>
        {({app}) => {
                return app.isLoggedIn ?  <Component {...props}/> : <Redirect to={routes.login} />
        }}
    </AuthContext.Consumer>
)

const withoutAuth = Component => props => (
    <AuthContext.Consumer>
        {({app}) => {
            return !app.isLoggedIn ?  <Component {...props}/> : <Redirect to={routes.home} />
        }}
    </AuthContext.Consumer>
)

export default AuthContext;
export {withAuth, withoutAuth};
