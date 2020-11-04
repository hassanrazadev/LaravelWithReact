import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/app.css'

import NavBar from "./components/NavBar";

class App extends Component{
    render() {
        return (
            <NavBar />
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('index'));
