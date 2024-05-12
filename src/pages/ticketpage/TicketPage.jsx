import "./TicketPage.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { name } from "ejs";

const TicketPage = () => {
  const editMode = false;

  const [formdata, setFormData] = useState({
    email: "",
    requestType: "",
    status: "not started",
    complain: "",
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

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(formdata);
    axios
      .post("http://localhost:9002/ticket", { name: value })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
    // setFormData({
    //   email: "",
    //   RequestType: "",
    //   status: "",
    //   complain: "",
    // });
  };

  const editmode = false;
  return (
    <section id="newticket-wrap">
      <h1> </h1>

      <div className="complainOverview">
        <div>
          <h3 className="h">
            {" "}
            {editMode ? "Update your Ticket" : "Create Ticket"}{" "}
          </h3>
          <p>write and address new querries and issues</p>
        </div>

        <form className="complainTicket" onSubmit={handlesubmit}>
          <div id="toprow">
            <div>
              <label htmlFor="email">Customer Email</label>
              <input
                name="email"
                type="email"
                value={formdata.email}
                onChange={handleChange}
                placeholder="Type Email"
              />
            </div>

            <div>
              <label htmlFor="requestType">Request Ticket Type</label>
              <br></br>
              <select
                name="requestType"
                value={formdata.requestType}
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
              <label htmlFor="status">Priority Status</label>
              <br></br>
              <select
                onChange={handleChange}
                name="status"
                value={formdata.status}
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
              <label htmlFor="complain">Ticket Body</label>
              <textarea
                onChange={handleChange}
                name="complain"
                id="complain"
                value={formdata.complain}
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
