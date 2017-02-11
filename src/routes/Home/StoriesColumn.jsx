import React from 'react';
import styles from './storiesColumn.css';

const StoriesColumn = () => (
  <div className={styles.column}>
    <img src="public/assets/images/snowflake-icon.png" className={styles.columnIcon} />
    <div className={styles.columnHead}>Icebox</div>
  </div>
);

export default StoriesColumn;
