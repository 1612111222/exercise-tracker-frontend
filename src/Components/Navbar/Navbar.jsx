import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/" className="navbar__logo">Fitness</Link>
      </div>
      <div className="navbar__right">
        <Link to="/login" className="navbar__button">Login</Link>
        <Link to="/register" className="navbar__button">Register</Link>
        <Link to="/logout" className="navbar__button">Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
