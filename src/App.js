import React, {useEffect} from 'react';
import Header from './Header';
import Aside from './Aside';
import {Nav} from './Nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Routes from './Routes';
import LoginPage from './Components/LoginPage';
import Logout from './Components/Logout';
import Register from './Components/Register/Register';
import Internal from './Components/Internal/Internal';
import { connect } from "react-redux";
import {fetchUserData} from './actions/';


//Mocked service for testing purpose, remove when deployed for integration
import { mockedBackend } from './helpers/mockedBackend';
//mockedBackend();

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/internal" component={Internal} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/register" component={Register} />
          <Route>
            <MainComponent/>
          </Route>
        </Switch>
      </Router>
    );
  }
 }

 export default App;

function MainComponent(props) {

  useEffect(() => {
    if (props.isAuthenticated) {
      props.fetchUserData(props.user);
    }
  }, []);

  return(
    <div>
      <Header />
      <main>
        <div className="nav">
          <Nav/> 
        </div>     
        <div className="main">
          <Routes/>
        </div>
        <Aside />
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.loggedUser.user,
    isAuthenticated: state.loggedUser.isAuthenticated
  }
};

const mapDispatchToProps = {fetchUserData};

MainComponent = connect(mapStateToProps, mapDispatchToProps)(MainComponent);