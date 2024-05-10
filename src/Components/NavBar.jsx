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
      className={`navbar navbar-expand-lg  ${
        isDarkTheme ? "dark-theme" : "light-theme"
      }`}
      style={{ height: "60px", backgroundColor: "#28cdba" }}
    >
      <div className="container-fluid d-flex justify-content-between">
        <button
          type="button"
          className="btn "
          onClick={() => {
            localStorage.removeItem("taskData");
            navigate(-1);
          }}
        >
          <img src={backIcon} alt="Back Icon" />
        </button>

        <Link
          className={`navbar-brand ${
            isDarkTheme ? "dark-theme" : "light-theme"
          }`}
          to={"/HomePage"}
          onClick={() => localStorage.removeItem("taskData")}
        >
          Home
        </Link>

        <div className="d-flex">
          <button
            className="btn  me-2"
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
            onClick={() => localStorage.removeItem("taskData")}
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
