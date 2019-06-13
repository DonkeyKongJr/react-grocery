import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
      <div className="header">
        <a href="#default" className="logo">
          Logo
        </a>
        <div className="header-right">
          <a className="active" href="#home">
            Home
          </a>
          <a
            href="https://github.com/DonkeyKongJr/react-grocery"
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
      <div>
        <h1>Welcome to React Grocery App</h1>
      </div>
    </div>
  );
}

export default Header;
