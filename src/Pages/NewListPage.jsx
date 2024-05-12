import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import NavBar from "../Components/NavBar";
import { useLocation, useNavigate } from "react-router-dom";
import DateTimePicker from "../Components/TimePicker";
import axios from "axios";

const NewListPage = () => {
  const location = useLocation();
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [buttonText, setButtonText] = useState("Create");
  const buttonTextRef = useRef(buttonText);
  const [id, setId] = useState(location.state ? location.state.taskId : null); // Use useState instead of useRef

  const user = JSON.parse(localStorage.getItem("user"));
  const userName=user.username;

  const [data, setData] = useState();
  useEffect(() => {
    if (location.state && location.state.taskId) {
      const url =
        `${process.env.REACT_APP_SERVER_URL}/users/${userName}/tasks/` + location.state.taskId;
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          // Store the data in local storage
          localStorage.setItem("taskData", JSON.stringify(response.data));
        })
        .catch((error) => {
          console.error("Error fetching tasks: ", error);
        });
    } else {
      // If there's no taskId in the location state, try to load the data from local storage
      const storedData = localStorage.getItem("taskData");

      if (storedData) {
        setData(JSON.parse(storedData));
      }
    }
  }, []);

  const [date1, setdate1] = useState(
    location.state ? location.state.date : null
  ); // Use useState instead of useRef
  const [stat, setstat] = useState(
    location.state ? location.state.status : null
  ); // Use useState instead of useRef
  const [dateName, setdateName] = useState(
    location.state ? location.state.name : ""
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

    if (!dateRef.current.value) {
      alert("Date is required");
      return;
    } else {
      const itemDate = new Date(dateRef.current.value);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Set the time to 00:00:00.000
      let status;
      let stat = data ? (data.status ? data.status : "") : "";
      if (stat == "Done") status = "Done";
      else status = itemDate < today ? "Due" : "Other";
      const newItem = {
        title: titleRef.current.value,
        details: detailsRef.current.value,
        dateTime: dateRef.current.value,
        status: status, // Or whatever default status you want
      };
      localStorage.removeItem("taskData")
      if (id) {
        // If id is set, we're editing an existing task
        if (stat === "Done") status = "Done";
        else status = itemDate < today ? "Due" : "Other";
        newItem._id = id;
        axios
          .put(`${process.env.REACT_APP_SERVER_URL}/users/${userName}/tasks/${id}`, newItem)
          .then((response) => {
            // Handle successful update
            nav("/ViewListPage",{state: {
              name: dateName,
              date:date1

            }});
          })
          .catch((error) => {
            console.error("Error updating task: ", error);
          });
      } else {
        // If id is not set, we're creating a new task
        axios
          .post(`${process.env.REACT_APP_SERVER_URL}/users/${userName}/tasks`, newItem)
          .then((response) => {
            // Handle successful creation
            nav("/ViewListPage",{state: {
              name: dateName,
              date:date1

            }});
          })
          .catch((error) => {
            console.error("Error creating task: ", error);
          });
      }
    }
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
              required
              style={{ border: "10px solid #28cdba" }}
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
              style={{ border: "10px solid #28cdba" }}
            />
          </div>
          <div className="col">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <DateTimePicker
              className="form-control"
              id="date"
              placeholder="Date"
              defaultValue={data ? data.dateTime : ""}
              ref={dateRef} // Use the ref here
              required
              style={{ border: "10px solid #28cdba" }}
            />
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn "
            style={{ backgroundColor: "#28cdba" }}
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewListPage;
