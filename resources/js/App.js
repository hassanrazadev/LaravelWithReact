import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/app.css'

import NavBar from "./components/NavBar";

import AuthContext from "./components/AuthContext";
import {Sugar} from 'react-preloaders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import routes from "./config/routes";

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn') || false,
            user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
            accessToken: localStorage.getItem('accessToken'),
            isLoading: true,
            setLoading: this.setLoading,
            setLoggedIn: this.setLoggedIn,
            setAccessToken: this.setAccessToken,
            showToast : toast
        }
    }

    setLoggedIn = (isLoggedIn, user = null) => {
        this.setState({isLoggedIn: isLoggedIn, user: user});
        localStorage.setItem('isLoggedIn', isLoggedIn);
        localStorage.setItem('user', JSON.stringify(user));
        if (!isLoggedIn){
            localStorage.removeItem('user');
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('accessToken');

            if (this.props.history)
                this.props.history.push(routes.login)
        }
    }

    setLoading = (boolean) => {
        this.setState({isLoading: boolean})
    };

    setAccessToken = (token) => {
        this.setState({accessToken: token});
        localStorage.setItem('accessToken', token);
    }

    componentWillMount() {
        if (this.state.isLoggedIn){
            if (this.state.user === null)
                this.setLoggedIn(false)
        }
    }


    render() {
        return (
            <AuthContext.Provider value={ {app: this.state}} >
                <Sugar customLoading={this.state.isLoading} color={"#007bff"}/>
                <NavBar />
                <ToastContainer/>
            </AuthContext.Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('index'));
