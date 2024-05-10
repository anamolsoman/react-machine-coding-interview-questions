import ChildComp from "./ChildComp";
import { useState, useEffect, useCallback } from "react";
function ParentComp() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  //   const incrementCounter = () => {
  //     setCounter(counter + 1);
  //   };

  useEffect(() => {
    console.log("Parent Component rendered");
  }, []);

  return (
    <div>
      Parent Comp Counter - {counter}
      <ChildComp increment={incrementCounter} />
    </div>
  );
}

export default ParentComp;
