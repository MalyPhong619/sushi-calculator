import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/images/logo.png'

function Header(){
  return(
    <div>
      <img src={logo}></img>
      <Link to='/'>Home</Link> ||
      <Link to='/calculator'>Calculator</Link>
    </div>
  )
}

export default Header;
