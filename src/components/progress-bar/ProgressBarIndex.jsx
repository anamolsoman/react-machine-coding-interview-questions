import React from "react";
import ProgressBar from "./ProgressBar";

function ProgressBarIndex() {
  return (
    <div className="p-4">
      <ProgressBar bgColor="green" value="30" max="100" />
      <ProgressBar bgColor="yellow" value="60" max="100" />
    </div>
  );
}

export default ProgressBarIndex;
