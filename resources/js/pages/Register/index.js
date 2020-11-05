import React, {Component} from 'react'
import RegisterForm from "./RegisterForm";

import {Formik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import api from "../../config/api";
import {withoutAuth} from "../../components/AuthContext";
import {Redirect} from 'react-router-dom'
import routes from "../../config/routes";

const INITIAL_STATE = {
    fields: {
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    },
    error: null
};

class Register extends Component{

    constructor(props) {
        super(props);
        this.state = {... INITIAL_STATE}
    }

    render() {
        return (
            <Formik initialValues={this.state.fields}
                    onSubmit={ fields => {
                        axios.post(api.register, fields)
                            .then(res => {
                                console.log(res);
                                this.props.app.isLoggedIn = true
                                this.props.app.user = res.data.data.user
                                window.location.href = routes.home
                            })
                            .catch(res => {
                                console.log(res)
                            })
                    }}

                    validationSchema = {
                        Yup.object().shape({
                            name: Yup.string()
                                .min(5, 'Name must be at least 5 characters.')
                                .required('Name is required'),
                            email: Yup.string()
                                .email('Must be a valid email address.')
                                .required('Email is required'),
                            password: Yup.string()
                                .min(6, 'Password must be at least 5 characters.')
                                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/, 'Password must contains lower case, upper case and  numbers')
                                .required('Password is required'),
                            confirm_password: Yup.string()
                                .oneOf([Yup.ref('password'), null], 'Password must match')
                                .required('Confirm password is required')
                        })
                    }
            >
                {({ errors, status, touched, isValid, dirty }) => (
                    <RegisterForm errors={errors} touched={touched} isValid={isValid} dirty={dirty} />
                )}
            </Formik>
        )
    }
}

export default withoutAuth(Register);
