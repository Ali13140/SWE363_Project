// SignInForm.tsx
import React from "react";
import "../CSS_Files/form.css";

import { Link, useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    // Check validity of fields
    const form = event.target;
    const firstNameInput = form.elements.firstName;
    const lastNameInput = form.elements.lastName;
    const userNameInput = form.elements.userName;
    const emailInput = form.elements.email;
    const passwordInput = form.elements.password.value; // Get the value of the input

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

    if (isPasswordValid(passwordInput)) {
      navigate("/HomePage"); // Use the navigate function here
    } else {
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
    <div className="container">
      <h1>Login</h1>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              required
            />
          </div>
          <div className="col">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="User Name"
            style={{ width: "50%" }}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter email"
            style={{ width: "50%" }}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword5" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="inputPassword5"
            className="form-control"
            name="password"
            aria-describedby="passwordHelpBlock"
            placeholder="Enter password"
            style={{ width: "50%" }}
            required
            onChange={handlePasswordChange}
          />
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
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="termsCheck"
            required
          />
          <label className="form-check-label" htmlFor="termsCheck">
            I agree to the Terms and Privacy Policy.
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-success btn-block"
          style={{ width: "50%" }}
        >
          Sign in
        </button>

        <div className="mt-3">
          have an account? <Link to={"/SignIn"}>Sign In</Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
