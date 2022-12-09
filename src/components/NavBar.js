import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  return (
    <div>
      <ul>
        <li><Link className='menu-button' to="/About">About</Link></li>
        <li><Link className='menu-button' to="/Works">Works</Link></li>
        <li><Link className='menu-button' to="/Contact">Contact</Link></li>
      </ul>
      <hr />
    </div>
  );
};

export default NavBar;