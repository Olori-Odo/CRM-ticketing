import "./Topbar.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
// import img from "../../assets/projectimg.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import AvatarDisplay from "./AvatarDisplay";

const TopBar = () => {
  return (
    <div id="topbar">
      <div id="namecontainer">
        <p>
          {" "}
          <FaBarsStaggered /> Welcome! <strong>Lateef Salako</strong>{" "}
        </p>
      </div>
      <div id="usernoticedash">
        <div id="notice">
          <FaRegBell />
        </div>
        <div id="userdash">
          {/* <div id="userdashimg">
            <img id="top-image" src={img} alt="?" />
          </div> */}
          <AvatarDisplay />
          <div id="officialdash">
            <p>
              {" "}
              Lateef Salako <RiArrowDropDownLine />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
