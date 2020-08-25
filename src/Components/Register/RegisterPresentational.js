import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import {hsInput as HS_Input} from '../../libs/hsInput'
import {hsSubmit as HS_Submit, hsButton as HS_Button} from '../../libs/hsButton'

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
    },
}));

function RegisterPresentational(props) {

    const styles = useStyles();

    return  (
        <div>     
            <div className={styles.progressRoot}>
                {props.isProgress ? <LinearProgress /> : <div></div>}
            </div>          
            <div className={styles.main}>
                <h1 className={styles.title}>Dodaj użytkownika</h1>
                <form className={styles.form} onSubmit={props.onSubmit}>
                    {
                        props.fields.map((field, index) => (
                            <div key={index} >
                                <HS_Input placeholder={field.placeholder}
                                    width="70%"
                                    type={field.type}
                                    name={field.name}
                                    onChange={event=> props.onChange(event)}
                                    value={props.value[field.name]}
                                    isError={props.errors[field.name]}></HS_Input>                               
                            </div>
                        ))
                    }
                    <div className={styles.button}>
                        <HS_Submit width="74%"
                                   alt="true"></HS_Submit>
                    </div>
                </form>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        isProgress: state.isProgressBar
    }
  };
  
  export default connect(mapStateToProps)(RegisterPresentational);