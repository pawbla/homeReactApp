import React from 'react';
import Header from './Header';
import Aside from './Aside';
import Nav from './Nav';
import Main from './Main';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Nav />
          <Main />
          <Aside />
        </main>
      </div>
    );
  }
 }

 export default App;