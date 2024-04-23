import   "./Topbar.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import img from '../../assets/projectimg.png';
import { RiArrowDropDownLine } from "react-icons/ri";
const TopBar=()=>{


  return(
    <div id='topbar'  >
      <div id='namecontainer'>
        <p> <FaBarsStaggered/> Welcome! <strong>John Smith</strong> </p>
      </div>
      <div id='usernoticedash'>
        <div id='notice'>
          <FaRegBell/>
        </div>
        <div id='userdash'>
          <div id='userdashimg'>
          <img src={img} alt="?" />
          </div>
          <div id='officialdash'>
             <p> Alex Robert  <RiArrowDropDownLine/></p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TopBar