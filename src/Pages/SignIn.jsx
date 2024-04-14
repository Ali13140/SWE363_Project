// SignUp.tsx
import React from 'react';
//import './SignUp.css'; // Importing your custom CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import TitleDiv from '../Components/TitleDiv';
import LoginForm from "../Components/LoginForm"
import '../CSS_Files/SignIn.css'

const SignIn = () => {
  return (
    <div className="sign-in-page">
       <div className="task-div">
    <TitleDiv></TitleDiv>

    </div>
    <div className="sign-in-form">
        <LoginForm></LoginForm>
    </div>
   
  </div>  );
};

export default SignIn;
