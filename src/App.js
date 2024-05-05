import "./App.css";
import StarRating from "./components/star-rating/StarRating";
import SearchBox from "./components/typehead-searchbox/SearchBox";
function App() {
  return (
    <div className="App">
      <StarRating />
      <SearchBox />
    </div>
  );
}

export default App;
