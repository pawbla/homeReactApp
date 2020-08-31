import React, { useEffect, useState } from 'react';
import MyProfilePresentational from './MyProfilePresentational';
import MainSection from '../MainSection/MainSection';
import { connect } from "react-redux";
import {callGET, callPUT} from '../../actions/';

const pageTitle = "Mój profil";
const getUserEndpoint = 'user';
const errorMsgFetch = "Nie można pobrać danych ze strony.";

const updateEndpoint = 'updateUser';
const errorMsgPut = "Problem podczas aktualizacji danych.";

function MyProfile(props) {

    const initState = {firstName: "", lastName: "", email: ""};

    const [values, setText] = useState(initState);

    useEffect(() => {
      onEnter();
     }, []);

     const onEnter = async() => {
      const response = await props.callGET(getUserEndpoint, `?login=${props.user}`, errorMsgFetch);
      setText(response);
     }

     const onChange = (event) => {
        event.preventDefault();
        setText({...values, [event.target.name]: event.target.value});
    }

    const onSubmit = async (event) => {
      event.preventDefault();
      await props.callPUT(updateEndpoint, values.user_id, values, errorMsgPut);
      window.location.reload(); 
    }

    return (
        <div>
            {props.reqId === getUserEndpoint ? <MyProfilePresentational datas={props.datas}
                                      onChange={onChange}
                                      values={values} 
                                      onSubmit={onSubmit}/> : <div></div>}
        </div>
    );
}

const mapStateToProps = (state) => {

    return {
      datas: state.fetchedData.payload,
      reqId: state.fetchedData.id,
      user: state.loggedUser.user,
      token: state.loggedUser.jwtToken
    }
  };
  
  const mapDispatchToProps = {callGET, callPUT};

export default MainSection(connect(mapStateToProps, mapDispatchToProps)(MyProfile), pageTitle);