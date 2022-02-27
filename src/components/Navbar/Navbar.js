import React from 'react';
import './Navbar.css';
const Navbar=() => {
  return (
    <nav className="navbar navbar-light navbar-bg">
      <div className="container-fluid">
        <a className="navbar-brand text-black" href="#">
          Spotify Artist Search
        </a>
      </div>
    </nav>
  )
}

export default Navbar;