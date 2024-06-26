import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import NavBar from "../Components/NavBar";
import "../CSS_Files/ViewListPage.css";
import { useNavigate, useLocation } from "react-router-dom";
import addIcon from "../assets/plus-circle.svg";
import axios from "axios";
import { format } from 'date-fns';

const ViewListPage = () => {
  const location = useLocation();
  const [dateInfo, setdateInfo] = useState(
    location.state ? location.state.date : null
  ); // Use useState instead of useRef
  const [dateName, setdateName] = useState(
    location.state ? location.state.name : ""
  ); // Use useState instead of useRef

  const [currentDateInfo, setCurrentDateInfo] = useState(null);

  // Get the date from the database

  const nav = useNavigate();
  // Simulate data from a database
  const [data, setData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user.username;

  // Fetch tasks from the server when the component mounts
  useEffect(() => {
    axios
      .get(`https://swe363project-production.up.railway.app/users/${userName}`) // Replace with the actual URL and username
      .then((response) => {
        const sortedData = sortItems(response.data.tasks);
        setData(sortedData);
      })
      .catch((error) => {
        console.error("Error fetching tasks: ", error);
      });
  }, []);

  useEffect(() => {
    if (location.state) {
      setCurrentDateInfo(location.state.date);
    }
  }, [location]);

  const sortItems = (items) => {
    return [...items].sort(
      (a, b) => new Date(a.dateTime) - new Date(b.dateTime)
    );
  };

  const handleDone = async (taskId) => {
    // Find the task in your local state
    const taskIndex = data.findIndex((task) => task._id === taskId);
    const task = data[taskIndex];

    // Determine the new status
    const itemDate = new Date(task.dateTime);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set the time to 00:00:00.000
    let status = itemDate < today ? "Due" : "Other";
    if (task.status != "Done") status = "Done";

    // Optimistically update the task in your local state
    const updatedTasks = [...data];
    updatedTasks[taskIndex] = { ...task, status };
    setData(updatedTasks);

    // Update the task on the server
    try {
      const response = await axios.put(
        `https://swe363project-production.up.railway.app/users/${userName}/tasks/${taskId}`,
        updatedTasks[taskIndex]
      );
      // Update the task in your local state with the server's response
    } catch (error) {
      console.error("Error response: ", error.response);
      // Revert the changes in the local state in case of an error
      updatedTasks[taskIndex] = task;
      setData(updatedTasks);
    }
  };

  const handleRemove = (taskId) => {
    // Remove the task from the local state
    const newData = data.filter((item) => item._id !== taskId);
    setData(newData);
    localStorage.setItem("myData", JSON.stringify(newData));

    // Send a DELETE request to the server to remove the task from the database
    axios
      .delete(`https://swe363project-production.up.railway.app/users/${userName}/tasks/${taskId}`)
      .then((response) => {
        console.log("Task deleted successfully: ", response.data);
      })
      .catch((error) => {
        console.error("Error deleting task: ", error);
      });
  };

  const handleEdit = (taskId) => {
    // Navigate to the NewListPage and pass the taskId
    nav("/NewListPage", {
      state: {
        taskId: taskId,
        name: dateName,
        date:currentDateInfo

      },
    });
  };

  const handleAdd = () => {
    nav("/NewListPage", {
      state: {
        name: dateName,
        date:currentDateInfo
      },
    });
  };

  return (
    <div>
      <NavBar></NavBar> <br />
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {dateName === ""
          ? "All"
          : `${dateName === "Today" ? "" : "This "}${dateName}'s List`}
      </h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col" id="divs">
            <h2>
              Title{" "}
              <button
                className="btn me-2"
                onClick={handleAdd}
                style={{
                  position: "relative",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={addIcon}
                  alt="Theme Icon"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </button>
            </h2>

            <ul className="list-group">
              {data
                .map((item, index) => ({ ...item, originalIndex: index })) // Add originalIndex to each item
                .filter((item) => {
                  if (!currentDateInfo) return true; // If no currentDateInfo, show all items
                  const itemDate = new Date(item.dateTime);
                  if (currentDateInfo.date) {
                    const date = new Date(currentDateInfo.date);
                    return itemDate.toDateString() === date.toDateString();
                  } else if (
                    currentDateInfo.startDate &&
                    currentDateInfo.endDate
                  ) {
                    const startDate = new Date(currentDateInfo.startDate);
                    const endDate = new Date(currentDateInfo.endDate);
                    return itemDate >= startDate && itemDate <= endDate;
                  }
                })
                .map((item, index) => (
                  <li
                    key={item._id}
                    className={`list-group-item ${item.status}`}
                  >
                    {item.title}
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn  dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></button>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => handleDone(item._id)}
                          >
                            Done
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => handleEdit(item._id)}
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>

                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            style={{ color: "red" }}
                            onClick={() => handleRemove(item._id)}
                          >
                            Remove
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div className="col" id="divs">
            <h2>
              Details{" "}
              <button
                className="btn me-2"
                onClick={handleAdd}
                style={{
                  position: "relative",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={addIcon}
                  alt="Theme Icon"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </button>
            </h2>

            <ul className="list-group">
              {data
                .map((item, index) => ({ ...item, originalIndex: index })) // Add originalIndex to each item
                .filter((item) => {
                  if (!currentDateInfo) return true; // If no currentDateInfo, show all items
                  const itemDate = new Date(item.dateTime);
                  if (currentDateInfo.date) {
                    const date = new Date(currentDateInfo.date);
                    return itemDate.toDateString() === date.toDateString();
                  } else if (
                    currentDateInfo.startDate &&
                    currentDateInfo.endDate
                  ) {
                    const startDate = new Date(currentDateInfo.startDate);
                    const endDate = new Date(currentDateInfo.endDate);
                    return itemDate >= startDate && itemDate <= endDate;
                  }
                })
                .map((item, index) => (
                  <li
                    key={item._id}
                    className={`list-group-item ${item.status}`}
                  >
                    {item.details}
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn  dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></button>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => handleDone(item._id)}
                          >
                            Done
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => handleEdit(item._id)}
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>

                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            style={{ color: "red" }}
                            onClick={() => handleRemove(item._id)}
                          >
                            Remove
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div className="col" id="divs">
            <h2>
              Date/Time{" "}
              <button
                className="btn me-2"
                onClick={handleAdd}
                style={{
                  position: "relative",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={addIcon}
                  alt="Theme Icon"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </button>
            </h2>

            <ul className="list-group">
              {data
                .map((item, index) => ({ ...item, originalIndex: index })) // Add originalIndex to each item
                .filter((item) => {
                  if (!currentDateInfo) return true; // If no currentDateInfo, show all items
                  const itemDate = new Date(item.dateTime);
                  if (currentDateInfo.date) {
                    const date = new Date(currentDateInfo.date);
                    return itemDate.toDateString() === date.toDateString();
                  } else if (
                    currentDateInfo.startDate &&
                    currentDateInfo.endDate
                  ) {
                    const startDate = new Date(currentDateInfo.startDate);
                    const endDate = new Date(currentDateInfo.endDate);
                    return itemDate >= startDate && itemDate <= endDate;
                  }
                })
                .map((item, index) => (
                  <li
                    key={item._id}
                    className={`list-group-item ${item.status}`}
                  >
                    {format(new Date(item.dateTime), "yyyy-MM-dd h:mm a")}
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn  dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></button>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => handleDone(item._id)}
                          >
                            Done
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => handleEdit(item._id)}
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>

                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            style={{ color: "red" }}
                            onClick={() => handleRemove(item._id)}
                          >
                            Remove
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewListPage;
