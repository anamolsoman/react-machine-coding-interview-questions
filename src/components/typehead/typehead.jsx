import React, { useState } from "react";
import AutoComplete from "./AutoComplete";

function Typehead() {
  const [query, setQuery] = useState("");

  const staticData = ["apple", "mango", "orange"];

  const fetchSuggestions = async (query) => {
    try {
      const response = await fetch(
        "https://dummyjson.com/recipes/search?q=" + query
      );
      let resp = await response.json();
      return resp.recipes;
    } catch {
      throw new Error("Failed to fetch the recipes");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="absolute ">
        <AutoComplete
          placeholder="Enter Recipe"
          fetchSuggestions={fetchSuggestions}
          // staticData={staticData}
          onClick={() => {}}
          onBlur={() => {}}
          onFocus={() => {}}
        />
      </div>
    </div>
  );
}

export default Typehead;
