import "./TicketPage.css";
import { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { response } from "express";
import axios from "axios";

// const axios = require(axios);

const TicketPage = () => {
  const [formData, setFormData] = useState({
    status: "not started",
    timestamp: new Date().toISOString(),
  });

  const status = [
    "Select Priority",
    " New Tickets",
    "On-Going Tickets",
    " Resolved Tickets",
  ];

  const requestType = [
    "Choose Type",
    "Unable to Load",
    "Unable to Call",
    "Unable to Browse",
  ];

  // const navigate = useNavigate();
  // let { id } = useParams();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const editMode = false;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!editMode) {
      const response = await axios.post("http://localhost:8080", {
        formData,
      });
      const success = response.status === 200;
      if (success) {
        Navigate("/");
      }
    }
  };

  return (
    <section id="newticket-wrap">
      <h1> HT </h1>

      <div className="complainOverview">
        <div>
          <h3> {editMode ? "Update your Ticket" : "Create Ticket"} </h3>
          <p>write and address new querries and issues</p>
        </div>

        <form className="complainTicket" onSubmit={handleSubmit}>
          <div id="toprow">
            <div>
              <label>Customer Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Type Email"
              />
            </div>

            <div>
              <label>Request Ticket Type</label>
              <br></br>
              <select
                label="Request Ticket Type"
                name="RequestType"
                value={formData.RequestType}
                onChange={handleChange}
                required={true}
              >
                {requestType?.map((RequestType, _index) => (
                  <option key={_index} value={RequestType}>
                    {" "}
                    {RequestType}{" "}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Priority Status</label>
              <br></br>
              <select
                label="Priority Status"
                onChange={handleChange}
                name="status"
                value={formData.status}
                required={true}
              >
                {status?.map((PriorityStatus, _index) => (
                  <option key={_index} value={PriorityStatus}>
                    {" "}
                    {PriorityStatus}{" "}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Ticket Body</label>
              <textarea
                onChange={handleChange}
                name="complain"
                id="complain"
                value={formData.complain}
                type="text"
                placeholder="Type Issue Here"
              />
            </div>
          </div>

          <button type="submit" id="submit">
            Send Ticket
          </button>
        </form>
      </div>
    </section>
  );
};

export default TicketPage;
