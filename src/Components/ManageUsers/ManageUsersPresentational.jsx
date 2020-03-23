import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import {IconButton} from '@material-ui/core';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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
            marginBottom: '15px',
        },
    },
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
    userDescription: {
        border: '2px solid #056DF5',
        borderTopWidth: '0px',
        margin: '0px 10px',
        borderBottomLeftRadius: '6px',
        borderBottomRightRadius: '6px',
        height: '150px'
    },
    p_header: {
        boxShadow: '0 0 5px gray',
        padding: '1px 15px', 
    },
    deleteIcon: {
        marginRight: '10px',
        zIndex: '50'
    },
    'enter': {
        transformOrigin: 'top',
        transform: 'scaleY(.1)',
    },
    'enterActive': {
        transformOrigin: 'top',
        transform: 'scaleY(1)',
        transition: 'all .5s ease'
    },
    'leave': {
        transformOrigin: 'top',
        transform: 'scaleY(1)',
    },
    'leaveActive': {
        transformOrigin: 'top',
        transform: 'scaleY(0)',
        transition: 'all .5s ease'
    }
}));


//REMOVE BELOW MOCK AFTER DEVELOPMENT
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
                <UsersList users={mock} />
            </div> 
        </div>
    );
}

function UsersList(props) {

    const styles = useStyles();

    const [isOpened, setOpenClose] = useState(false);

    const openClose = () => {
       setOpenClose(!isOpened);
    }
//{true ? <UserDescription isOpened={isOpened}/> : null}
    return (
        <ul className={styles.p_ul}>
            {props.users.map((item, index) => (
            <li key={index}>
                <UserItem item={item} 
                          index={index}
                          onClick={openClose}/>
                <ReactCSSTransitionGroup
                    transitionName={ {
                        enter: styles.enter,
                        enterActive: styles.enterActive,
                        leave: styles.leave,
                        leaveActive: styles.leaveActive,
                      } }
                    transitionAppear={true} 
                    transitionAppearTimeout={500}>
                    {isOpened && <UserDescription/>}
                </ReactCSSTransitionGroup>
            </li>))}
        </ul>  
    )
}

function UserItem(props) {

    const styles = useStyles();

    return (
        <div className={[props.item.enabled ? styles.itemEnabled : styles.itemDisabled, styles.userItem].join(' ')} onClick={props.onClick}>
            <div >
                <h2>{props.item.username}</h2>
                <p>{props.item.firstName} {props.item.lastName}</p>
            </div>
            <div>
                <IconButton
                    color="inherit"
                    className={styles.deleteIcon}
                    size="small"
                    onClick={(e) => {e.stopPropagation(); console.log("Pressed Delete" + props.isOpened)}}>
                        <DeleteRoundedIcon fontSize="large"/>
                </IconButton>
            </div>
        </div>
    )
}

function UserDesc(props) {
    
}

function UserDescription(props) {

    const styles = useStyles();

    return (
        <div className={styles.userDescription}>
            <span>lkajfdhaksdjfhasdkjlfh klsdjfh {props.index}</span>
        </div>
    )
}

export default ManageUsersPresentational;