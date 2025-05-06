import React, { useRef, useState } from "react";
import ProgressBar from "./ProgressBar";

function ProgressBarIndex() {
  const [progress, setProgress] = useState(0);
  const [progressSpeed, setProgressSpeed] = useState(50);

  let interval = useRef(null);

  const handleProgress = () => {
    setProgress((prev) => prev + 1);
  };

  const startProgress = () => {
    interval.current = setInterval(handleProgress, progressSpeed);
  };

  const resetProgress = () => {
    setProgress(0);
    clearInterval(interval);
  };

  //   useEffect(() => {
  //     interval.current = setInterval(handleProgress, progressSpeed);

  //     return () => {
  //       clearInterval(interval.current);
  //     };
  //   }, []);

  return (
    <div className="p-4 flex justify-center items-center flex-col min-h-screen bg-gray-100">
      <div className="text-2xl">Progress Bar {progress}%</div>
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
        <button className="border px-3 mx-2 bg-white" onClick={startProgress}>
          Resume
        </button>
        <button className="border px-3 mx-2 bg-white" onClick={resetProgress}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default ProgressBarIndex;
