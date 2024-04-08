import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary" >
    <div className="container-fluid" >
      <a className="navbar-brand" href="#">Home</a>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <img src="src\profile.jpg" alt="Profile Picture" className="rounded-circle" width="30" height="30" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default NavBar;
