// SignUp.tsx
import React from 'react';
//import './SignUp.css'; // Importing your custom CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import TitleDiv from './TitleDiv';
import './SignIn.css'
import SignupForm from './SignupForm';

const SignUp: React.FC = () => {
  return (
    <div className="sign-in-page">
       <div className="task-div">
    <TitleDiv></TitleDiv>

    </div>
    <div className="sign-in-form">
        <SignupForm></SignupForm>
    </div>
   
  </div>  );
};

export default SignUp;
