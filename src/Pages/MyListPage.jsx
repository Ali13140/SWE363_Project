import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import NavBar from "../Components/NavBar";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

const MyListPage = () => {
  const nav = useNavigate();

  const handleClick = (event) => {
    const button = event.target;
    const buttonName = button.name;
    let dateInfo;

    if (buttonName === "Today") {
      dateInfo = { date: moment().format("YYYY-MM-DD hh:mm A") }; // Today's date
    } else if (buttonName === "Week") {
      const today = moment();
      const oneWeekAgo = moment().subtract(7, "days");
      dateInfo = {
        startDate: oneWeekAgo.format("YYYY-MM-DD hh:mm A"),
        endDate: today.format("YYYY-MM-DD hh:mm A"),
      }; // Last 7 days
    } else if (buttonName === "Month") {
      const today = moment();
      const oneMonthAgo = moment().subtract(1, "months");
      dateInfo = {
        startDate: oneMonthAgo.format("YYYY-MM-DD hh:mm A"),
        endDate: today.format("YYYY-MM-DD hh:mm A"),
      }; // Last 30 days
    }

    nav("/ViewListPage", { state: { date: dateInfo, name: buttonName } });
  };

  return (
    <div>
      {" "}
      <NavBar></NavBar>
      <div className="d-grid gap-2 mt-4">
        <button
          className="btn "
          name="Today"
          type="button"
          style={{
            marginTop: "80px",
            width: "50vw",
            marginLeft: "20px",
            backgroundColor: "#28cdba",
          }}
          onClick={handleClick}
        >
          Today
        </button>
        <button
          className="btn"
          name="Week"
          type="button"
          style={{
            marginTop: "80px",
            width: "50vw",
            marginLeft: "20px",
            backgroundColor: "#28cdba",
          }}
          onClick={handleClick}
        >
          This Week
        </button>
        <button
          className="btn "
          name="Month"
          type="button"
          style={{
            marginTop: "80px",
            width: "50vw",
            marginLeft: "20px",
            backgroundColor: "#28cdba",
          }}
          onClick={handleClick}
        >
          This Month
        </button>
        <button
          className="btn "
          type="button"
          style={{
            marginTop: "80px",
            width: "50vw",
            marginLeft: "20px",
            backgroundColor: "#28cdba",
          }}
          onClick={handleClick}
        >
          All
        </button>
      </div>
    </div>
  );
};

export default MyListPage;
