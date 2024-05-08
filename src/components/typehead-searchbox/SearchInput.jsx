import { useEffect, useState } from "react";
import useFetchPromise from "./useFetchPromise";
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
  transformData,
}) {
  const [query, setQuery] = useState("");
  const [data, setError, error] = useFetchPromise(query, transformData);
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    console.log(data);
  }, [data]);

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
      {data && data.length > 0 && listBox(data)}
    </>
  );
}

export default SearchInput;
