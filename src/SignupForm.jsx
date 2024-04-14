// SignInForm.tsx
import React from 'react';
// import './SignInForm.css'; // Import your custom CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SignupForm= () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <form className="mt-4">
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input type="text" className="form-control" id="firstName" placeholder="First Name"  />
          </div>
          <div className="col">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input type="text" className="form-control" id="username" placeholder="Username" style={{ width: '50%' }}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="email" placeholder="Enter email"style={{ width: '50%' }} />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword5" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="inputPassword5"
            className="form-control"
            aria-describedby="passwordHelpBlock"
            placeholder="Enter password" style={{ width: '50%' }}
          />
          <div id="passwordHelpBlock" className="form-text">
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces,
            special characters, or emoji.
          </div>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="termsCheck" />
          <label className="form-check-label" htmlFor="termsCheck">
            I agree to the Terms and Privacy Policy.
          </label>
        </div>
        <button type="submit" className="btn btn-success btn-block" style={{ width: '50%' }}>
          Sign in
        </button>
       
        <div className="mt-3">
          have an account? <a href="/signup">Sign In</a>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
