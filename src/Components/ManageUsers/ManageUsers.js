import React, { useEffect } from 'react';
import ManageUsersPresentational from './ManageUsersPresentational'; 
import { connect } from "react-redux";
import {callGET} from '../../actions/';

const bStateInit = {

}

const usersEndpoint = 'users';
const errorMsg = "Nie można pobrać danych ze strony.";


function ManageUsers(props) {

    useEffect(() => {
        props.callGET(usersEndpoint, "", errorMsg)
     }, []);

    //example HTTP DELETE http://www.appdomain.com/users/123
    const onDelete = (event) => {
        console.log("On delete");
    }

    const onOpenItem = (event) => {

    }

    return (
        <div>
            {props.reqId === usersEndpoint ?  
            <ManageUsersPresentational users={props.datas} 
                onDelete={onDelete}
                onOpenItem={onOpenItem}/>
                : (<div></div>)}
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
      datas: state.fetchedData.payload,
      reqId: state.fetchedData.id
    }
  };
  
const mapDispatchToProps = {callGET};

export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers);