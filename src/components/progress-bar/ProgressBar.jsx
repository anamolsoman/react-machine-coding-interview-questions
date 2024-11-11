import React, { useEffect } from "react";

function ProgressBar({ bgColor, value, max }) {


  const percentage = (value / max) * 100;

  return (
    <div className="w-full bg-gray-200 mt-2">
      {/* {percentage}% */}
      <div
        className={`h-full rounded-r-full bg-${bgColor}-500`}
        style={{ width: `${percentage}%` }}
      >
        {value}%
      </div>
    </div>
  );
}

export default ProgressBar;
