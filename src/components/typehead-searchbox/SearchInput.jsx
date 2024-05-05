import { useState } from "react";

function SearchInput({
  id,
  name,
  label,
  placeholder,
  autoComplete,
  maxItems,
  styles,
  debounceWait,
  listBox,
  noItemMessage,
  errorMessage,
}) {
  const [query, setQuery] = useState("");
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <label name={name} className={styles.label} for={name}>
        {label}
      </label>
      <br />
      <input
        id={id}
        className={styles.input}
        value={query}
        onChange={handleChange}
      ></input>
    </>
  );
}

export default SearchInput;
