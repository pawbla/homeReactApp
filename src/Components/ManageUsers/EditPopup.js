import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import {callPUT} from '../../actions/';

import EditPopupPresentational from './EditPopupPresentational';

function EditPopup(props) {

    const updateEndpoint = 'updateUser';
    const errorMessage = "Problem podczas aktualizacji danych.";

    const [values, setValues] = useState({firstName: "", lastName: "", email: "", enabled: true, role: {role: ""}});

    useEffect(() => {
        setValues({...props.item, ['role']: {role: props.item.role}});
     }, []);

    const onChange = (event) => {
        event.preventDefault();
        if (event.target.name === 'role') {
            setValues({...values, [event.target.name]: {role: "ROLE_" + event.target.value}});
        } else {
            setValues({...values, [event.target.name]: event.target.value});
        }  
    }

    const toggleCheck = () => {
        setValues({...values, ["enabled"]: !values.enabled})
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const resp = await props.callPUT(updateEndpoint, values.user_id, values, errorMessage);
        if (!resp.hasError) {
            props.hidePopup();
            props.reload();
        }
    }

    return(
        <EditPopupPresentational onChange={onChange}
            toggleCheck={toggleCheck}
            value={values}
            onSubmit={onSubmit}
            hidePopup={props.hidePopup}/>
    )
}

const mapDispatchToProps = {callPUT};

export default connect(null, mapDispatchToProps)(EditPopup);