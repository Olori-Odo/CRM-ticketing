import React from "react";

const DeleteBox = () => {
  const deleteTicket = () => {
    console.log("deleted..");
  };
  return (
    <div className="delete-box" onClick={deleteTicket}>
      x
    </div>
  );
};

export default DeleteBox;
