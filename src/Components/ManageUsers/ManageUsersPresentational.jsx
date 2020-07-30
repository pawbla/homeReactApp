import React from 'react';
import UsersList from './UsersList';

function ManageUsersPresentational(props) {

    return(
        <div className = "incontext">
            {props.users ? <UsersList users={props.users} 
                onDelete={props.onDelete}/> : <div></div>}
        </div> 
    );
}

export default ManageUsersPresentational;