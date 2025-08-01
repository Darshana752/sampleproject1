import React from 'react'
import {Link} from 'react-router-dom';
import './style.css';
export default function Navbar() {

  return (
    <nav className='mm1'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Contact">Contac</Link></li>
      </ul>
    </nav>
  );
}
  

