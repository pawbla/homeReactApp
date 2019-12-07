import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    login: {
        margin: '80px auto',
        [`${theme.breakpoints.down('400')} and (orientation: portrait)`]: {
            margin: '30px',
        },
        boxShadow: '0 0 5px gray',
        maxWidth: '480px',  
        borderRadius: '15px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        background: '#05A8F5',
        padding: '5px 20px 30px 20px',
        opacity: '0.85',
    },
    title: {
        color: '#f8f8ff',
        textAlign: 'center',
    },
    form: {
        textAlign: 'center',
    },
    buttons: {
        marginTop: '25px',
    },
    loginButton: {
        display: 'inline-block',
        width: '84%',
        height: '35px',
        borderRadius: '6px',
        padding: '2px',
        margin: '5px 0px',
        background: '#F0F8FF',
        border: '2px solid #056DF5',
        color: '#056DF5',
        outline: 'none',
        fontSize: '18px',
        '&:active': {
            background: '#05C5F5',
            border: '2px solid #F0F8FF',
            color: '#F0F8FF',
            boxShadow: '0 0 15px gray',
        },   
    }, 
    textField: {
        border: '2px solid #056DF5',
        width: '80%',
        fontSize: '20px',
        padding: '4px 7px',
        marginTop: '10px',
        borderRadius: '6px',
        outline: 'none',
        background: '#f8f8ff',
        '&:focus': {
            boxShadow: '0 0 13px gray'
        }
    }
}));

export default function LoginPageRenderer(props) {

    const styles = useStyles();

    return(
        <div className={styles.login}>
            <h1 className={styles.title}>Home System Service</h1>
            <form className={styles.form} onSubmit={props.handleLogin}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Login"
                        value={props.values.text}
                        onChange={props.handleChange}
                        className={styles.textField}>
                    </input>
                </div>
                <div>
                    <input 
                        type="password" 
                        placeholder="Hasło"
                        value={props.values.password}
                        onChange={props.handleChange}
                        className={styles.textField}>
                    </input>
                </div>
                <div className={styles.buttons}>
                    <input 
                        type='submit'
                        value="Login"
                        className={styles.loginButton}>
                    </input>
                 </div>
            </form>
            {/* Workaround for missing state after refresg for fix use
            redux-persist*/}
            <NavLink exact to="/index">
            <Button>NavLink</Button>

            
      </NavLink>
        </div>
    ); 
}