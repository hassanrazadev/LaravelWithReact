import React from 'react'
import FormField from "../../components/FormField";
import {Form} from 'formik'

const LoginForm = (props) => {
    return <React.Fragment>
        <div className="container-fluid h-100vh d-flex w-100 align-items-center py-3">
            <div className="row justify-content-center w-100">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header text-white bg-primary">
                            <h5 className="text-center">Login</h5>
                        </div>
                        <div className="card-body">
                            <Form>
                                <FormField id="email" name="email" placeholder="Email" label="Email:" type="email"
                                           classes={(props.errors.email && props.touched.email ? 'error' : '')}
                                />
                                <FormField id="password" name="password" placeholder="Password" label="Password:"
                                           type="password"
                                           classes={(props.errors.password && props.touched.password ? 'error' : '')}
                                />
                                <button className="btn btn-block btn-primary" disabled={!(props.isValid && props.dirty)}>Login</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default LoginForm;
