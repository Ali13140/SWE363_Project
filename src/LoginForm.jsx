// SignInForm.tsx
import React from 'react';
// import './SignInForm.css'; // Import your custom CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SignInForm= () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <form className="mt-4">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" style={{ width: '50%' }} />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword5" className="form-label">
            Password
          </label>
          <input type="password" id="inputPassword5" className="form-control"aria-describedby="passwordHelpBlock" placeholder="Enter password" style={{ width: '50%' }}/>
          <div id="passwordHelpBlock" className="form-text " style={{ width: '50%' }}>
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces,
            special characters, or emoji.
          </div>
        </div>
        <div className="d-grid gap-2">
        <button type="submit" className="btn btn-success " style={{ width: '50%' }}>Sign in</button>

        </div>


        <div className="mt-3">
        Forgot your password? <a href="/forgot-password">Click Here</a>
        </div>
        <div className="mt-3">
          Don't have an account? <a href="/signup">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
