// ResetPasswordPage.tsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import TitleDiv from "../Components/TitleDiv";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const ResetPasswordPage = () => {
  const nav = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const token = new URLSearchParams(window.location.search).get("token");
  const isPasswordValid = (password) => {
    // Regular expressions for uppercase letter and special character
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*()_+={}\[\]:;<>,.?~]/;

    // Check length, uppercase, and special character
    return (
      password.length >= 8 &&
      uppercaseRegex.test(password) &&
      specialCharRegex.test(password)
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isPasswordValid(password)) {
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      try {
        await axios.post(`${process.env.REACT_APP_SERVER_URL}/reset-password`, {
          token,
          password,
          confirmPassword,
        });
        alert("Password has been updated.");
        nav("/SignIn");
      } catch (error) {
        console.error(error);
        alert("An error occurred while updating the password.");
      }
    } else {
        alert("Password is invalid");

    }
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;

    // Check if password is at least 8 characters long
    const isLengthValid = password.length >= 8;

    // Check if password contains an uppercase letter
    const hasUppercase = /[A-Z]/.test(password);

    const regex = /[!@#$%^&*()_+={}\[\]:;<>,.?~]/.test(password);

    // Update class names for the list items
    const passwordRequirements = document.querySelectorAll(
      ".password-requirement"
    );
    passwordRequirements[0].classList.toggle(
      "password-requirement-valid",
      isLengthValid
    );
    passwordRequirements[1].classList.toggle(
      "password-requirement-valid",
      hasUppercase
    );
    passwordRequirements[2].classList.toggle(
      "password-requirement-valid",
      regex
    );
  };
  return (
    <div className="sign-in-page">
      <div className="task-div">
        .<TitleDiv></TitleDiv>
      </div>
      <div className="sign-in-form">
        <div className="container">
          <h1>Reset Your Password</h1>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter new password"
                style={{ width: "50%" }}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  handlePasswordChange(e);
                }}
              />
            </div>
            <div id="passwordHelpBlock" className="form-text">
              Your password must:
              <ul>
                <li className="password-requirement">
                  <span>Be at least 8 characters long.</span>
                </li>
                <li className="password-requirement">
                  <span>Contain uppercase characters.</span>
                </li>
                <li className="password-requirement">
                  <span>Contain special characters.</span>
                </li>
              </ul>
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm new password"
                style={{ width: "50%" }}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-success "
                style={{ width: "50%" }}
              >
                Reset Password
              </button>
            </div>
          </form>
          <div className="mt-3">
            Remembered your password? <Link to={"/SignIn"}>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
