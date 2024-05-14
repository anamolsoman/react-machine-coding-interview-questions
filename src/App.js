import "./App.css";
// import StarRating from "./components/star-rating/StarRating";
// import SearchBox from "./components/typehead-searchbox/SearchBox";
// import ParentComp from "./components/use-callback/ParentComp";
// import ParentComp from "./components/useContext/ContextParentComp";
// import UseReducerCounter from "./components/useReducer/UseReducerCounter";
import UseRefComp from "./components/useRef/UseRefComp";
function App() {
  return (
    <div className="App">
      {/* <StarRating /> */}
      {/* <SearchBox /> */}
      {/* <ParentComp /> */}
      {/* <UseReducerCounter /> */}
      <UseRefComp />
    </div>
  );
}

export default App;
