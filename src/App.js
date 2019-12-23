import React from 'react';
import Header from './Header';
import Aside from './Aside';
import {Nav} from './Nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Routes from './Routes';
import LoginPage from './Components/LoginPage'


//Mocked service for testing purpose, remove when deployed for integration
import { mockedBackend } from './helpers/mockedBackend';
mockedBackend();

class App extends React.Component {

    render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login">
            <LoginPage/>
          </Route>
          <Route>
            <MainComponent/>
          </Route>
        </Switch>
      </Router>
    );
  }
 }

 export default App;

class MainComponent extends React.Component {

  render() {
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

}