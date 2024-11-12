import React from "react";
import { Link } from "react-router-dom";

function Layout() {
  const links = [
    { route: "star-rating", name: "Star Rating" },
    { route: "progress-bar", name: "Progress Bar" },
    { route: "typehead", name: "Typehead using debounce" },
    { route: "tic-tac-toe", name: "Tic Tac Toe Game" },
    { route: "accordian", name: "Accordian" },
    { route: "carousel", name: "Carousel" },
    { route: "todo-list", name: "Todo List" },
  ];
  return (
    <div className="h-screen grid grid-cols-3">
      {links.map((link) => {
        return (
          <Link
            to={link.route}
            className="min-h-[200px] hover:bg-blue-700 text-3xl  border flex justify-center items-center"
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}

export default Layout;
