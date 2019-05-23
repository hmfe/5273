import React from "react";
import reactStringReplace from "react-string-replace";
import styles from "./styles.css";

const SearchSuggestion = React.forwardRef((props, ref) => {
  const { title, query, isHighlighted, ...restProps } = props;

  const parts = reactStringReplace(title, query, (match, i) => (
    <b key={i}>{match}</b>
  ));

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${isHighlighted ? styles.highlighted : ""}`}
      {...restProps}
    >
      {parts}
    </div>
  );
});

export default React.memo(SearchSuggestion);
