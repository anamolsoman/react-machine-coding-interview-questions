import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TicTacToe from "./components/tictactoe/TicTacToe";
import Accordian from "./components/accordian/Accordian";
import Debounce from "./components/debounce/Debounce";
// import Throttling from "./components/throttling/Throttling";
import StarRating from "./components/star-rating/StarRating";
// import SearchBox from "./components/typehead-searchbox/SearchBox";
// import ParentComp from "./components/use-callback/ParentComp";
// import ParentComp from "./components/useContext/ContextParentComp";
// import UseReducerCounter from "./components/useReducer/UseReducerCounter";
// import UseRefComp from "./components/useRef/UseRefComp";
import Typehead from "./components/typehead/typehead";
import ProgressBarIndex from "./components/progress-bar/ProgressBarIndex";
import Carousel from "./components/carousel/Carousel";
import TodoList from "./components/todo-list/TodoList";
import FileExplorer from "./components/file-explorer/FileExplorer";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/star-rating" element={<StarRating />} />
          <Route path="/accordian" element={<Accordian />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/typehead" element={<Typehead />} />
          <Route path="/progress-bar" element={<ProgressBarIndex />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/file-explorer" element={<FileExplorer />} />
          {/* <SearchBox /> */}
          {/* <ParentComp /> */}
          {/* <UseReducerCounter /> */}
          {/* <UseRefComp /> */}
          {/* <Debounce /> */}
          {/* <Typehead /> */}
          {/* <ProgressBarIndex /> */}
          {/* <Throttling /> */}
          {/* <Accordian /> */}
          {/* <TicTacToe /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
