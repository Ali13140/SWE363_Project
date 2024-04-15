// SignUp.tsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import TitleDiv from "../Components/TitleDiv";
import "../CSS_Files/SignIn.css";
import SignupForm from "../Components/SignupForm";

const SignUp = () => {
  return (
    <div className="sign-in-page">
      <div className="task-div">
        <TitleDiv></TitleDiv>
      </div>
      <div className="sign-in-form">
        <SignupForm></SignupForm>
      </div>
    </div>
  );
};

export default SignUp;
