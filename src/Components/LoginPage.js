import React from 'react';
import LoginPageRenderer from './LoginPageRenderer';
import { jwtTokenFetched } from '../actions/';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

function LoginPage (props) {

    const endpoint = 'user';

    const [values, setText] = React.useState({});

    const clientId = "clientid";
    const clientSecret = "clientsectet";
    const baseLoginUrl = "localhost:8080";

    const loginUrl = `http://${baseLoginUrl}/oauth/token`;

    function handleChange(event) {
        event.preventDefault();
        values[event.target.type] = event.target.value;
        setText(values);
    }

    function handleLogin(event) {
        event.preventDefault();
        getJWTToken();
        getLogedUser();
        alert(`Użytkownik ${values.text} został zalogowany`);
        props.history.push('/index');
    } 

    function getJWTToken() {
        fetch(loginUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`),
            },
            body: `grant_type=password&username=${values.text}&password=${values.password}`
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return ""          
        })
        .then(json => {if (json != "") {
            props.jwtTokenFetched(json.access_token);
            }             
        });
    }

    function getLogedUser() {
        fetch(`${props.baseUrl}${endpoint}?login=${values.text}`, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
              'Authorization': 'Bearer ' + props.jwtToken,
            }
          })
            .then(res => res.json())
            .then(json => console.log(JSON.stringify(json)));
    }

    return(
        <div>
            <LoginPageRenderer 
                handleLogin={handleLogin}
                handleChange={handleChange}
                values={values} />
        </div>
    ); 
}

const mapStateToProps = (state) => {
    return {
      jwtToken: state.jwtToken
    }
};

const mapDispatchToProps = { jwtTokenFetched };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));