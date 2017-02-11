import React from 'react';
import styles from './storiesColumn.css';

const StoriesColumn = () => (
  <div className={styles.column}>
    <img
      src={require('./snowflake-icon.png')}
      className={styles.columnIcon}
      alt="test"
    />
    <div className={styles.columnHead}>Icebox</div>
  </div>
);

export default StoriesColumn;
