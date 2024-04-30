import "./newTicket.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const NewTicket = () => {
  const [formdata, setFormData] = useState({
    Email: "",
    RequestType: "",
    Status: "",
    complain: "",
    timestamp: new Date().toISOString(),
  });

  const navigate = useNavigate();
  let { id } = useParams();

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
    console.log(formdata);
    setFormData({
      Email: "",
      RequestType: "",
      Status: "",
      complain: "",
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <section id="newticket-wrap">
      <h1>New Ticket</h1>

      <div className="complainOverview">
        <div>
          <h3>Create Quick Ticket</h3>
          <p>write and address new querries and issues</p>
        </div>

        <form className="complainTicket" onSubmit={handlesubmit}>
          <div id="toprow">
            <div>
              <label>Customer Email</label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                placeholder="Type Email"
              />
            </div>

            <div>
              <label>Request Ticket Type</label>
              <br></br>
              <select
                label="Request Ticket Type"
                name="Requesttype"
                onChange={handleChange}
              >
                <option>Choose Type</option>
                <option>Unable to Load</option>
                <option>Unable to Call</option>
                <option>Unable to Browse</option>
              </select>
            </div>

            <div>
              <label>Priority Status</label>
              <br></br>
              <select
                label="Priority Status"
                onChange={handleChange}
                name="status"
              >
                <option>Select Priority</option>
                <option>New Tickets</option>
                <option> On-Going Tickets</option>
                <option>Resolved Tickets</option>
              </select>
            </div>

            <div>
              <label>Ticket Body</label>
              <textarea
                onChange={handleChange}
                name="complain"
                id="complain"
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

export default NewTicket;
