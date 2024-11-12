import React, { useEffect, useState } from "react";
import "./progress-bar.css";

function ProgressBar({ bgColor, value, max }) {
  const percentage = value - 100;

  const container = {
    width: "450px",
    height: "20px",
    position: "relative",
    border: "1px solid black",
    borderRadius: "10px",
    margin: "1rem",
    overflow: "hidden",
  };

  const progress = {
    backgroundColor: "green",
    position: "absolute",
    width: "100%",
    height: "100%",
    transform: `translateX(${percentage}%)`,
  };

  return (
    // <div className="w-full bg-gray-200 mt-2">
    //   {/* {percentage}% */}
    //   <div
    //     className={`h-full rounded-r-full bg-${bgColor}-500`}
    //     style={{ width: `${percentage}%` }}
    //   >
    //     {value}%
    //   </div>
    // </div>
    <div className="container" style={container}>
      <div className="progress" style={progress}></div>
    </div>
  );
}

export default ProgressBar;
