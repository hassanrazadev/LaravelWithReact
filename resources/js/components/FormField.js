import React from 'react'
import {Field, ErrorMessage} from 'formik'

function FormField(props){
    return <React.Fragment>
        <div className={"form-group "  + (props.classes || "")}>
            <label htmlFor={props.id}>{props.label}</label>
            <Field type={props.type || "text"} placeholder={props.placeholder || props.label}
                   className={"form-control"} id={props.id} name={props.name}/>
            <ErrorMessage name={props.name} component="div" className="invalid-feedback"/>
        </div>
    </React.Fragment>
}

export default FormField;
