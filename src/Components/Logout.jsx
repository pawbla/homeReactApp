import React, { useEffect } from 'react';
import { logOutUser } from '../actions/';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Logout(props) {

    useEffect(() => {
        props.logOutUser();
        alert("Użutykownik został wylogowany");
    });
    return <Redirect to={{ pathname: '/login'}} />
}

const mapDispatchToProps = { logOutUser };

export default connect(null, mapDispatchToProps) (Logout);