// SignUp.tsx
import React from "react";
//import './SignUp.css'; // Importing your custom CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import TitleDiv from "../Components/TitleDiv";
import LoginForm from "../Components/LoginForm";
import "../CSS_Files/SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import  { useState, useEffect } from "react";

import axios from "axios"; // Import axios to make HTTP requests

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("email: "+email)
      await axios.post("http://localhost:5000/users/forgot-password", { email });
      alert(
        "An email has been sent to " + email + " with further instructions."
      );
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending the email. Error: " + error.message);
    }
  };


  return (
    <div className="sign-in-page">
      <div className="task-div">
        .<TitleDiv></TitleDiv>
      </div>
      <div className="sign-in-form">
        <div className="container" onSubmit={handleSubmit}>
          <h1>Forgot Your Password?</h1>
          <form className="mt-4">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-success "
                style={{ width: "50%" }}
              >
                Send Code
              </button>
            </div>
          </form>
          <div className="mt-3">
            have an account? <Link to={"/SignIn"}>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
