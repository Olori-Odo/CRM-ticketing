import "./Topbar.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
// import img from "../../assets/projectimg.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import AvatarDisplay from "./AvatarDisplay";

const TopBar = ({ ticket }) => {
  return (
    <>
      <div id="topbar">
        <div id="namecontainer">
          <p>
            {" "}
            <FaBarsStaggered /> Welcome! <strong> {ticket.owner} </strong>{" "}
          </p>
        </div>
        <div id="usernoticedash">
          <div id="notice">
            <FaRegBell />
          </div>
          <div id="userdash">
            <AvatarDisplay owner={ticket.owner} avatar={ticket.avatar} />
          </div>

          <div id="officialdash">
            <p>
              {" "}
              {ticket.owner} <RiArrowDropDownLine />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
