import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "../CSS_Files/NavBar.css";

const NavBar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    document.body.className = isDarkTheme ? "dark-theme" : "light-theme";
  }, [isDarkTheme]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-primary ${isDarkTheme ? 'dark-theme' : 'light-theme'}"
      style={{ height: "60px" }}
    >
      <div className="container-fluid  ">
        <Link
          className="navbar-brand ${isDarkTheme ? 'dark-theme' : 'light-theme'}"
          to={"/HomePage"}
        >
          Home
        </Link>
        <div class="form-check form-switch" id="a">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitch"
            checked={isDarkTheme}
            onChange={() => setIsDarkTheme(!isDarkTheme)}
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            X
          </label>
        </div>
        <ul className="navbar-nav ms-auto ${isDarkTheme ? 'dark-theme' : 'light-theme'}">
          <li className="nav-item">
            <Link
              className="nav-link ${isDarkTheme ? 'dark-theme' : 'light-theme'}"
              to={"/Profile"}
            >
              <img
                src="src\profile.jpg"
                alt="Profile Picture"
                className="rounded-circle"
                width="50"
                height="50"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
