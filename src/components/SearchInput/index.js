import React from "react";
import styles from "./styles.css";

const SearchInput = React.forwardRef((props, ref) => {
  const { onCloseClick, ...restProps } = props;

  return (
    <div className={styles.wrapper}>
      <input className={styles.input} ref={ref} {...restProps} />
      <button type="button" className={styles.closeBtn} onClick={onCloseClick}>
        ✕
      </button>
    </div>
  );
});

export default SearchInput;
