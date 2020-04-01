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
        transition: 'all .3s ease'
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

    const [isOpened, setOpenClose] = useState({});

    const openClose = (item) => {
        console.log("aaa" + item)
        if (isOpened == item) {
            setOpenClose({});
        } else {
            setOpenClose(item);
        }

    }
    return (
        <ul className={styles.p_ul}>
            {props.users.map((item, index) => (
            <li key={index}>
                <UserItem item={item} 
                          onClick={openClose}/>
                <ReactCSSTransitionGroup
                    transitionName={{
                        enter: styles.enter,
                        enterActive: styles.enterActive,
                        leave: styles.leave,
                        leaveActive: styles.leaveActive
                    }}
                    transitionAppear={true} 
                    transitionAppearTimeout={500}>
                    {isOpened == item.username && <UserDescription item={item} />}
                </ReactCSSTransitionGroup>
            </li>))}
        </ul>  
    )
}

function UserItem(props) {

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
                    onClick={(e) => {e.stopPropagation(); console.log("Pressed Delete" + props.isOpened)}}>
                        <DeleteRoundedIcon fontSize="large"/>
                </IconButton>
            </div>
        </div>
    )
}

const userDescStyles = makeStyles(theme => ({
    userDescription: {
        border: '2px solid #056DF5',
        borderTopWidth: '0px',
        margin: '0px 10px',
        borderBottomLeftRadius: '6px',
        borderBottomRightRadius: '6px',
        height: '150px',
        '& form': {
            padding: '8px 10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'stretch'
        }
    },
    textField: {
        '& input': {
        border: '2px solid #056DF5',
        width: '100%',
        fontSize: '17px',
        padding: '4px 7px',
        margin: '5px 0px',
        borderRadius: '6px',
        outline: 'none',
        background: 'white',
            '&:focus': {
                boxShadow: '0 0 13px gray'
            }
        },
    },
    buttonField: {
        marginTop: '10px',
        '& input': {
            width: '100%',
            height: '35px',
            borderRadius: '6px',
            padding: '2px',
            margin: '5px 0px',
            background: '#056DF5',
            border: '2px solid #056DF5',
            color: 'white',
            outline: 'none',
            fontSize: '18px',
            '&:active': {
                background: '#05C5F5',
                border: '2px solid #F0F8FF',
                color: '#F0F8FF',
                boxShadow: '0 0 15px gray',
            },   
        }, 
    }, 
    rightArea: {
        width: '230px',
    },
    selectField: {
        '& select': {
            cursor: 'pointer',
            border: '2px solid #056DF5',
            width: '100%',
            fontSize: '17px',
            padding: '4px 7px',
            margin: '5px 0px',
            borderRadius: '6px',
            outline: 'none',
            background: 'white',
            '&:active': {
                boxShadow: '0 0 15px gray',
            },
        }
    },
    checkboxField: {
        display: 'inline',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: '5px 0px',
        '& input[type="checkbox"]': {
            display: 'none',
        },
        '& input[type="checkbox"] + span': {
            height: '30px',
            width: '30px',   
            position: 'relative',
            top: '0px',
            left: '0px',     
            border: '2px solid #056DF5',
            borderRadius: '6px',
            cursor: 'pointer',  
        },
        '& input[type="checkbox"]:checked + span': {
            background: '#056DF5',
        },
        '& label': {
            marginRight: '10px',
            fontSize: '20px',
        }
    }
}));

function UserDescription(props) {

    const styles = userDescStyles();

    const [isChecked, setChecked] = useState(false);

    const toogleCheck = () => {
        setChecked(!isChecked);
    }

    const disabledColor = (style) => {
        return props.item.enabled ? style.border : '#4A4949'
    }

    return (
        <div className={styles.userDescription} style={{borderColor: disabledColor(styles.userDescription)}}>
            <form>
                <div>
                    <div className={styles.textField}>
                        <input type="text"
                                placeholder="Imię"
                                style={{borderColor: disabledColor(styles.textField)}}>
                        </input>
                    </div>
                    <div className={styles.textField}>
                        <input type="text"
                                placeholder="Nazwisko"
                                style={{borderColor: disabledColor(styles.textField)}}>
                        </input>
                    </div>
                    <div className={styles.textField}>
                        <input type="text"
                                placeholder="e-mail"
                                style={{borderColor: disabledColor(styles.textField)}}>
                        </input>
                    </div>
                </div>
                <div className={styles.rightArea}>
                    <div className={styles.selectField}>
                        <select  style={{borderColor: disabledColor(styles.selectField)}}>
                            <option className={styles.option}>USER</option>
                            <option>ADMIN</option>
                        </select>
                    </div>
                    <div className={styles.checkboxField} onClick={toogleCheck}>
                        <label>Aktywny</label>
                        <input type="checkbox" checked={isChecked}>
                        </input>
                        <span  style={{borderColor: disabledColor(styles.textField)}}></span>
                    </div>
                    <div className={styles.buttonField}>
                        <input 
                            type='submit'
                            value="Zatwierdź">
                        </input>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ManageUsersPresentational;