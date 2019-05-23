import React from "react";
import styles from "./styles.css";

import Autocomplete from "../Autocomplete";
import SearchHistory from "../SearchHistory";

import { SearchHistoryProvider } from "../../contexts/searchHistory";

const App = () => {
  return (
    <SearchHistoryProvider>
      <div className={styles.container}>
        <Autocomplete />
        <SearchHistory />
      </div>
    </SearchHistoryProvider>
  );
};

export default App;
