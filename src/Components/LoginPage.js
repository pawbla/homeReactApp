import React from 'react';
import LoginPageRenderer from './LoginPageRenderer';
import { setJwtTokenFetched,  setLoggedUserFetched, logOutUser } from '../actions/';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { constants } from '../constants/constants';

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
        .then(json => {if (json !== "") {
                props.setJwtTokenFetched(json.access_token);
                getLogedUser(json.access_token);
            }             
        });
    }

    function getLogedUser(token) {
        console.log("==== JWT TOKEN: " + token)
        fetch(`${constants.baseUrl}${endpoint}?login=${values.text}`, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
              'Authorization': 'Bearer ' + token,
            }
          })
            .then(res => res.json())
            .then(json => {
                console.log("loginpage -- user updated: " + JSON.stringify(props.jwtToken));
                console.log("loginpage -- user zejson updated: " + JSON.stringify(json));
                if (json.role) {
                    props.setLoggedUserFetched(json);
                    props.history.push('/index');
                } else {
                    props.logOutUser();
                }
            });
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
      jwtToken: state.loggedUser.jwtToken
    }
};

const mapDispatchToProps = { setJwtTokenFetched, setLoggedUserFetched,  logOutUser };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));