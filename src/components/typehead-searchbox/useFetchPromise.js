import { useEffect, useState } from "react";
const useFetchPromise = (query, transformData) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const fetchData = async (query, transformData) => {
    try {
      const resp = await fetch(`https://swapi.dev/api/people/?search=${query}`);
      if (!resp.ok) throw new Error(resp.statusText);
      const data = await resp.json();
      setData(transformData(data));
    } catch (e) {
      console.log(e);
      setError(e);
    }
  };

  useEffect(() => {
    if (query) {
      fetchData(query, transformData);
    } else {
      setData(null);
      setError(null);
    }
  }, [query]);

  return [data, setError, error];
};

export default useFetchPromise;
