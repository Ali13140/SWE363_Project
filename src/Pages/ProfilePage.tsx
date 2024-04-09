import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import NavBar from '../NavBar';

const ProfilePage = () => {
  return (
    <div>
      <NavBar />
      <div className="container text-center mt-5">
        <img
          src="src\profile.jpg" 
          alt="Profile"
          className="rounded-circle"
          width="150"
          height="150"
        />
        <h4 className="mt-3">John Doe</h4>
        <div className="form-group mx-auto" style={{ maxWidth: '50vw' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value="john.doe@example.com"
            readOnly
          />
        </div>
        <div className="form-group mx-auto" style={{ maxWidth: '50vw' }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value="johndoe123"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
