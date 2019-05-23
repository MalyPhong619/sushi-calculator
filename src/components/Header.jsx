import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/images/logo.png'

function Header(){
  const headerLinks = {
    textDecoration: 'none',
    height: '20px',
    color: 'red',
    borderRight: '1px dotted red',
    padding: '5px'
  }
  return(
    <div>
      <img src={logo}></img>
      <Link style={headerLinks} to='/'>Home</Link>
      <Link style={headerLinks} to='/calculator'>Calculator</Link>
    </div>
  )
}

export default Header;
