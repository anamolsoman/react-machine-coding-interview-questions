import { FaFolder } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const FileExplorer = ({ directoryInfo }) => {
  const [toggleFile, setToggleFile] = useState(false);
  return (
    <div
      className={`p-2 bg-gray-100 ${
        directoryInfo?.children?.length > 0 ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <div
        className="flex w-auto items-center mr-2"
        onClick={() => setToggleFile(!toggleFile)}
      >
        {directoryInfo?.type === "folder" ? <FaFolder /> : <FaFile />}{" "}
        <span className="ml-2"> {directoryInfo?.name}</span>
      </div>

      {toggleFile &&
        directoryInfo?.children?.map((children, index) => {
          return <FileExplorer directoryInfo={children} key={index} />;
        })}
    </div>
  );
};

export default FileExplorer;
