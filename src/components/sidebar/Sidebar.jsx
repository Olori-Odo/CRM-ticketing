import { NavLink, Navigate, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { LuTicket } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi2";
import { RiSettingsLine } from "react-icons/ri";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Sidebar = () => {
  const navigate = useNavigate();
  const links = [
    { id: 1, tolink: "/", icon: <RxDashboard />, label: "Dashboard" },
    { id: 2, tolink: "/users", icon: <FaRegUser />, label: "Users" },
    { id: 3, tolink: "/newticket", icon: <LuTicket />, label: "Tickets" },
    {
      id: 4,
      tolink: "/officials",
      icon: <HiOutlineUsers />,
      label: "Officials",
    },
    {
      id: 5,
      tolink: "/SiteSettings",
      icon: <RiSettingsLine />,
      label: "Site Settings",
    },
  ];

  const linksoutput = links.map((item) => {
    return (
      <NavLink id="links" key={item.id} to={item.tolink}>
        {item.icon}&nbsp;&nbsp; {item.label}
      </NavLink>
    );
  });

  return (
    <div id="sidewrapper">
      <div id="heading">TICKET LEAD</div>

      <div id="linkwrapper">{linksoutput}</div>

      <div className="icon-links">
        <div className="icon" onClick={() => navigate("/")}>
          {" "}
          <IoArrowBack />
        </div>
        <div className="icon" onClick={() => navigate("/ticket")}>
          {" "}
          <IoArrowForward />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
