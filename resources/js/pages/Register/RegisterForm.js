import React from 'react'
import FormField from "../../components/FormField";
import {Form, ErrorMessage} from 'formik'

function RegisterForm(props){
    return <React.Fragment>
        <div className="container-fluid h-100vh d-flex w-100 align-items-center py-3">
            <div className="row justify-content-center w-100">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="text-center">Register</h5>
                        </div>
                        <div className="card-body">
                            <Form>
                                <FormField id="name" name="name" placeholder="Name" label="Name:" type="text"
                                           classes={(props.errors.name && props.touched.name ? 'error' : '')}
                                />
                                <FormField id="email" name="email" placeholder="Email" label="Email:" type="email"
                                           classes={(props.errors.email && props.touched.email ? 'error' : '')}
                                />
                                <FormField id="password" name="password" placeholder="Password" label="Password:"
                                           type="password"
                                           classes={(props.errors.password && props.touched.password ? 'error' : '')}
                                />
                                <FormField id="confirm_password" name="confirm_password" placeholder="Confirm Password"
                                           label="Confirm Password:" type="password"
                                           classes={(props.errors.confirm_password && props.touched.confirm_password ? 'error' : '')}
                                />
                               <button className="btn btn-block btn-primary">Register</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default RegisterForm;
