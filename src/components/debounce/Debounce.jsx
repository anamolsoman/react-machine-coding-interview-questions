import React, { useEffect, useState } from "react";

export default function Debounce() {
  // function to fetch the result using API
  function fetchQueryResults(query) {
    console.log("API call for query - ", query);
  }

  function debounceFunc(func, delay) {
    let timer;
    return (...args) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => func(...args), delay);
    };
  }

  // function handleChange(e) {
  //   const query = e.target.value;

  //   // fetchQueryResults(query);
  // }

  const debounceVersion = debounceFunc(fetchQueryResults, 300);
  // const [query, setQuery] = useState("");
  // const [delay, setDelay] = useState(300);

  // const fetchSearchResults = (query) => {
  //   console.log("API called with query - ", query);
  // };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     fetchSearchResults(query);
  //   }, delay);

  //   return () => {
  //     // clear the timeout event
  //     clearTimeout(timer);
  //   };
  // }, [query, delay]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/* <input
        type="input"
        placeholder="Search"
        className="border m-2 p-1 w-[300px]"
        onChange={(e) => setQuery(e.target.value)}
      ></input> */}
      <input
        placeholder="Search Products"
        className="border m-2 p-1 w-[300px]"
        onChange={(e) => debounceVersion(e.target.value)}
      ></input>

      <span>Check console.log for O/P</span>
    </div>
  );
}
