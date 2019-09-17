import React from 'react';
import {Nav} from "./Nav";
import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      container: "nav navHide",
      isOpen: false
    }
  }

  switchMenu = () => {
    console.log("Click");
    this.setState({
      container:  "nav " + (this.state.isOpen ? " navHide" : "navShow"),
      isOpen: this.state.isOpen ? false : true,
    });
  }

  render() {
    return (
      <header>
        <div>
            <MenuIcon menuFunct={this.switchMenu}/>
            <h2 className="p_title">Home System Service</h2>
            <div className="avatar-circle">
                <span className="initials">JD</span>
            </div>            
         </div>  
         <div>
           <Nav cssClass={this.state.container}/>
         </div>
      </header>
    );
  }
 }

class MenuIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      container: "container",
      isOpen: false
    }

  }

  menuAnimation = () => {
    this.props.menuFunct();
    this.setState({
      container:  this.state.isOpen ? "container" : "container change",
      isOpen: this.state.isOpen ? false : true,
    });
    
  }

  render() {
    return(
      <div className={this.state.container} onClick={this.menuAnimation}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      
    );
  }
 }

 export default Header;