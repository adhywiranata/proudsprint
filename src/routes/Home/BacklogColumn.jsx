import React from 'react';

import styles from './storiesColumn.css';

import todoIcon from './todo-icon.png';

const BacklogColumn = () => (
  <div className={styles.column}>
    <img
      src={todoIcon}
      className={styles.columnIcon}
      alt="test"
    />
    <div className={styles.columnHead}>Backlog</div>
  </div>
);

export default BacklogColumn;
