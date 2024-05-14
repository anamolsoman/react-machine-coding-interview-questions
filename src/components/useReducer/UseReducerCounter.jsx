import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
  }
}

function UseReducerCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: "inc" });
  const decrement = () => dispatch({ type: "dec" });
  const reset = () => dispatch({ type: "reset" });

  return (
    <div>
      {count.count}
      <br></br>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default UseReducerCounter;
