import React, { useState, useEffect } from 'react';
import RegisterPresentational from './RegisterPresentational';
import {registerUser} from '../../actions/';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

const fields = [
    {
        type: 'text',
        placeholder: 'Login',
        name: 'login',
        validate: true
    },
    {
        type: 'password',
        placeholder: 'Hasło',
        name: 'password',
        validate: true
    },
    {
        type: 'text',
        placeholder: 'Imię',
        name: 'fName',
        validate: true
    },
    {
        type: 'text',
        placeholder: 'Nazwisko',
        name: 'lName',
        validate: false
    },
    {
        type: 'text',
        placeholder: 'email',
        name: 'email',
        validate: true
    },   
]



function Register(props) {

    const [values, setText] = useState({login: "", password: "", fName: "", lName: "", email: ""});
    const [errors, setError] = useState({});
    const [progress, setProgress] = useState(false);

    const validateField = () => {
        let errorObj = {};
        let ret = false;
        fields.forEach(field => {       
            let cond = values[field.name]  === "" && field.validate ? true : false;    
            errorObj[field.name] = cond;
            if (ret === false && cond === true) {
                ret = true;
            }
        });
        setError(errorObj);
        return ret;
    }

    const onChange = (event) => {
        event.preventDefault();
        setText({...values, [event.target.name]: event.target.value});
        setError({...errors, [event.target.name]: event.target.value ? false : true})
    }

    const onSubmit = async (event) => {
        setProgress(true);
        
        event.preventDefault();
        if (validateField()) {
            alert("Pola zaznaczone na czerwono powinny zostać uzupełnione");
        } else {
            await props.registerUser(values);  
        }
        setProgress(false);
    }

    return  (
        <div>
            <RegisterPresentational 
                errors={errors}
                fields={fields} 
                value={values}
                onChange={onChange}
                onSubmit={onSubmit}
                showProgress={progress}/>
        </div>
    );
}

const mapDispatchToProps = {registerUser};

export default withRouter(connect(null, mapDispatchToProps)(Register));
