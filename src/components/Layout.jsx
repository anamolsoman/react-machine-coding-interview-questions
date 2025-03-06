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
    { route: "file-explorer", name: "File Explorer" },
    { route: "otp", name: "Otp" },
    { route: "grid-lights", name: "Grid Lights" },
    { route: "toast", name: "Toast" },
    { route: "infinite-scroll", name: "InfiniteScroll" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
        {links.map((link) => (
          <Link
            key={link.route}
            to={link.route}
            className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-semibold rounded-lg shadow-lg p-6 flex justify-center items-center transform transition-all duration-300 ease-in-out hover:scale-105"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Layout;
