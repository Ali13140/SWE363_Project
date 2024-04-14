import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import NavBar from '../Components/NavBar';

const HomePage = () => {
  return (
    <div> <NavBar></NavBar>
    <div className="container text-center mt-5">
      <h2>What do you want to do in the future?</h2>
      <br />
      <div className="d-grid gap-2 d-md-flex justify-content-md-center  d-md-block">
  <button className="btn btn-primary me-md-2" type="button">Button</button>
  <button className="btn btn-primary" type="button">Button</button>
</div>
            
        </div>
    </div>
  );
};

export default HomePage;

