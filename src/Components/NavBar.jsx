import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import lightThemeIcon from "../assets/moon.svg";
import darkThemeIcon from "../assets/moon-fill.svg";
import backIcon from "../assets/arrow-left.svg";

import "../CSS_Files/NavBar.css";

const NavBar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [profilePic, setProfilePic] = useState(
    localStorage.getItem("profilePic") || "src/profile.jpg"
  );

  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = isDarkTheme ? "dark-theme" : "light-theme";
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  useEffect(() => {
    const updateProfilePic = () => {
      setProfilePic(localStorage.getItem("profilePic") || "src/profile.jpg");
    };

    window.addEventListener("storage", updateProfilePic);

    return () => {
      window.removeEventListener("storage", updateProfilePic);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-primary ${
        isDarkTheme ? "dark-theme" : "light-theme"
      }`}
      style={{ height: "60px" }}
    >
      <div className="container-fluid d-flex justify-content-between">
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => navigate(-1)}
        >
          <img src={backIcon} alt="Back Icon" />
        </button>

        <Link
          className={`navbar-brand ${
            isDarkTheme ? "dark-theme" : "light-theme"
          }`}
          to={"/HomePage"}
        >
          Home
        </Link>

        <div className="d-flex">
          <button
            className="btn btn-outline-secondary me-2"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            <img
              src={isDarkTheme ? darkThemeIcon : lightThemeIcon}
              alt="Theme Icon"
            />
          </button>

          <Link
            className={`nav-link ${isDarkTheme ? "dark-theme" : "light-theme"}`}
            to={"/Profile"}
          >
            <img
              src={profilePic}
              alt="Profile Picture"
              className="rounded-circle"
              width="50"
              height="50"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
