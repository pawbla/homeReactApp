import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <div class="nav">
        <ul>
          <li><i class="fa fa-cloud"></i><span>Pogoda</span></li>
          <li><i class="fa fa-users"></i><span>Użytkownicy</span></li>
          <li><i class="fa fa-cogs"></i><span>Czujniki</span></li>
          <li><i class="fa fa-warning"></i><span>Sys info</span></li>
        </ul>
      </div>
    );
  }
 }

 export default Nav;