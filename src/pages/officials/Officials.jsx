import React from "react";
import AFO from "../../../src/assets/images/AFO.png";
import Rahmat from "../../../src/assets/images/Rahmat.jpeg";
import Hafsah from "../../../src/assets/images/Hafsah.jpeg";
import img from "../../assets/images/avatar.png";
import "./Officials.css";

const Officials = () => {
  return (
    <section id="officials-wrap">
      <div>
        <img id="avatar" src={AFO} alt="" className="img" />
        <h3>FATAI Akinyemi</h3>
      </div>

      <div>
        <img id="avatar" src={img} alt="" className="img" />
        <h3>RAPHAEL Ojo</h3>
      </div>

      <div>
        <img id="avatar" src={Hafsah} alt="" className="img" />
        <h3>HAFSAH Fashola</h3>
      </div>

      <div>
        <img id="avatar" src={img} alt="" className="img" />
        <h3>LATEEF Salako</h3>
      </div>

      <div>
        <img id="avatar" src={img} alt="" className="img" />
        <h3>ABDULLAHI Ilesanmi</h3>
      </div>

      <div>
        <img id="avatar" src={Rahmat} alt="" className="img" />
        <h3>RAHMATALLAH AbdulRaheem</h3>
      </div>

      <div>
        <img id="avatar" src={img} alt="" className="img" />
        <h3>OLAWALE Obaweya</h3>
      </div>

      <div>
        <img id="avatar" src={img} alt="" className="img" />
        <h3>JAMES Nwali</h3>
      </div>
    </section>
  );
};

export default Officials;
