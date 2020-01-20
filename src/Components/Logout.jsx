import React, { useEffect } from 'react';
import { logOutUserOrError } from '../actions/';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Logout(props) {

    useEffect(() => {
        props.logOutUserOrError();
        alert("Użutykownik został wylogowany");
    });
    return <Redirect to={{ pathname: '/login'}} />
}

const mapDispatchToProps = { logOutUserOrError };

export default connect(null, mapDispatchToProps) (Logout);