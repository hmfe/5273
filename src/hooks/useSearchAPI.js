import { useState, useRef } from "react";
import useDebounce from "react-use/esm/useDebounce";
import nanoid from "nanoid";

const transformResponseJSON = response => {
  return response.docs.slice(0, 15).map(d => ({
    id: d.key,
    title: d.title
  }));
};

const makeRequest = async query => {
  const response = await fetch(
    `http://openlibrary.org/search.json?q=${window.encodeURI(query)}`
  );

  if (!response.ok) {
    return [];
  }

  const json = await response.json();

  return transformResponseJSON(json);
};

const useSearchAPI = query => {
  const [data, setData] = useState([]);
  const requestIdRef = useRef(null);

  const fetchNewData = async (requestedQuery, requestId) => {
    if (!query) {
      setData([]);
      return;
    }

    const newData = await makeRequest(requestedQuery);
    if (requestId === requestIdRef.current) {
      setData(newData);
    }
  };

  useDebounce(
    () => {
      const requestId = nanoid();
      requestIdRef.current = requestId;
      fetchNewData(query, requestId);
    },
    300,
    [query]
  );

  return data;
};

export default useSearchAPI;
