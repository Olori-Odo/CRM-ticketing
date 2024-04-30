import React from "react";
import img from "../assets/images/avatar.png";
import AFO from "../assets/images/AFO.png";
import Hafsah from "../assets/images/Hafsah.jpeg";
import Rahmat from "../assets/images/Rahmat.jpeg";
import "./Officials.css";

const Officials = () => {
  return (
    <section>
      <div>
        <img src={AFO} alt="" className="img" />
        <h3>FATAI Akinyemi</h3>
      </div>

      <div>
        <img src={img} alt="" className="img" />
        <h3>RAPHAEL Ojo</h3>
      </div>

      <div>
        <img src={Hafsah} alt="" className="img" />
        <h3>HAFSAH Fashola</h3>
      </div>

      <div>
        <img src={img} alt="" className="img" />
        <h3>LATEEF Salako</h3>
      </div>

      <div>
        <img src={img} alt="" className="img" />
        <h3>ABDULLAHI Ilesanmi</h3>
      </div>

      <div>
        <img src={img} alt="" className="img" />
        <h3>RAHMATALLAH AbdulRaheem</h3>
      </div>

      <div>
        <img src={img} alt="" className="img" />
        <h3>OLAWALE Obaweya</h3>
      </div>

      <div>
        <img src={img} alt="" className="img" />
        <h3>JAMES Nwali</h3>
      </div>
    </section>
  );
};

export default Officials;
