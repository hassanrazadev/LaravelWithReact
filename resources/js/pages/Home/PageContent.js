import React from 'react'
import {withAuth} from "../../components/AuthContext";
import Layout from "../../components/Layout";

const PageContent = (props) => {
    return <Layout>
        {props.children}
    </Layout>
}

export default withAuth(PageContent);
