import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar";

function ProgressBarIndex() {
  const [progress, setProgress] = useState(0);
  const [progressSpeed, setProgressSpeed] = useState(500);

  let interval = useRef(null);

  const handleProgress = () => {
    setProgress((prev) => prev + 5);
  };

  const startProgress = () => {
    interval.current = setInterval(handleProgress, progressSpeed);
  };

  const resetProgress = () => {
    setProgress(0);
    clearInterval(interval);
  };

  console.log(interval);
  //   useEffect(() => {
  //     interval.current = setInterval(handleProgress, progressSpeed);

  //     return () => {
  //       clearInterval(interval.current);
  //     };
  //   }, []);

  return (
    <div className="p-4 flex justify-center items-center flex-col">
      <div className="text-2xl">Progress Bar</div>
      <ProgressBar value={progress} max="100" />
      <div>
        <button
          className="px-3 mx-2 bg-green-600 text-white"
          onClick={startProgress}
        >
          Start
        </button>
        <button
          className="px-3 mx-2 bg-red-600 text-white"
          onClick={() => clearInterval(interval.current)}
        >
          Stop
        </button>{" "}
        <button className="border px-3 mx-2 " onClick={startProgress}>
          Resume
        </button>
        <button className="border px-3 mx-2 " onClick={resetProgress}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default ProgressBarIndex;
