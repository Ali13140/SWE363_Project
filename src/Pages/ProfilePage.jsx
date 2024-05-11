import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import NavBar from "../Components/NavBar";
import "../CSS_Files/image.css";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const nav = useNavigate();
  const [profilePic, setProfilePic] = useState(
    localStorage.getItem("profilePic") || "src/profile.jpg"
  );

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePic(reader.result);
      // Save the image data to localStorage
      localStorage.setItem("profilePic", reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const HandleLogOut = () => {
    nav("/SignIn");
  };

  return (
    <div>
      <NavBar />
      <div className="container text-center mt-5">
        <div>
          <label style={{ position: "relative", display: "inline-block" }}>
            <input
              type="file"
              onChange={handleUpload}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
              }}
              accept="image/*"
            />
            <div className="image-container">
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="Profile"
                  aria-placeholder="src\profile.jpg"
                  className="rounded-circle"
                  width="150"
                  height="150"
                />
              ) : (
                "Click here to upload"
              )}
              <div className="overlay rounded-circle">
                <div className="text">Edit Picture</div>
              </div>
            </div>
          </label>
        </div>
        <h4 className="mt-3">John Doe</h4>
        <div className="form-group mx-auto" style={{ maxWidth: "30vw" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value="john.doe@example.com"
            readOnly
            style={{ backgroundColor: "#28cdba", textAlign: "center" }}
          />
        </div>
        <div className="form-group mx-auto" style={{ maxWidth: "30vw" }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value="johndoe123"
            readOnly
            style={{ backgroundColor: "#28cdba", textAlign: "center" }}
          />
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn btn-danger" onClick={HandleLogOut}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
