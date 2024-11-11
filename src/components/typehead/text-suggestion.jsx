import React from "react";

function TextSuggestion({ suggestions, highlight, selectedSuggestion }) {
  const getHighlightText = (highlight, text) => {
    if (highlight !== "") {
      let parts = text.split(new RegExp(`(${highlight})`, "gi"));
      return (
        <span>
          {parts.map((part, index) => {
            return part.toLowerCase() === highlight.toLowerCase() ? (
              <b key={index}> {part}</b>
            ) : (
              part
            );
          })}
        </span>
      );
    }
    return text;
  };

  return (
    <>
      {suggestions.map((item) => {
        return (
          <li
            className="p-2 flex justify-start border-b-2 cursor-pointer"
            onClick={() => selectedSuggestion(item.name)}
          >
            {getHighlightText(highlight, item.name)}
          </li>
        );
      })}
    </>
  );
}

export default TextSuggestion;
