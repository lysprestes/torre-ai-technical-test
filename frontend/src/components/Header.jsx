import React from 'react';
import logo from '../assets/logo.svg'
import list from '../assets/list.svg'
import '../styles/Header.css';

function Header() {
  return (
    <>
      <header className="header">
        <div className='header-images'>
          <a href="https://torre.ai/" target="_blank">
            <img className="logo" src={list} />
            <img className="logo" src={logo} />
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
