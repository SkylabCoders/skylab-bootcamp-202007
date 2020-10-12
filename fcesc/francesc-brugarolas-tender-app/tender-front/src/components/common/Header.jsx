import React from 'react';
import Nav from './Nav';
import './header.sass';

function Header() {
  return (
    <header>
      <h1 className='pageTitle'>TENDER</h1>
      <Nav />
    </header>
  );
}

export default Header;
