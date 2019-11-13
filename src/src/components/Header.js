import React from 'react';
import './Header.css';

function Header({ date, title, motto }) {
  return (
    <header className="Header">
        <div className="details">
            <h1>{title}</h1>
            <h2>{motto}</h2> 
        </div>
        <div className="note">
            <p>Since {date}</p> 
        </div>
    </header>
  );
}

export default Header;
