function ChildComp({ increment }) {
  console.log("child component rendered");

  return <div>{increment}</div>;
}

export default ChildComp;
