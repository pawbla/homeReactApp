import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    box: {  
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
    login: {
        margin: '80px auto 40px auto',
    },
    register: {
        margin: '20px auto',
        textAlign: 'center',
        padding: '10px 20px 10px 20px',
    },
    title: {
        color: '#f8f8ff',
        textAlign: 'center',
    },
    form: {
        textAlign: 'center',
    },
    buttons: {
        marginTop: '10px',
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
    },
    progressRoot: {
        height: '4px'
    },
    loginButton: {
        marginTop: '10px',
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
    }
}));

function LoginPageRenderer(props) {

    const styles = useStyles();

    return(
        <div>
            <div className={styles.progressRoot}>
                {props.isProgress ? <LinearProgress /> : <div></div>}
            </div>
            <div className={`${styles.box} ${styles.login}`}>
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
            </div>
            <div className={`${styles.box} ${styles.register}`} onClick={props.handleRegister}>
                <button className={styles.loginButton}>Zarejestruj użytkownika</button>
            </div>
        </div>
    ); 
}

const mapStateToProps = (state) => {
    return {
        isProgress: state.isProgressBar
    }
  };
  
  export default connect(mapStateToProps)(LoginPageRenderer);