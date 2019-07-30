import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className='header-style'>
        <h1>Home District</h1>
      </div> 
      <div className='align'>
        <Link className='link-style' to='/about'>About</Link>
        <Link className='link-style' to="/">Log In</Link>
        <Link className='link-style1' to="/">Sign up</Link>
      </div>
    </header>
  )
}

export default Header;