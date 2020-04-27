import React, {useState, useEffect} from 'react';
import DescriptionPresentational from './DescriptionPresentational';
import { connect } from "react-redux";
import {callPUT} from '../../actions/';

const updateEndpoint = 'updateUser';
const errorMessage = "Problem podczas aktualizacji danych.";

function Description(props) {

    const [values, setValues] = useState({firstName: "", lastName: "", email: "", enabled: true, role: {role: ""}});

    const onSubmit = (event) => {
        event.preventDefault();
        props.callPUT(updateEndpoint, values.id, values, errorMessage);
    }

    useEffect(() => {
        setValues({...props.item, ['role']: {role: props.item.role}});
     }, []);

    const onChange = (event) => {
        if (event.target.name === 'role') {
            setValues({...values, [event.target.name]: {role: event.target.value}});
        } else {
            setValues({...values, [event.target.name]: event.target.value});
        }
        
    }

    const toggleCheck = () => {
        setValues({...values, ["enabled"]: !values.enabled})
    }

    return (
        <div>
            <DescriptionPresentational onSubmit={onSubmit}
                                       onChange={onChange} 
                                       toggleCheck={toggleCheck}
                                       value={values}
                                       item={props.item}/>
        </div>
    )
}

const mapDispatchToProps = {callPUT};

export default connect(null, mapDispatchToProps)(Description);