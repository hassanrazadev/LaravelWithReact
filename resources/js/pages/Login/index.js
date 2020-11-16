import React,{Component} from 'react'
import LoginForm from "./LoginForm";

import {Formik} from 'formik'
import * as Yup from 'yup'
import api from "../../config/api";
import {withoutAuth} from "../../components/AuthContext";
import routes from "../../config/routes";


const INITIAL_STATE = {
    fields: {
        email: '',
        password: '',
    },
    error: null
};

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE}
    }

    componentDidMount() {
        this.props.app.setLoading(false)
    }

    render() {
        return (
            <Formik initialValues={this.state.fields}
                    onSubmit={ fields => {
                        this.props.app.axios.post(api.login, fields)
                            .then(res => {
                                this.props.app.setLoggedIn(true, res.data.data.user, res.data.data.access_token)
                                this.props.history.push(routes.home)
                            })
                            .catch(error => {
                                if (error.response){
                                    let response = error.response.data;
                                    this.props.app.showToast.error(response.message)
                                }
                            })
                    }}

                    validationSchema = {
                        Yup.object().shape({
                            email: Yup.string()
                                .email('Must be a valid email address.')
                                .required('Email is required'),
                            password: Yup.string()
                                .min(6, 'Password must be at least 5 characters.')
                                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/, 'Password must contains lower case, upper case and  numbers')
                                .required('Password is required'),
                        })
                    }
            >
                {({ errors, status, touched, isValid, dirty }) => (
                    <LoginForm errors={errors} touched={touched} isValid={isValid} dirty={dirty} />
                )}
            </Formik>
        )
    }
}

const LoginLink = () => {
    return (
        <div>
            Already have an account? <a href={routes.login}>Login</a>
        </div>
    )
}

export  {LoginLink}
export default withoutAuth(Login);
