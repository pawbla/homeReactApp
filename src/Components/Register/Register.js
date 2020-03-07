import React, { useState, useEffect } from 'react';
import RegisterPresentational from './RegisterPresentational';
import {registerUser} from '../../actions/';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

const fields = [
    {
        type: 'text',
        placeholder: 'Login',
        name: 'login'
    },
    {
        type: 'password',
        placeholder: 'Hasło',
        name: 'password'
    },
    {
        type: 'text',
        placeholder: 'Imię',
        name: 'fName'
    },
    {
        type: 'text',
        placeholder: 'Nazwisko',
        name: 'lName'
    },
    {
        type: 'text',
        placeholder: 'email',
        name: 'email'
    },   
]

function Register(props) {

    const [values, setText] = useState({});
    const [progress, setProgress] = useState(false);

    const onChange = (event) => {
        values[event.target.name] = event.target.value;
        setText(values);
    }

    const onSubmit = async (event) => {
        setProgress(true);
        //validate fields
        event.preventDefault();
        await props.registerUser(values.text, values.password);
        // if not ok popup
        setProgress(false);
    }

    return  (
        <div>
            <RegisterPresentational 
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
