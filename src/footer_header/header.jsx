import React from "react";
import {Link} from 'react-router-dom';
import './style.css'

function Header() {
  return (
    <div className="header">
      
      <nav className="navbar fixed-top navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <Link to="/"className="navbar-brand" >Jp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/contect">contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/skills">Skills</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
     
    </div>
  );
}

export default Header;
