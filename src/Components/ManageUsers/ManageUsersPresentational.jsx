import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import UsersList from './UsersList';

const useStyles = makeStyles(theme => ({
    p_table: {
        boxShadow: '0 0 5px gray',
        overflowY: 'auto',
        position: 'relative',
        height: '100%'  
    }
}));

function ManageUsersPresentational(props) {

    const styles = useStyles();

    return(
        <div className = "incontext">
            {props.users ? <UsersList users={props.users} 
                onDelete={props.onDelete}/> : <div></div>}
        </div> 
    );
}

export default ManageUsersPresentational;