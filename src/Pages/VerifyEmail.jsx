// SignUp.tsx
import React from "react";
//import './SignUp.css'; // Importing your custom CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import TitleDiv from "../Components/TitleDiv";
import LoginForm from "../Components/LoginForm";
import "../CSS_Files/SignIn.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const handleVerify = async (event) => {
    event.preventDefault(); // Prevent form submission
  
    const form = event.target;
    const enteredCode = form.elements.code.value; // Get the value of the input
    const user = JSON.parse(localStorage.getItem("user"));

    if (enteredCode === localStorage.getItem("code")) {
      // Save the user in the database
      await axios.post(`https://swe363project-production.up.railway.app/users`, user);
      // Navigate to home page
      localStorage.removeItem("code")

      navigate("/HomePage");
    } else {
      alert('Verification code is not correct');
    }
  };
  
  return (
    <div className="sign-in-page">
      <div className="task-div">
        .<TitleDiv></TitleDiv>
      </div>
      <div className="sign-in-form">
        <div className="container">
          <h1>Enter The Code</h1>
          <form className="mt-4" onSubmit={handleVerify}>
            <div className="mb-3">
              <label htmlFor="code" className="form-label">
                Code
              </label>
              <input
                type="text"
                className="form-control"
                id="code"
                name="code"
                placeholder="Enter Code"
                style={{ width: "50%" }}
              />
            </div>
            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-success "
                style={{ width: "50%" }}
              >
                Verify
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
