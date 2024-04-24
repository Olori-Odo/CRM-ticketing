import { useState } from "react";
import "./newTicket.css";

// const [createTicket, setCreateTicket] = useState({
//   email: "",
//   ticket: "",
//   priority: [""],
//   complain: "",
// });

// const handleChange = (e) => {
//   const { name, value } = e.target;

//   setCreateTicket(
//     prev({
//       ...prev,
//       [name]: value,
//     })
//   );
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(ticket);
// };

const NewTicket = () => {
  return (
    <section>
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
                <option>Choose Type</option>
                <option>Unable to Load</option>
                <option>Unable to Call</option>
                <option>Unable to Browse</option>
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
