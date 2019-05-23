import React, { useState } from "react";

export const SearchHistoryContext = React.createContext({
  data: [],
  append: () => {},
  removeById: () => {},
  removeAll: () => {}
});

export const SearchHistoryProvider = props => {
  const [data, setData] = useState([]);

  const append = value => {
    setData([value, ...data]);
  };

  const removeById = id => {
    setData(data.filter(d => d.id !== id));
  };

  const removeAll = () => {
    setData([]);
  };

  return (
    <SearchHistoryContext.Provider
      value={{ data, append, removeAll, removeById }}
    >
      {props.children}
    </SearchHistoryContext.Provider>
  );
};
