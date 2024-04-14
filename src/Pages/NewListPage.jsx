import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import NavBar from '../Components/NavBar';

const NewListPage = () => {
  return (
    <div> <NavBar></NavBar>
    <form className="mt-4 ">
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="firstName" className="form-label">
              Title
            </label>
            <input type="text" className="form-control" id="firstName" placeholder="First Name"  />
          </div>
          <div className="col">
            <label htmlFor="lastName" className="form-label">
              Details
            </label>
            <input type="textarea" className="form-control" id="lastName" placeholder="Last Name" />
          </div>
          <div className="col">
            <label htmlFor="lastName" className="form-label">
              Date
            </label>
            <input type="Date" className="form-control" id="lastName" placeholder="Last Name" />
          </div>
         
        </div>
        <button type="submit" className="btn btn-success " >
          Create
        </button>
        </form>
        </div>
            
  );
};

export default NewListPage;

