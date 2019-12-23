import React, { useEffect } from 'react';
import LoginPageRenderer from './LoginPageRenderer';
import { setJwtTokenFetched,  setLoggedUserFetched } from '../actions/';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { constants } from '../constants/constants';

function LoginPage (props) {

    //to clear logged user until loggout is not implemented
    useEffect(() => {
        console.log("========== clear data on enter =============");
        props.setJwtTokenFetched();
      }, []);

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

    async function getJWTToken() {
        await fetch(loginUrl, {
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
                getLogedUser();
            }             
        });
    }

    async function getLogedUser() {
        await fetch(`${constants.baseUrl}${endpoint}?login=${values.text}`, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
              'Authorization': 'Bearer ' + props.jwtToken,
            }
          })
            .then(res => res.json())
            .then(json => {
                console.log("loginpage -- user updated: " + JSON.stringify(props.jwtToken));
                props.setLoggedUserFetched(json);
                console.log("===== 3==== ");
                props.history.push('/index');
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

const mapDispatchToProps = { setJwtTokenFetched, setLoggedUserFetched };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));