import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import NavBar from '../Components/NavBar';

const MyListPage = () => {
  return (
    <div> <NavBar></NavBar>
   <div className="d-grid gap-2 mt-4">
  <button className="btn btn-primary" type="button" style={{marginTop:"80px",width:"50vw", marginLeft:"20px"}}>Button</button>
  <button className="btn btn-primary" type="button" style={{marginTop:"80px",width:"50vw" ,marginLeft:"20px"}}>Button</button>
  <button className="btn btn-primary" type="button" style={{marginTop:"80px",width:"50vw",marginLeft:"20px"}}>Button</button>

</div>
</div>
            
  );
};

export default MyListPage;

