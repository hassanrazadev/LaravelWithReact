import React,{Component,useEffect, useState} from 'react'
import Layout from "../../../components/Layout";
import {withAuth} from "../../../components/AuthContext";
import FormField from "../../../components/FormField";
import {Formik} from 'formik'
import * as Yup from 'yup'
import CatForm from "./CatForm";

const INITIAL_STATE = {
    fields: {
        email: '',
        password: '',
    },
    error: null
};

class AddCategory extends Component{

    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE}
    }

    componentDidMount() {
        this.props.app.setLoading(false)
    }

    render() {
        return <React.Fragment>
            <Layout>
                <h1>Add Category</h1>
                <Formik initialValues={this.state.fields} onSubmit={
                    () => {
                        console.log('asd')
                    }
                } >
                    {({ errors, status, touched, isValid, dirty }) => (
                        <CatForm errors={errors} touched={touched} isValid={isValid} dirty={dirty} />
                    )}
                </Formik>
            </Layout>
        </React.Fragment>
    }
}

export default withAuth(AddCategory);
