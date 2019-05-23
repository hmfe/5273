import React, { useState, useContext } from "react";
import Autocomplete from "react-autocomplete";
import nanoid from "nanoid";

import styles from "./styles.css";

import useSearchAPI from "../../hooks/useSearchAPI";

import { SearchHistoryContext } from "../../contexts/searchHistory";

import SearchInput from "../SearchInput";
import SearchSuggestions from "../SearchSuggestions";
import SearchSuggestion from "../SearchSuggestion";

const AutocompleteInput = () => {
  const { append } = useContext(SearchHistoryContext);
  const [inputValue, setInputValue] = useState("");
  const data = useSearchAPI(inputValue);

  const appendSearchQuery = title => {
    append({
      id: nanoid(),
      title,
      date: new Date()
    });

    setInputValue("");
  };

  const onSelect = value => {
    appendSearchQuery(value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (!inputValue) {
      return;
    }

    appendSearchQuery(inputValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <Autocomplete
        wrapperProps={{
          className: styles.wrapper
        }}
        getItemValue={item => item.title}
        items={data}
        renderInput={props => (
          <SearchInput {...props} onCloseClick={() => setInputValue("")} />
        )}
        renderItem={(item, isHighlighted) => (
          <SearchSuggestion
            isHighlighted={isHighlighted}
            key={item.id}
            title={item.title}
            query={inputValue}
          />
        )}
        renderMenu={(items, value, style) => (
          <SearchSuggestions style={{ ...style }} children={items} />
        )}
        value={inputValue}
        onChange={(e, value) => {
          setInputValue(value);
        }}
        onSelect={onSelect}
      />
    </form>
  );
};

export default AutocompleteInput;
