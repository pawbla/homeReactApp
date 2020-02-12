import React, { useState, useEffect } from 'react';
import LoginPageRenderer from './LoginPageRenderer';
import { loginToApplication} from '../actions/';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

function LoginPage (props) {

    const [values, setText] = useState({});
    const [progress, setProgress] = useState(false);
    
    useEffect(() => {
        if(props.isAuthenticated) {
            alert("Użytkownik został zalogowany.");    
            props.history.push('/index');        
        }
      }, [props.isAuthenticated]);

    function handleChange(event) {
        event.preventDefault();
        values[event.target.type] = event.target.value;
        setText(values);
    }

    async function handleLogin(event) {
        setProgress(true);
        event.preventDefault();
        await props.loginToApplication(values.text, values.password); 
        setProgress(false);
    }

    return(
        <div>
            <LoginPageRenderer 
                handleLogin={handleLogin}
                handleChange={handleChange}
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