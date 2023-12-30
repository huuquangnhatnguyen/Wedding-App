import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><Link to="/Photos">Photos</Link></li>
        <li><Link to="/Timeline">Timeline</Link></li>
        <li><Link to="/RSVP">RSVP</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
