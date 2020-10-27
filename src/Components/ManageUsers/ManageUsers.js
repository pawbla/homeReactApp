import React, { useEffect } from 'react';
import ManageUsersPresentational from './ManageUsersPresentational'; 
import { connect } from "react-redux";
import {callGET, callDELETE} from '../../actions/';
import MainSection from '../MainSection/MainSection';

const usersEndpoint = 'users';
const errorMsg = "Nie można pobrać danych ze strony.";
const pageTitle = "Użytkownicy";

function ManageUsers(props) {

    useEffect(() => {
        props.callGET(usersEndpoint, "", errorMsg);
     }, []);

    const refresh = () => {
        props.callGET(usersEndpoint, "", errorMsg);
    }

    return (
        <div>  
            <MainSection component={ManageUsersPresentational} 
                reqId = {props.reqId}
                endpoint = {usersEndpoint}
                users={props.datas} 
                refresh = {refresh}
                title={pageTitle}/>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
      datas: state.fetchedData.payload,
      reqId: state.fetchedData.id
    }
  };
  
const mapDispatchToProps = {callGET, callDELETE};

export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers);