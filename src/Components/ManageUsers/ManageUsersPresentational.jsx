import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import {IconButton} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    p_table: {
        height: '78vh',
        'overflow-y': 'auto',
        marginTop: '10px',
        boxShadow: '0 0 5px gray', 
    },
    p_ul: {
        listStyleType: 'none',
        marginLeft: '0px',
        paddingInlineStart: '20px',
        paddingInlineEnd: '20px',
        '& li': {
            height: '50px', 
            borderRadius: '6px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: "center",
            marginBottom: '15px',
            "&:active": {
                boxShadow: '0 0 15px gray',
            },
            '& h2': {
                margin: '2px 15px',
            },
            '& p': {
                margin: '0px 15px'
            },
        },
    },
    li_enabled: {
        border: '1px solid #056DF5',
        background: '#F0F8FF',
        color: '#0549F5',
        "&:active": {
            border: '2px solid #F0F8FF',
        },
    },
    li_disabled: {
        border: '1px solid #4A4949',
        background: '#D3D3D3',
        color: '#4A4949',
        "&:active": {
            border: '2px solid #D3D3D3',
        },
    },
    p_header: {
        boxShadow: '0 0 5px gray',
        padding: '1px 15px', 
    },
    deleteIcon: {
        marginRight: '10px'
    }
}));

const mock =  [
    {
        username: "user1",
        enabled: true,
        firstName: "enabledFirst",
        lastName: "enabledLast"
    },
    {
        username: "user2",
        enabled: false,
        firstName: "disabledFirst",
        lastName: "disbledLast"
    },
    {
        username: "user3",
        enabled: false,
        firstName: "disabledFirst",
        lastName: "disbledLast"
    },
    {
        username: "user4",
        enabled: true,
        firstName: "disabledFirst",
        lastName: "disbledLast"
    } 
]

function ManageUsersPresentational(props) {

    const styles = useStyles();

    return(
        <div>
            <div className={styles.p_header}>
                <h2>Użytkownicy</h2>
            </div> 
            <div className={styles.p_table}>
                <ul className={styles.p_ul}>
                    {mock.map(element => (
                    <li className={element.enabled ? styles.li_enabled : styles.li_disabled}>
                        <div>
                            <h2>{element.username}</h2>
                            <p>{element.firstName} {element.lastName}</p>
                        </div>
                        <div>
                            <IconButton
                                color="inherit"
                                className={styles.deleteIcon}
                                size="small">
                                    <DeleteRoundedIcon fontSize="large"/>
                            </IconButton>
                        </div>
                    </li>))}
                </ul>             
            </div> 
        </div>
    );
}

export default ManageUsersPresentational;