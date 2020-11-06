import React from 'react'
import {Redirect} from 'react-router-dom'
import routes from "../config/routes";

const AuthContext = React.createContext(null);

/**
 * user must logged in
 * @param Component
 * @returns {function(*): *}
 */
const withAuth = Component => props => (
    <AuthContext.Consumer>
        {({app}) => {
                return app.isLoggedIn ?  <Component app={app} {...props}/> : <Redirect to={routes.login} />
        }}
    </AuthContext.Consumer>
)

/**
 * user must not logged in
 * @param Component
 * @returns {function(*): *}
 */
const withoutAuth = Component => props => (
    <AuthContext.Consumer>
        {({app}) => {
            return !app.isLoggedIn ?  <Component app={app} {...props}/> : <Redirect to={routes.home} />
        }}
    </AuthContext.Consumer>
)

/**
 * user might or might logged in
 * @param Component
 * @returns {function(*): *}
 */
const withAuthContext = Component => props => (
    <AuthContext.Consumer>
        {({app}) => {
            return <Component app={app} {...props}/>
        }}
    </AuthContext.Consumer>
)

export default AuthContext;
export {withAuth, withoutAuth, withAuthContext};
