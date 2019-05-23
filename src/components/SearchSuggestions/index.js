import React from "react";
import styles from "./styles.css";

const SearchSuggestions = React.forwardRef((props, ref) => {
  if (!props.children.length) {
    return null;
  }

  return <div ref={ref} className={styles.wrapper} {...props} />;
});

export default SearchSuggestions;
