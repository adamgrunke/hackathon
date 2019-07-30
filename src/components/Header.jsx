import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className='header-style'>
        <h1 >Home District</h1>
      </div> 
      <div className='link-style'>
      <Link to="/">Home</Link> 
        <Link to='/' to="About">About</Link>
        <Link to="/">Log In</Link>
        <Link to="/">Sign up</Link> 
        <Link to="/schools/:id">Schools</Link> 

      </div>
    </header>
  )
}

export default Header;