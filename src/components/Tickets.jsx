import React from "react";
import { Link } from "react-router-dom";
import ProgressDisplay from "./ProgressDisplay";
import PriorityDisplay from "./PriorityDisplay";
import DeleteBox from "./DeleteBox";
import StatusDisplay from "./StatusDisplay";

const Tickets = ({ color, filteredTicket }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-links">
        {/* <Link> */}
        <div className="ticket-color"></div>
        <h3> {filteredTicket.title} </h3>
        <PriorityDisplay />
        <ProgressDisplay />
        <StatusDisplay />
        {/* </Link> */}

        <DeleteBox />
      </div>
    </div>
  );
};

export default Tickets;
