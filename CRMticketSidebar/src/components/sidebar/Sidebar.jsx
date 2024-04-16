import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { LuTicket } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi2";
import { RiSettingsLine } from "react-icons/ri";
import ticket from "..//../assets/Tickets.png";

import MyNavlinks from "../navlink/Navlinks";

const Sidebar = () => {
  return (
    <div id="sidewrapper">
      <div id="heading">TICKET LEAD</div>

      <div id="linkwrapper">
        <NavLink id="links"   to={'/'}>
          <RxDashboard /> &nbsp;&nbsp; Dashboard
        </NavLink>
        <NavLink id="links" to={'/users'}>
          <FaRegUser />
          &nbsp;&nbsp; Users
        </NavLink>
        <NavLink  to={'/tickets'} id="links">
          {" "}
          <LuTicket  /> &nbsp;&nbsp; Tickets
        </NavLink>
        <NavLink id="links"  to={'/officials'}>
          {" "}
          <HiOutlineUsers />
          &nbsp;&nbsp; Officials
        </NavLink>
        <NavLink to={'/SiteSettings'}   id="links">
          {" "}
          <RiSettingsLine />
          &nbsp;&nbsp;Site Settings{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
