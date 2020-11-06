import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/app.css'

import NavBar from "./components/NavBar";

import AuthContext from "./components/AuthContext";
import {Sugar} from 'react-preloaders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn') !== 'false' || false,
            user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
            isLoading: true,
            setLoading: this.setLoading,
            setLoggedIn: this.setLoggedIn,
            showToast : toast
        }
    }

    setLoggedIn = (isLoggedIn, user = null) => {
        this.setState({isLoggedIn: isLoggedIn, user: user});
        localStorage.setItem('isLoggedIn', isLoggedIn);
        localStorage.setItem('user', JSON.stringify(user));
    }

    setLoading = (boolean) => {
        this.setState({isLoading: boolean})
    };


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
