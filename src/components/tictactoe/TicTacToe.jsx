import React from "react";
import useTicTacToe from "../../hooks/useTicTacToe";

function TicTacToe() {
  const { board, handleClick, getStatus, reset } = useTicTacToe();
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <div className="flex justify-between w-[500px]">
        <div className="flex items-center">{getStatus()}</div>
        <button
          type="button"
          onClick={() => reset()}
          class=" text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Reset
        </button>
      </div>
      <div className="">
        <div className="grid grid-cols-3 w-[500px] ">
          {board.map((val, index) => {
            return (
              <div
                onClick={() => handleClick(index)}
                className="cursor-pointer hover:bg-gray-200 min-h-[100px] border border-black flex items-center justify-center"
              >
                {val}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
