import ChildComp from "./ChildComp";
import { useState, useEffect, useCallback } from "react";
function ParentComp() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  const incrementCounterByTwo = useCallback(() => {
    return counter + 2;
  }, [counter]);

  //   const incrementCounter = useCallback(() => {
  //     setCounter((prevCount) => prevCount + 1);
  //   }, []);

  return (
    <div>
      <input
        type="number"
        value={counter}
        onChange={(e) => {
          setCounter(e.target.value);
        }}
        placeholder="Enter a score"
      />
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter Playername"
      />
      Parent Comp Counter - {counter}
      <ChildComp increment={incrementCounterByTwo} />
    </div>
  );
}

export default ParentComp;
