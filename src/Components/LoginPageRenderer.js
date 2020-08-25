import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import {hsInput as HS_Input} from '../libs/hsInput'
import {hsSubmit as HS_Submit, hsButton as HS_Button} from '../libs/hsButton'


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
    progressRoot: {
        height: '4px'
    },
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
                        <HS_Input placeholder="Login"
                              width="70%"
                              onChange={props.handleChange}
                              value={props.values.text}></HS_Input>
                    </div>
                    <div>
                        <HS_Input placeholder="Hasło"
                              width="70%"
                              type="password"
                              onChange={props.handleChange}
                              value={props.values.password}></HS_Input>
                    </div>
                    <div className={styles.buttons}>
                        <HS_Submit width="74%" 
                                   alt="true"
                                   value="Login"></HS_Submit>
                    </div>
                </form>
            </div>
            <div className={`${styles.box} ${styles.register}`} onClick={props.handleRegister}>
                <HS_Button text="Zarejestruj użytkownika"
                            alt="true"
                            width="74%"></HS_Button>
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