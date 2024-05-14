import { useContext } from "react";
import { AppContext } from "./UseContext";

function ContextChildComp() {
  const userData = useContext(AppContext);

  return <div>Child Comp Name - {userData.name} </div>;
}

export default ContextChildComp;
