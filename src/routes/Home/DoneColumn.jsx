import React from 'react';

import styles from './storiesColumn.css';
import doneIcon from './done-icon.png';

import StoryItem from './StoryItem';

const DoneColumn = () => (
  <div className={styles.column}>
    <img
      src={doneIcon}
      className={styles.columnIcon}
      alt="test"
    />
  <div className={styles.columnHead}>Done</div>
    <div className={styles.columnList}>
      { [1, 2, 3, 4, 5, 6, 7, 8].map(item => <StoryItem key={item} />) }
    </div>
  </div>
);

export default DoneColumn;
