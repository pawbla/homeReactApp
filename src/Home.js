import React from 'react';
import MainSection from './Components/MainSection/MainSection';

const pageTitle = "Home";

class Home extends React.Component {
  render() {
    return (
 <MainSection component={HomePresentational} title={pageTitle} />
    );
  }
 }

 export default Home;

 function HomePresentational() {
  return (
    <div>
      asdsad
    </div>
  )  
 }