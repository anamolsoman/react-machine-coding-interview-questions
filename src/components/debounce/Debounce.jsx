import React, { useEffect, useState } from "react";

export default function Debounce() {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 500);
    return () => {
      clearInterval(timeout);
    };
  }, [query]);

  useEffect(() => {
    console.log("API call ", debounceQuery);
  }, [debounceQuery]);

  return (
    <div>
      <input
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
}
