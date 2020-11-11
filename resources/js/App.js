import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { WaveLoading } from 'react-loadingg';
import axios from 'axios'

import AuthContext from "./components/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import routes from "./config/routes";
import api from "./config/api";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/app.css'
import '../css/custom.scss'

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn') || false,
            user: null,
            isUser: false,
            accessToken: localStorage.getItem('accessToken'),
            isSideBarToggle: false,
            toggleSidebar: this.toggleSidebar,
            isLoading: true,
            setLoading: this.setLoading,
            setLoggedIn: this.setLoggedIn,
            showToast : toast,
            axios: axios
        }
    }

    setLoggedIn = (isLoggedIn, user = null, accessToken = null) => {
        this.setState({isLoggedIn: isLoggedIn, user: user, accessToken: accessToken});
        localStorage.setItem('isLoggedIn', isLoggedIn);
        localStorage.setItem('accessToken', accessToken);
        if (!isLoggedIn){
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('accessToken');

            if (this.props.history)
                this.props.history.push(routes.login)
        }
    }

    setLoading = (boolean) => {
        this.setState({isLoading: boolean})
    };

    toggleSidebar = () => {
        this.setState({isSideBarToggle: !this.state.isSideBarToggle})
    }

    componentWillMount() {
        if (this.state.isLoggedIn){
            if (this.state.accessToken !== null){
                if (this.state.user === null){
                    axios.get(api.profile, {
                        headers: { 'Authorization': `Bearer ${this.state.accessToken}` }
                    })
                    .then(res => {
                        this.setState({user: res.data.data.user})
                        this.setState({isUser: true})
                    })
                    .catch(error => {
                        if (error.response.data.code === 401){
                            this.setLoggedIn(false)
                        }
                    })
                    .finally(() => {
                        this.setState({isLoading: false})
                    })
                }
            }else {
                this.setLoggedIn(false)
            }
        } else {
            this.setState({isUser: true})
        }
    }

    componentDidMount() {
        axios.interceptors.request.use((config) => {
            this.setState({isLoading: true});
            return config;
        }, (error) => {
            this.setState({isLoading: false});
            return Promise.reject(error);
        });

        axios.interceptors.response.use((response) => {
            this.setState({isLoading: false});
            return response;
        }, (error) => {
            this.setState({isLoading: false});
            return Promise.reject(error);
        });
    }


    render() {
        return (
            <AuthContext.Provider value={ {app: this.state}} >
                <React.Fragment>
                    {
                        this.state.isLoading &&
                        <div className="loader-container">
                            <WaveLoading size="large" color="#007bff"/>
                        </div>
                    }
                    {
                        this.state.isUser &&
                        <Router>

                            <Switch>
                                <PrivateRoute path={routes.home} exact component={Home} />
                                <Route path={routes.login} component={Login} />
                                <Route path={routes.register}  component={Register} />
                            </Switch>

                        </Router>
                    }
                    <ToastContainer/>
                </React.Fragment>
            </AuthContext.Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('index'));
