import "./App.css";
import StarRating from "./components/star-rating/StarRating";
import SearchBox from "./components/typehead-searchbox/SearchBox";
import ParentComp from "./components/use-callback/ParentComp";
function App() {
  return (
    <div className="App">
      {/* <StarRating />
      <SearchBox /> */}
      <ParentComp />
    </div>
  );
}

export default App;
