import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import {IconButton} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    userItem: {
        height: '100%',
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "center", 
        '&:active': {
            boxShadow: '0 0 5px gray',
        },
        '& div > h2': {
            margin: '2px 15px',
        },
        '& div >p': {
            margin: '0px 15px'
        },
    },
    itemEnabled: {
        border: '1px solid #056DF5',
        background: '#F0F8FF',
        color: '#0549F5',
        '&:active': {
            borderColor: '#F0F8FF',
        },
    },
    itemDisabled: {
        border: '1px solid #4A4949',
        background: '#D3D3D3',
        color: '#4A4949',
        '&:active': {
            borderColor: '#D3D3D3',
        },
    },
    deleteIcon: {
        marginRight: '10px',
        zIndex: '50'
    },
}));

export default function Item(props) {

    const styles = useStyles();
    
    return (
        <div className={[props.item.enabled ? styles.itemEnabled : styles.itemDisabled, styles.userItem].join(' ')} onClick={() => props.onClick(props.item.username)}>
            <div >
                <h2>{props.item.username}</h2>
                <p>{props.item.firstName} {props.item.lastName}</p>
            </div>
            <div>
                <IconButton
                    color="inherit"
                    className={styles.deleteIcon}
                    size="small"
                    onClick={(e) => {e.stopPropagation(); props.onDelete(props.item.user_id)}}>
                        <DeleteRoundedIcon fontSize="large"/>
                </IconButton>
            </div>
        </div>
    )
}