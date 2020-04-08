import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

import UsersList from './UsersList';

const useStyles = makeStyles(theme => ({
    p_table: {
        height: '78vh',
        'overflow-y': 'auto',
        marginTop: '10px',
        boxShadow: '0 0 5px gray', 
    },
    p_header: {
        boxShadow: '0 0 5px gray',
        padding: '1px 15px', 
    }
}));

function ManageUsersPresentational(props) {

    const styles = useStyles();

    return(
        <div>
            <div className={styles.progress}>
                {props.showProgress ? <LinearProgress className={styles.progress} /> : <div></div>}
            </div>  
            <div className={styles.p_header}>
                <h2>Użytkownicy</h2>
            </div> 
            <div className={styles.p_table}>
                {props.users ? <UsersList users={props.users} onDelete={props.onDelete} 
                    onOpenItem={props.onOpenItem}/> : <div></div>}
            </div> 
        </div>
    );
}

export default ManageUsersPresentational;