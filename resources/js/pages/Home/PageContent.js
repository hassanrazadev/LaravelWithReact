import React from 'react'
import {withAuth} from "../../components/AuthContext";
import Layout from "../../components/Layout";

const PageContent = (props) => {
    return <Layout>
        <h1>Hello, {props.app.user.name}</h1>
    </Layout>
}

export default withAuth(PageContent);
