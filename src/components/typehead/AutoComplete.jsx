import React, { useEffect, useState, useCallback } from "react";
import TextSuggestion from "./text-suggestion";

function AutoComplete({ placeholder, fetchSuggestions, staticData }) {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState("");
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const selectedSuggestion = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const getSuggestions = async (query) => {
    setLoading(true);

    let result;
    try {
      if (staticData) {
        result = staticData.filter((value) => {
          return value
            .toLocaleLowerCase()
            .includes(inputValue.toLocaleLowerCase());
        });
      } else if (fetchSuggestions) {

        result = await fetchSuggestions(query);
      }
      setSuggestions(result);
    } catch (e) {
      setError("Failed to fetch suggestions");
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };
  let debounceCalled = useCallback(debounce(getSuggestions, 300), []);

  useEffect(() => {
    if (inputValue.length > 0) {
      debounceCalled(inputValue);
    }
  }, [inputValue]);

  return (
    <div className="">
      <input
        value={inputValue}
        type="input"
        className="border  min-w-[400px] p-1"
        placeholder={placeholder}
        onChange={handleOnChange}
      />
      {suggestions && suggestions.length && (
        <div className="relative border rounded-sm mt-2 max-h-[150px] overflow-auto">
          <ul>
            <TextSuggestion
              suggestions={suggestions}
              highlight={inputValue}
              selectedSuggestion={selectedSuggestion}
            />
          </ul>
        </div>
      )}
      {loading && <div className=" p-2 ">Loading...</div>}
    </div>
  );
}

export default AutoComplete;
