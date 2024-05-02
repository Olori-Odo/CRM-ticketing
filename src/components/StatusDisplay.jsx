import React from "react";

const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color;

    switch (status) {
      case "done":
        color = "rgb(233, 233, 221)";
        break;

      case "working on it":
        color = "rgb(200, 186, 240)";
        break;

      case "stuck":
        color = "rgb(255, 211, 120)";
        break;
      default:
        color = "rgb(186, 214, 118)";
    }
    return color;
  };

  return (
    <div
      className="status-display"
      style={{ backgroundColor: getColor(status) }}
    >
      {status}
    </div>
  );
};

export default StatusDisplay;
