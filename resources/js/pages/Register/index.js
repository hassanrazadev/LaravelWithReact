import React, {Component} from 'react'
import RegisterForm from "./RegisterForm";

import {Formik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import api from "../../config/api";
import {withoutAuth} from "../../components/AuthContext";
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

    componentDidMount() {
        this.props.app.setLoading(false)
    }

    render() {
        return (
            <Formik initialValues={this.state.fields}
                    onSubmit={ (fields, { setFieldError }) => {
                        this.props.app.setLoading(true);
                        this.props.app.axios.post(api.register, fields)
                            .then(res => {
                                this.props.app.setLoggedIn(true, res.data.data.user, res.data.data.access_token)
                                this.props.history.push(routes.home)
                            })
                            .catch(error => {
                                if (error.response){
                                    let response = error.response.data;
                                    if (response.code === 422){
                                        for (let error in response.data.errors){
                                            if(response.data.errors.hasOwnProperty(error)){
                                                setFieldError(error, response.data.errors[error])
                                            }
                                        }
                                    }
                                    this.props.app.showToast.error(response.message)
                                }
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
const RegisterLink = () => {
    return (
        <div>
            Don't have an account? <a href={routes.register}>Register</a>
        </div>
    )
}
export {RegisterLink}
export default withoutAuth(Register);
