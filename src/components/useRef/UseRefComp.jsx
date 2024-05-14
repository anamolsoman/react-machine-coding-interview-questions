import { useEffect, useState, useRef } from "react";

function UseRefComp() {
  const [inputText, setInputText] = useState();
  //   const [count, setCount] = useState();
  const count = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    // setCount(count + 1);
    count.current = count.current + 1;
  });

  const changeColor = () => {
    inputRef.current.style.backgroundColor = "#82E0AA";
  };

  return (
    <div>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        id="count"
        placeholder="Count"
        ref={inputRef}
      ></input>
      <p>Total count of component render is {count.current}</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default UseRefComp;
