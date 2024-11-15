import React, { useCallback, useEffect, useRef, useState } from "react";

function GridLights() {
  const [selectedGrids, setSelectedGrids] = useState([]);
  const [endBlockSelected, setEndBlockSelected] = useState(false);
  let interval = useRef(null);
  console.log(interval);
  const grids = [
    {
      id: 1,
      visible: true,
    },
    {
      id: 2,
      visible: true,
    },
    {
      id: 3,
      visible: true,
    },
    {
      id: 4,
      visible: true,
    },
    {
      id: 5,
      visible: true,
    },
    {
      id: 6,
      visible: true,
    },
    {
      id: 7,
      visible: true,
    },
    {
      id: 8,
      visible: true,
    },
    {
      id: 9,
      visible: true,
    },
  ];

  const getVisisbleGrids = useCallback(() => {
    return grids.filter((grid) => grid.visible === true);
  }, [grids]);

  const removeSelectedGrids = () => {
    let copySelected = [...selectedGrids];
    copySelected.shift();
    console.log(copySelected, "endBlockSelected");
    setSelectedGrids(copySelected);
  };

  useEffect(() => {
    if (endBlockSelected && selectedGrids.length > 0) {
      interval.current = setInterval(removeSelectedGrids, 1000);
    }
    if (selectedGrids.length === 0) setEndBlockSelected(false);

    return () => {
      clearInterval(interval.current);
    };
  }, [selectedGrids, endBlockSelected]);

  useEffect(() => {
    if (getVisisbleGrids().length === selectedGrids.length) {
      setEndBlockSelected(true);
    }

    if (selectedGrids.length <= 0) {
      clearInterval(interval.current);
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [selectedGrids]);

  const handleGridClick = (id) => {
    if (!selectedGrids.includes(id)) {
      setSelectedGrids([...selectedGrids, id]);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="grid grid-cols-3">
        {grids.map((grid) => {
          return (
            <div className="box">
              {grid.visible ? (
                <div
                  className={`border border-black w-[100px] h-[100px] ${
                    !selectedGrids.includes(grid.id)
                      ? "cursor-pointer "
                      : "cursor-default bg-cyan-600"
                  }`}
                  onClick={() => handleGridClick(grid.id)}
                ></div>
              ) : (
                <div></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GridLights;
