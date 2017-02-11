import React from 'react';

import styles from './storiesColumn.css';

import iceboxIcon from './icebox-icon.png';
import todoIcon from './todo-icon.png';
import rocketIcon from './rocket-icon.png';

const StoriesColumn = () => (
  <div className={styles.column}>
    <img
      src={iceboxIcon}
      className={styles.columnIcon}
      alt="test"
    />
    <div className={styles.columnHead}>Icebox</div>
  </div>
);

export default StoriesColumn;
