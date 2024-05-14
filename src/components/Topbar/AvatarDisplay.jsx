import React from "react";
import BlankAvatar from "../../assets/projectimg.png";

const AvatarDisplay = ({ owner, avatar }) => {
  return (
    <div className="avatar-container">
      <div className="image-container">
        {/* <img id="top-image" src={Avatar} alt="avatar display" /> */}
        <img
          id="top-image"
          src={avatar ? avatar : BlankAvatar}
          alt={"photo of " + owner}
        />
      </div>
    </div>
  );
};

export default AvatarDisplay;
