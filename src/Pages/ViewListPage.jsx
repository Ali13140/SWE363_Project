import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import NavBar from "../Components/NavBar";
import "../CSS_Files/ViewListPage.css";

const ViewListPage = () => {
  // Simulate data from a database
  const [data, setData] = useState([
    {
      title: "Item 1",
      details: "Details 1",
      dateTime: "Date/Time 1",
      status: "Done",
    },
    {
      title: "Item 2",
      details: "Details 2",
      dateTime: "Date/Time 2",
      status: "Due",
    },
    {
      title: "item 3",
      details: "Details 3",
      dateTime: "Date/Time 3",
      status: "Other",
    },
    // Add more items as needed
  ]);
  const handleDone = (index) => {
    const newData = [...data];
    newData[index].status = "Done";
    setData(newData);
    console.log("YO?");
  };

  const handleEdit = (index) => {
    const newData = [...data];
    newData[index].status = "Due";
    setData(newData);
  };

  const handleRemove = (index) => {
    const newData = data.filter((item, i) => i !== index);
    setData(newData);
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
