import React, { useEffect } from 'react';
import ManageUsersPresentational from './ManageUsersPresentational'; 
import { connect } from "react-redux";
import {callGET, callDELETE} from '../../actions/';
import MainSection from '../MainSection/MainSection';

const usersEndpoint = 'users';
const deleteEndpoint = 'deleteUser';

const errorMsg = "Nie można pobrać danych ze strony.";
const deleteErrMsg = "Wystąpił problem podczas usuwania użytkownika";

const pageTitle = "Użytkownicy";

function ManageUsers(props) {

    useEffect(() => {
        props.callGET(usersEndpoint, "", errorMsg)
     }, []);

    /*
    
    
    const onDelete = async (id) => {
        await props.callDELETE(deleteEndpoint, id, deleteErrMsg);
        window.location.reload(); 
    }*/

    return (
        <div>  
            <MainSection component={ManageUsersPresentational} 
                reqId = {props.reqId}
                endpoint = {usersEndpoint}
                users={props.datas} 
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