import React, { useContext } from "react";
import styles from "./styles.css";
import format from "date-fns/format";

import { SearchHistoryContext } from "../../contexts/searchHistory";

const Item = React.memo(props => {
  const { removeById } = useContext(SearchHistoryContext);

  return (
    <li role="listitem" className={styles.item}>
      <span className={styles.itemTitle}>{props.title}</span>
      <span className={styles.itemDate}>
        {format(props.date, "YYYY-MM-DD HH:mm")}
      </span>
      <button className={styles.itemClear} onClick={() => removeById(props.id)}>
        ✕
      </button>
    </li>
  );
});

const History = () => {
  const { data, removeAll } = useContext(SearchHistoryContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>Search history</div>
        <button onClick={removeAll} className={styles.clearButton}>
          Clear history
        </button>
      </div>

      <ul role="list" className={styles.itemsWrapper}>
        {data.map(d => (
          <Item key={d.id} {...d} />
        ))}
      </ul>
    </div>
  );
};

export default History;
