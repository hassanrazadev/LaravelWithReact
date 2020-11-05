import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/app.css'

import NavBar from "./components/NavBar";

import AuthContext from "./components/AuthContext";

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn:  false,
            user:  null,
            isLoading: true,
            setLoading: this.setLoading
        }
    }

    setLoading = (boolean) => {
        this.setState({isLoading: boolean})
    };

    render() {

        return (
            <AuthContext.Provider value={ {app: this.state}} >
                <NavBar />
            </AuthContext.Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('index'));
