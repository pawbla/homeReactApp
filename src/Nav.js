import React from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div className={this.props.cssClass}>
        <ul>
          <MenuItem pic="fa fa-home" title="Home" path="/"/>
          <MenuItem pic="fa fa-cloud" title="Pogoda" path="/weather"/>
          <MenuItem pic="fa fa-users" title="Użytkownicy" path="/users"/>
          <MenuItem pic="fa fa-cogs" title="Czujniki" path="/sensor"/>
          <MenuItem pic="fa fa-warning" title="Sys info" path="/sysinfo"/>
        </ul>
      </div>
    );
  }
 }

 class MenuItem extends React.Component {
   render() {
     return(
        <NavLink exact to={this.props.path} activeClassName="active" className="inactive">
          <li>
          <i className={this.props.pic}></i><span>{this.props.title}</span>
          </li>
        </NavLink>
     );
   }
 }
 
 export {Nav};