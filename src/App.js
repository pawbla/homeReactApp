import React from 'react';
import Header from './Header';
import Aside from './Aside';
import {Nav} from './Nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Routes from './Routes';
import LoginPage from './login/LoginPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route component={MainComponent}/>
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
            <Routes />
          </div>
          <Aside />
        </main>
      </div>
    );
  }

}