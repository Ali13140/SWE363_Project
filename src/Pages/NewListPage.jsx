import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import NavBar from "../Components/NavBar";
import { useLocation, useNavigate } from "react-router-dom";

const NewListPage = () => {
  const location = useLocation();
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [buttonText, setButtonText] = useState("Create");
  const buttonTextRef = useRef(buttonText);

  const data = location.state ? location.state.data : null;
  const [index, setIndex] = useState(
    location.state ? location.state.index1 : null
  ); // Use useState instead of useRef

  useEffect(() => {
    buttonTextRef.current = buttonText;
  }, [buttonText]);

  useEffect(() => {
    const newButtonText = data ? "Edit" : "Create";
    if (buttonTextRef.current !== newButtonText) {
      setButtonText(newButtonText);
    }
  }, [data]);

  const titleRef = useRef();
  const detailsRef = useRef();
  const dateRef = useRef();

  const handleCreateItem = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    const newItem = {
      title: titleRef.current.value,
      details: detailsRef.current.value,
      dateTime: dateRef.current.value,
      status: "Other", // Or whatever default status you want
    };

    // Navigate to the ViewListPage and pass the new item
    nav("/ViewListPage", { state: { data: newItem, index1: index } });
  };

  return (
    <div>
      <NavBar></NavBar>
      <form className="mt-4 " onSubmit={handleCreateItem}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Title"
              defaultValue={data ? data.title : ""}
              ref={titleRef} // Use the ref here
            />
          </div>
          <div className="col">
            <label htmlFor="details" className="form-label">
              Details
            </label>
            <input
              type="textarea"
              className="form-control"
              id="details"
              placeholder="Details"
              defaultValue={data ? data.details : ""}
              ref={detailsRef} // Use the ref here
            />
          </div>
          <div className="col">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="Date"
              className="form-control"
              id="date"
              placeholder="Date"
              defaultValue={data ? data.dateTime : ""}
              ref={dateRef} // Use the ref here
            />
          </div>
        </div>
        <button type="submit" className="btn btn-success ">
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default NewListPage;
