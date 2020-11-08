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
        <PageContent/>
    </React.Fragment>
}

export default withAuthContext(Home);
