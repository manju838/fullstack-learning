/*
Blueprint of Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (

<nav className="navbar">
  { Navbar content will go here }
</nav>
);
};

export default Navbar;
*/

import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">
                    Propall
                </a>
            </div>
            <div className="navbar-center">
                <ul className="nav-links">
                    <li>
                        <a href="/edit-floorplan">Edit Floorplan</a>
                    </li>
                    <li>
                        <a href="/design">Design</a>
                    </li>
                    <li>
                        <a href="/add-items">Add Items</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <a href="/account" className="user-icon">
                    <i className="fas fa-user"></i>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
