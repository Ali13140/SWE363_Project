import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary" >
    <div className="container-fluid" >
      <Link className="navbar-brand" to={"/HomePage"}>Home</Link>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to={"/Profile"}>
            <img src="src\profile.jpg" alt="Profile Picture" className="rounded-circle" width="30" height="30" />
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default NavBar;
