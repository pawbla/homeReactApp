import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MainSection from '../MainSection/MainSection';
import UsersList from './UsersList';

const pageTitle = "Użytkownicy";

const useStyles = makeStyles(theme => ({
    p_table: {
        boxShadow: '0 0 5px gray',
        overflowY: 'auto',
        height: '100%'  
    }
}));

function ManageUsersPresentational(props) {

    const styles = useStyles();

    return(
        <div className = {styles.p_table}>
            {props.users ? <UsersList users={props.users} 
                onDelete={props.onDelete}/> : <div></div>}
        </div> 
    );
}

export default MainSection(ManageUsersPresentational, pageTitle);