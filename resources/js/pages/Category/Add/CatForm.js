import React from 'react'
import FormField from "../../../components/FormField";
import {Form} from "formik";
function CatForm(props){
    return (
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
    )
}
export default CatForm
