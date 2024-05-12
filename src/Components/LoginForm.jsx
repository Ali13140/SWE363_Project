// SignInForm.tsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignInForm = () => {
  const nav = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      // Send a post request to your server with the email and password
      const user = await axios.post(`https://swe363project-production.up.railway.app/login`, {
        email,
        password,
      });
      // If the request is successful, navigate to the home page
      localStorage.setItem("user", JSON.stringify(user.data));
      nav("/HomePage");
    } catch (error) {
      // If the request fails, show an error message
      const errorDiv = document.createElement("div");
      errorDiv.textContent = "Invalid email or password";
      errorDiv.style.color = "red"; // Make the text red
      form.password.parentNode.insertBefore(
        errorDiv,
        form.password.nextSibling
      );

      // Remove the error message after 3 seconds
      setTimeout(() => {
        errorDiv.remove();
      }, 1000);
    }
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <form className="mt-4" onSubmit={handleSubmit}>
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
            required
            style={{ width: "50%" }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword5" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="inputPassword5"
            name="password"
            className="form-control"
            aria-describedby="passwordHelpBlock"
            placeholder="Enter password"
            required
            style={{ width: "50%" }}
          />
        </div>
        <div className="d-grid gap-2">
          <button
            type="submit"
            className="btn btn-success "
            style={{ width: "50%" }}
          >
            Sign in
          </button>
        </div>

        <div className="mt-3">
          Forgot your password? <a href="/ForgotPasswordPage">Click Here</a>
        </div>
        <div className="mt-3">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
