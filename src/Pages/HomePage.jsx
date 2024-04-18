import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import NavBar from "../Components/NavBar";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const nav = useNavigate();

  const handleClick = (event) => {
    const button = event.target;
    const buttonName = button.name;
    if (buttonName == "list") nav("/MyListPage");
    else nav("/NewListPage");
  };
  return (
    <div>
      {" "}
      <NavBar></NavBar>
      <div className="container text-center mt-5">
        <h2>What do you want to do in the future?</h2>
        <br />
        <div className="d-grid gap-2 d-md-flex justify-content-md-center  d-md-block">
          <button
            className="btn  me-md-2"
            type="button"
            name="list"
            onClick={handleClick}
            style={{ backgroundColor: "#28cdba" }}
          >
            My List
          </button>
          <button
            className="btn "
            type="button"
            name="newList"
            onClick={handleClick}
            style={{ backgroundColor: "#28cdba" }}
          >
            Create New List
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
