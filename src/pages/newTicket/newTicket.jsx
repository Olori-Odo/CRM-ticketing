import "./newTicket.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const NewTicket = () => {
  return (
    <section id="newticket-wrap">
      <h1>New Ticket</h1>

      <div className="complainOverview">
        <div>
          <h3>Create Quick Ticket</h3>
          <p>write and address new querries and issues</p>
        </div>

        <form className="complainTicket">
          <div id="toprow">
            <div>
              <label>Customer Email</label>
              <input name="email" type="email" placeholder="Type Email" />
            </div>

            <div>
              <label>Request Ticket Type</label>
              <br></br>
              <select label="Request Ticket Type">
                <option>Choose Type</option>
                <option>Unable to Load</option>
                <option>Unable to Call</option>
                <option>Unable to Browse</option>
              </select>
            </div>

            <div>
              <label>Priority Status</label>
              <br></br>
              <select label="Priority Status">
                <option>Select Priority</option>
                <option>New Tickets</option>
                <option> On-Going Tickets</option>
                <option>Resolved Tickets</option>
              </select>
            </div>

            <div>
              <label>Ticket Body</label>
              <textarea
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
