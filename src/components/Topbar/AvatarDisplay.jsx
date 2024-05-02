import React from "react";
import Avatar from "../../assets/projectimg.png";

const AvatarDisplay = () => {
  return (
    <div className="avatar-container">
      <div className="image-container">
        <img id="top-image" src={Avatar} alt="avatar display" />
        {/* <img
          src={ticket.avatar ? ticket.avatar : BlankAvatar}
          alt={"photo of " + ticket.owner}
        /> */}
      </div>
    </div>
  );
};

export default AvatarDisplay;
