import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

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

export default function DescriptionPresentational(props) {

    const styles = userDescStyles();

    const disabledColor = (style) => {
        return props.item.enabled ? style.border : '#4A4949'
    }

    return (
        <div className={styles.userDescription} 
                style={{borderColor: disabledColor(styles.userDescription)}}>
            <form onSubmit={props.onSubmit}> 
                <div>
                    <div className={styles.textField}>
                        <input type="text"
                                placeholder="Imię"
                                name="firstName"
                                onChange={props.onChange}
                                value={props.value["firstName"]}
                                style={{borderColor: disabledColor(styles.textField)}}>
                        </input>
                    </div>
                    <div className={styles.textField}>
                        <input type="text"
                                placeholder="Nazwisko"
                                name="lastName"
                                value={props.value["lastName"]}
                                onChange={props.onChange}
                                style={{borderColor: disabledColor(styles.textField)}}>
                        </input>
                    </div>
                    <div className={styles.textField}>
                        <input type="text"
                                placeholder="e-mail"
                                value={props.value["email"]}
                                name="email"
                                onChange={props.onChange}
                                style={{borderColor: disabledColor(styles.textField)}}>
                        </input>
                    </div>
                </div>
                <div className={styles.rightArea}>
                    <div className={styles.selectField}>
                        <select  style={{borderColor: disabledColor(styles.selectField)}}
                            name="role"
                            value={props.value["role"]}
                            onChange={props.onChange}>
                            <option className={styles.option}>USER</option>
                            <option>ADMIN</option>
                        </select>
                    </div>
                    <div className={styles.checkboxField} onClick={props.toggleCheck}>
                        <label>Aktywny</label>
                        <input type="checkbox" 
                                checked={props.value["isEnabled"]}
                                name="isEnabled">
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