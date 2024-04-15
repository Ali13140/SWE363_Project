import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import NavBar from "../Components/NavBar";
import { Link, useNavigate } from "react-router-dom";

const MyListPage = () => {
  const nav = useNavigate();

  const handleClick = (event) => {
    const button = event.target;
    const buttonName = button.name;
    if (buttonName == "today") nav("/ViewListPage");
    //go to view list page and pass today's date
    else if (buttonName == "week") nav("/ViewListPage");
    //go to view page and pass this week's date
    else nav("/ViewListPage");
    //go to view page and pass this week's date
  };
  return (
    <div>
      {" "}
      <NavBar></NavBar>
      <div className="d-grid gap-2 mt-4">
        <button
          className="btn btn-primary"
          name="today"
          type="button"
          style={{ marginTop: "80px", width: "50vw", marginLeft: "20px" }}
          onClick={handleClick}
        >
          Today
        </button>
        <button
          className="btn btn-primary"
          name="week"
          type="button"
          style={{ marginTop: "80px", width: "50vw", marginLeft: "20px" }}
          onClick={handleClick}
        >
          This Week
        </button>
        <button
          className="btn btn-primary"
          name="month"
          type="button"
          style={{ marginTop: "80px", width: "50vw", marginLeft: "20px" }}
          onClick={handleClick}
        >
          This Month
        </button>
      </div>
    </div>
  );
};

export default MyListPage;
