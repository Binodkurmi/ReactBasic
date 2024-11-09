// src/components/Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">MyApp</a>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
        </ul>
        <form className="d-flex ml-auto">
          <input 
            className="form-control me-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" 
          />
          <button 
            className="btn btn-primary" 
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
