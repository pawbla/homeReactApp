import React, { useEffect, useState } from 'react';
import MyProfilePresentational from './MyProfilePresentational';
import MainSection from '../MainSection/MainSection';
import { connect } from "react-redux";
import {callGET, setFetchedData} from '../../actions/';
import {callGetApi} from '../../libs/callRestApi';

const pageTitle = "Mój profil";
const getUserEndpoint = 'user';
const errorMsg = "Nie można pobrać danych ze strony.";

function MyProfile(props) {

    const initState = {firstName: "", lastName: "", email: ""};

    const [values, setText] = useState(initState);

    useEffect(() => {
      onEnter();
     }, []);

     const onEnter = async() => {
      const response = await props.callGET(getUserEndpoint, `?login=${props.user}`, errorMsg);
      setText(response);
     }

     const onChange = (event) => {
        event.preventDefault();
        setText({...values, [event.target.name]: event.target.value});
    }

    return (
        <div>
            {props.reqId === getUserEndpoint ? <MyProfilePresentational datas={props.datas}
                                      onChange={onChange}
                                      values={values} /> : <div></div>}
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
  
  const mapDispatchToProps = {callGET};

export default MainSection(connect(mapStateToProps, mapDispatchToProps)(MyProfile), pageTitle);