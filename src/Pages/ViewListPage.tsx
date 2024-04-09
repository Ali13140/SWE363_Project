import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import NavBar from '../NavBar';
import '../CSS_Files/ViewListPage.css'

const ViewListPage = () => {
  return (
    <div><NavBar></NavBar>
    <div className="container mt-5" >
      <div className="row">
        <div className="col" id='col'>
          <h2>Title</h2>
        <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
        </ul>
        </div>
        <div className="col">
          <h2>Details</h2>
        <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
        </ul>
        </div>
        <div className="col">
          <h2>Date/Time</h2>
        <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
        </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ViewListPage;
