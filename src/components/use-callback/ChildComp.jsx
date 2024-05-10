function ChildComp({ increment }) {
  console.log("child component rendered");

  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default ChildComp;
