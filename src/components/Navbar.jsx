import React from 'react';
import './Navbar.css';
import '../App.css';

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Sakar</div>
        <span>Toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
            <ul>
                <li>Home</li>
                <li>Sevices</li>
                <li>Experience</li>
                <li>Potfolio</li>
                <li>Testomonials</li>
            </ul>
        </div>
        <button className="button n-button">
            Contact Us
        </button>
      </div>
    </div>
  );
}

export default Navbar;
