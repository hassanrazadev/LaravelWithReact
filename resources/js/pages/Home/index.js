import React,{useEffect} from 'react'
import {withAuthContext} from "../../components/AuthContext";
import PageContent from "./PageContent";

function Home(props){

    useEffect(() => {
        if(props.app.isLoading){
            props.app.setLoading(false)
        }
    })

    return <React.Fragment>
        <PageContent>
            <h1>Hello, {props.app.user.name}</h1>
            <div className="row widget-wrapper">
                <div className="col-md-4">
                    <div className="widget bg-success"></div>
                </div>
                <div className="col-md-4">
                    <div className="widget bg-info"></div>
                </div>
                <div className="col-md-4">
                    <div className="widget bg-danger"></div>
                </div>
            </div>
        </PageContent>
    </React.Fragment>
}

export default withAuthContext(Home);
