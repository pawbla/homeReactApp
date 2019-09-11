import React from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div class="nav">
        <ul>
          <MenuItem pic="fa fa-cloud" title="Pogoda" path="/weather"/>
          <MenuItem pic="fa fa-users" title="Użytkownicy" path="/"/>
          <MenuItem pic="fa fa-cogs" title="Czujniki" path="/a"/>
          <MenuItem pic="fa fa-warning" title="Sys info" path="/ab"/>
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
          <i class={this.props.pic}></i>{this.props.title}
          </li>
        </NavLink>
     );
   }
 }
 
 export default Nav;