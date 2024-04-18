import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import NavBar from "../Components/NavBar";
import "../CSS_Files/ViewListPage.css";
import { useNavigate, useLocation } from "react-router-dom";

const ViewListPage = () => {
  const location = useLocation();

  const nav = useNavigate();
  // Simulate data from a database
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("myData"); // This acts as a local DataBase until we implement the DB in the backend
    return savedData
      ? JSON.parse(savedData)
      : [
          {
            title: "Item 1",
            details: "Details 1",
            dateTime: "10/10/2024 1:41PM",
            status: "Done",
          },
          {
            title: "Item 2",
            details: "Details 2",
            dateTime: "10/10/2024 3:41PM",
            status: "Due",
          },
          {
            title: "item 3",
            details: "Details 3",
            dateTime: "10/10/2024 5:41PM",
            status: "Other",
          },
          {
            title: "item 3",
            details: "Details 3",
            dateTime: "10/10/2024 4:41PM",
            status: "Other",
          },
          // Add more items as needed
        ];
  });

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    if (location.state && location.state.data) {
      if (location.state.index1 !== null) {
        handleUpdateItem(location.state.data, location.state.index1);
      } else {
        // If index doesn't exist, add a new item
        const newData = [...data, location.state.data];
        const sortedData = sortItems(newData);
        localStorage.setItem("myData", JSON.stringify(sortedData));
        setData(sortedData);
      }
    }
  }, [location]);
  const sortItems = (items) => {
    return [...items].sort(
      (a, b) => new Date(a.dateTime) - new Date(b.dateTime)
    );
  };

  const handleDone = (index) => {
    const newData = [...data];
    if (newData[index].status == "Done") newData[index].status = "Other";
    else newData[index].status = "Done";
    setData(newData);
  };

  const handleEdit = (index) => {
    const newData = [...data];
    // Navigate to the NewListPage and pass the object data
    nav("/NewListPage", { state: { data: newData[index], index1: index } });
  };

  const handleRemove = (index) => {
    const newData = data.filter((item, i) => i !== index);
    setData(newData);
    localStorage.setItem("myData", JSON.stringify(newData));
  };
  const handleUpdateItem = (updatedItem, index) => {
    // Get the current items from the local storage
    const savedItems = JSON.parse(localStorage.getItem("myData")) || [];

    // Replace the item at the given index with the updated item
    savedItems[index] = updatedItem;
    const sortedItems = sortItems(savedItems);

    // Save the updated items back to the local storage
    localStorage.setItem("myData", JSON.stringify(sortedItems));
    setData(sortedItems);
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="container mt-5">
        <div className="row">
          <div className="col" id="divs">
            <h2>Title</h2>
            <ul className="list-group">
              {data.map((item, index) => (
                <li key={index} className={`list-group-item ${item.status}`}>
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
                          onClick={() => handleDone(index)}
                        >
                          Done
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => handleEdit(index)}
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
                          onClick={() => handleRemove(index)}
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
            <h2>Details</h2>
            <ul className="list-group">
              {data.map((item, index) => (
                <li key={index} className={`list-group-item ${item.status}`}>
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
                          onClick={() => handleDone(index)}
                        >
                          Done
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => handleEdit(index)}
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
                          onClick={() => handleRemove(index)}
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
            <h2>Date/Time</h2>
            <ul className="list-group">
              {data.map((item, index) => (
                <li key={index} className={`list-group-item ${item.status}`}>
                  {item.dateTime}
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
                          onClick={() => handleDone(index)}
                        >
                          Done
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => handleEdit(index)}
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
                          onClick={() => handleRemove(index)}
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
