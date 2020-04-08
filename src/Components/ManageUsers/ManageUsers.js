import React, { useState, useEffect } from 'react';
import ManageUsersPresentational from './ManageUsersPresentational'; 
import { connect } from "react-redux";
import {callGetApi} from '../../libs/callRestApi';

const bStateInit = {

}

const usersEndpoint = 'users';


function ManageUsers(props) {

    const [users, setUsers] = useState(null);
    const [values, setValues] = useState();

    useEffect(() => {
        callGetApi(usersEndpoint, "", props.jwtToken)
        .then(json => setUsers(json))
        .catch(error => alert("Nie można pobrać danych ze strony. \n" + error));
    }, []);

    //example HTTP DELETE http://www.appdomain.com/users/123
    const onDelete = (event) => {
        console.log("On delete");
    }

    const onOpenItem = (event) => {

    }

    return (
        <div>
            <ManageUsersPresentational users={users} 
                onDelete={onDelete}
                onOpenItem={onOpenItem}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      jwtToken: state.loggedUser.jwtToken,
    }
};
  
export default connect(mapStateToProps)(ManageUsers);