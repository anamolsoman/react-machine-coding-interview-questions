import React, { useEffect } from "react";

function Throttling() {
  const handleMouseMove = (e) => {
    //everytime the mouse moved this function will be invoked
    console.log("api call to do some operations...");
  };
  const throttleFunction = (func, delay) => {
    let timer = false;
    return (...args) => {
      if (!timer) {
        timer = true;
        func(...args);
        setTimeout(() => (timer = false), delay);
      }
    };
  };
  //event listener to track the movement of the mouse
  window.addEventListener("mousemove", throttleFunction(handleMouseMove, 2000));
  return (
    <div className="bg-gray-400 min-h-[1500px]" id="throttle">
      Throttle
    </div>
  );
}

export default Throttling;
