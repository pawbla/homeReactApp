import React from 'react';
import Header from './Header';
import Aside from './Aside';
import {Nav} from './Nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Routes from './Routes';
import LoginPage from './login/LoginPage'

class App extends React.Component {

  baseUrl = "http://localhost:8080/api/v1/";

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route>
            <MainComponent baseUrl={this.baseUrl}/>
          </Route>
        </Switch>
      </Router>
    );
  }
 }

 export default App;

class MainComponent extends React.Component {

  render(props) {
    return(
      <div>
        <Header />
        <main>
          <div className="nav">
            <Nav/> 
          </div>     
          <div className="main">
            <Routes baseUrl={this.props.baseUrl}/>
          </div>
          <Aside />
        </main>
      </div>
    );
  }

}