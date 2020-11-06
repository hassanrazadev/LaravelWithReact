import React from 'react'
import {withAuthContext} from "../../components/AuthContext";

function Home(props){
    return <React.Fragment>
        <div className="container-fluid d-flex align-items-center h-100vh">
            <div className="row w-100 justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h5 className="text-center">Dashboard</h5>
                        </div>
                        <div className="card-body">
                            <h4>Hello, </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default withAuthContext(Home);
