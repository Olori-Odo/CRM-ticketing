import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { LuTicket } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi2";
import { RiSettingsLine } from "react-icons/ri";
import ticket from "..//../assets/Tickets.png";



const Sidebar = () => {
  const links=[
    { id:1, tolink:'/', icon:<RxDashboard />, label:'Dashboard' }, 
    {id:2, tolink:'/users', icon:<FaRegUser />, label:'Users'}, 
    {id:3, tolink:'/tickets', icon:<LuTicket  />, label:'Tickets'}, 
    {id:4,  tolink:'/officials', icon:<HiOutlineUsers />, label:'Officials' },
     {id:5, tolink:'/SiteSettings', icon: <RiSettingsLine />, label:'Site Settings' }
  ]

  const linksoutput= links.map((item)=>{
    return <NavLink id='links' key={item.id} to={item.tolink}>{item.icon}&nbsp;&nbsp; {item.label}</NavLink>
  })
  


  return (
    <div id="sidewrapper">
      <div id="heading">TICKET LEAD</div>

      <div id="linkwrapper">
         {linksoutput}
      </div>
    </div>
  );
};

/*
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
  */




export default Sidebar;
