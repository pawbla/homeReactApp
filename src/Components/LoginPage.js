import React, { useState, useEffect } from 'react';
import LoginPageRenderer from './LoginPageRenderer';
import { loginToApplication} from '../actions/';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

function LoginPage (props) {

    const initState = {text: "", password: ""}
    
    const [values, setText] = useState(initState);
    const [progress, setProgress] = useState(false);
    
    useEffect(() => {
        if(props.isAuthenticated) {
            alert("Użytkownik został zalogowany.");    
            props.history.push('/index');        
        }
      }, [props.isAuthenticated]);

    const handleChange = (event) => {
        event.preventDefault();
        setText({...values, [event.target.type]: event.target.value});
    }

    const handleRegister = (event) => {
        props.history.push('/register'); 
    }

    const handleLogin = async (event) => {
        setProgress(true);
        event.preventDefault();
        await props.loginToApplication(values.text, values.password);   
        setText(initState);     
        setProgress(false);
    }

    return(
        <div>
            <LoginPageRenderer 
                handleLogin={handleLogin}
                handleChange={handleChange}
                handleRegister={handleRegister}
                values={values}
                showProgress={progress}
            />
        </div>
    ); 
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.loggedUser.isAuthenticated
    }
};

const mapDispatchToProps = {loginToApplication};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));