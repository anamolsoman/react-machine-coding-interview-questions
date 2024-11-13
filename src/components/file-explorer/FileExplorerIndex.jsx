import React from "react";
import FileExplorer from "./FileExplorer";
import directoryInfo from "./data.json";

function FileExplorerIndex() {
  return (
    <div>
      <FileExplorer directoryInfo={directoryInfo} />
    </div>
  );
}

export default FileExplorerIndex;
