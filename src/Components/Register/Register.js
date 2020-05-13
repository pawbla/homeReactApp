import React, { useState, useEffect } from 'react';
import RegisterPresentational from './RegisterPresentational';
import {registerUser, setRegisteredInit} from '../../actions/';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

const fields = [
    {
        type: 'text',
        placeholder: 'Login',
        name: 'userName',
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
        name: 'firstName',
        validate: true
    },
    {
        type: 'text',
        placeholder: 'Nazwisko',
        name: 'lastName',
        validate: false
    },
    {
        type: 'text',
        placeholder: 'email',
        name: 'email',
        validate: false
    },   
]

function Register(props) {

    const [values, setText] = useState({userName: "", password: "", firstName: "", lastName: "", email: ""});
    const [errors, setError] = useState({});

    useEffect(() => {
        if(props.isRegistered) {
            alert("Użytkownik został zarejestrowany. \nPo zatwierdzeniu będziesz mógł się zalogować.");    
            props.history.push('/login');   
            props.setRegisteredInit();     
        }
      }, [props.isRegistered]);

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
        
        event.preventDefault();
        if (validateField()) {
            alert("Pola zaznaczone na czerwono powinny zostać uzupełnione");
        } else {
            props.registerUser(values);  
        }
    }

    return  (
        <div>
            <RegisterPresentational 
                errors={errors}
                fields={fields} 
                value={values}
                onChange={onChange}
                onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isRegistered: state.isUserRegistered.isRegistered
    }
};

const mapDispatchToProps = {registerUser, setRegisteredInit};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
