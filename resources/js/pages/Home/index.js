import React,{useEffect} from 'react'
import {withAuthContext} from "../../components/AuthContext";
import PageContent from "./PageContent";
import {Aperture} from "react-feather";

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
                    <div className="widget bg-success">
                        <Aperture className="widget-icon"/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="widget bg-info">
                        <Aperture className="widget-icon"/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="widget bg-danger">
                        <Aperture className="widget-icon"/>
                    </div>
                </div>
            </div>
        </PageContent>
    </React.Fragment>
}

export default withAuthContext(Home);
