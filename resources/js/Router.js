import React from 'react';
import {BrowserRouter, Link, NavLink, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound'
// User is LoggedIn
import PrivateRoute from './PrivateRoute'
import Dashboard from './pages/user/Dashboard/Dashboard';
const Main = props => (
    <Switch>
        {/*User might LogIn*/}
        <NavLink exact to='/' component={Home}/>
        {/*User will LogIn*/}
        <NavLink to='/login' component={Login}/>
        <NavLink to='/register' component={Register}/>
        {/* User is LoggedIn*/}
        <PrivateRoute to='/dashboard' component={Dashboard}/>
        {/*Page Not Found*/}
        <NavLink component={NotFound}/>
    </Switch>
);
export default Main;
