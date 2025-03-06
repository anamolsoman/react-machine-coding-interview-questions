import "./progress-bar.css";

const ProgressBar = ({ value }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress"
        // style={{ transform: `translateX(-${100 - value}%)` }}
        style={{ width: `${value}%` }}
      >
        <span className="percent">{value}%</span>
      </div>
    </div>
  );
};

const ProgressBarPractice = () => {
  const listOfProgress = [0, 10, 40, 70, 100];
  return (
    <div className=" p-2">
      {listOfProgress.map((progress) => {
        return <ProgressBar value={progress} />;
      })}
    </div>
  );
};

export default ProgressBarPractice;
