import React from 'react';

class Header extends React.Component {
  render() {
    return (
        <header>
        <div>
            <i class="fa fa-2x fa-bars"></i>
            <h2 class="p_title">Home System Service</h2>
            <div class="avatar-circle">
                <span class="initials">JD</span>
            </div>            
        </div>       
      </header>
    );
  }
 }

 export default Header;