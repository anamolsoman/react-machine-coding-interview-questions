import React, { useEffect, useState } from "react";

function GridLights2() {
  const [grid, setGrid] = useState(
    Array.from({ length: 3 }, () => new Array(3).fill(false))
  );

  const handleCellClick = (rowIndex, colIndex) => {
    let deepCopyGrid = grid.map((row) => [...row]);

    deepCopyGrid[rowIndex][colIndex] = true;
    setGrid(deepCopyGrid);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-3">
        {grid.map((row, rowIndex) => {
          return row.map((col, colIndex) => {
            return (
              <div
                className={`w-[100px] h-[100px] border cursor-pointer ${
                  col ? "bg-blue-500 cursor-auto" : ""
                }`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                {grid[rowIndex][colIndex]}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export default GridLights2;
