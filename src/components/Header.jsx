import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <div>
      <h1>Sushi Go Around Calculator</h1>
      <Link to='/'>Home</Link> ||
      <Link to='/calculator'>Calculator</Link>
    </div>
  )
}

export default Header;
