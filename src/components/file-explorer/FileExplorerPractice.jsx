import { useState } from "react";
import { FaFolder } from "react-icons/fa";
import { FaFile } from "react-icons/fa";

const dataFiles = [
  {
    name: "Src",
    type: "folder",
    children: [
      { name: "Index", type: "file" },
      { name: "Config", type: "file" },
      {
        name: "assets",
        type: "folder",
        children: [{ name: "logo.png", type: "file" }],
      },
    ],
  },
  { name: "Components", type: "folder", children: [] },
  { name: "Router", type: "folder", children: [] },
];

const FileExplorerPractice = ({ data = dataFiles }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-[200px]">
      {data.map((value) => {
        return (
          <div>
            <div
              className="flex justify-start items-center"
              onClick={() => setToggle(!toggle)}
            >
              {value.type === "file" ? (
                <FaFile />
              ) : (
                <FaFolder className="cursor-pointer" />
              )}
              {value.name}
            </div>

            {toggle && value.children && value.children.length > 0 && (
              <div className="ml-4">
                <FileExplorerPractice data={value.children} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const FileExplorer = () => {
  return <div></div>;
};

export default FileExplorerPractice;
