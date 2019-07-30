import React from 'react';
import logo from '../logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className='header-style'>
        <img src={logo} alt='Logo'/>
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