import React from 'react';
import {makeStyles } from '@material-ui/core/styles';

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
        opacity: '0.85'
    },
    title: {
        color: '#f8f8ff',
        textAlign: 'center',
    },
    form: {
        textAlign: 'center',
        '& button': {
            display: 'inline-block',
            width: '195px',
            height: '35px',
            borderRadius: '6px',
            padding: '2px',
            margin: '5px 0px',
            background: '#F0F8FF',
            border: '2px solid #056DF5',
            color: '#056DF5',
            outline: 'none',
            fontSize: '18px',
            '&:focus': {
                background: '#05C5F5',
                border: '2px solid #F0F8FF',
                color: '#F0F8FF',
                boxShadow: '0 0 15px gray',
            },  
            '&:last-of-type': {
                marginLeft: '10px',
                [`${theme.breakpoints.down('400')} and (orientation: portrait)`]: {
                    marginLeft: '0px',
                }
            },      
        },
        '& input': {
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
        },
    },
    buttons: {
        marginTop: '25px',
    },

}));

export default function LoginPage () {

    const styles = useStyles();

    return(
        <div className={styles.login}>
            <h1 className={styles.title}>Home System Service</h1>
            <form className={styles.form}>
                <div>
                    <input type="text" placeholder="Login"></input>
                </div>
                <div>
                    <input type="password" placeholder="Hasło"></input>
                 </div>
                 <div className={styles.buttons}>
                     <button>Login</button>
                     <button>Utwórz konto</button>
                 </div>
            </form>
        </div>
    ); 
}
