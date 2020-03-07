import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    main: {
        margin: '80px auto 40px auto',
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
        textAlign: 'center',
    },
    title: {
        color: '#f8f8ff',      
    },
    progressRoot: {
        height: '4px'
    },
    button: {
        marginTop: '10px',
        '& input': {
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
    },
    textField: {
            '& input': {
            border: '2px solid #056DF5',
            width: '80%',
            fontSize: '20px',
            padding: '4px 7px',
            marginTop: '5px',
            borderRadius: '6px',
            outline: 'none',
            background: '#f8f8ff',
            '&:focus': {
                boxShadow: '0 0 13px gray'
            }
        } 
    },
    progress: {
        height: '4px'
    },
}));

function RegisterPresentational(props) {

    const styles = useStyles();

    return  (
        <div>
            <div className={styles.progress}>
                {props.showProgress ? <LinearProgress className={styles.progress} /> : <div></div>}
            </div>                
            <div className={styles.main}>
                <h1 className={styles.title}>Dodaj użytkownika</h1>
                <form className={styles.form} onSubmit={props.onSubmit}>
                    {
                        props.fields.map((field, index) => (
                            <div className={styles.textField} key={index}>
                                <input
                                    type={field.type} 
                                    placeholder={field.placeholder} 
                                    name={field.name}
                                    value={props.value[field.name]}
                                    onChange={event=> props.onChange(event)}>
                                </input>
                            </div>
                        ))
                    }
                    <div className={styles.button}>
                        <input 
                            type='submit'
                            value="Wyślij">
                        </input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPresentational;