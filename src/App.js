import React from 'react';
import Header from './Header';
import Aside from './Aside';
import {Nav} from './Nav';
import Home from './Home';
import Weather from './Weather'
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <main>
          <div className="nav">
            <Nav/> 
          </div>      
          <div className="main">
            <Route exact path="/" component={Home} />
            <Route path="/weather" component={Weather} />
          </div>
          <Aside />
        </main>
      </Router>
    );
  }
 }

 export default App;