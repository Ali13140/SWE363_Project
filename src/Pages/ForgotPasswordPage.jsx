// SignUp.tsx
import React from "react";
//import './SignUp.css'; // Importing your custom CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import TitleDiv from "../Components/TitleDiv";
import LoginForm from "../Components/LoginForm";
import "../CSS_Files/SignIn.css";
import { Link, useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  return (
    <div className="sign-in-page">
      <div className="task-div">
        .<TitleDiv></TitleDiv>
      </div>
      <div className="sign-in-form">
        <div className="container">
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
