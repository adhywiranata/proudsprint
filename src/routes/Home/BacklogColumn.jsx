import React from 'react';

import styles from './storiesColumn.css';
import todoIcon from './todo-icon.png';

import StoryItem from './StoryItem';

const BacklogColumn = () => (
  <div className={styles.column}>
    <img
      src={todoIcon}
      className={styles.columnIcon}
      alt="test"
    />
    <div className={styles.columnHead}>Backlog</div>
    <div className={styles.columnList}>
      { [1, 2, 3, 4, 5, 6, 7, 8].map(item => <StoryItem key={item} />) }
    </div>
  </div>
);

export default BacklogColumn;
