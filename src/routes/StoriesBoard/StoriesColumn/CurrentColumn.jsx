import React from 'react';

import styles from './storiesColumn.css';
import currentIcon from './current-icon.png';

import StoryItem from './StoryItem';

const CurrentColumn = () => (
  <div className={styles.column}>
    <img
      src={currentIcon}
      className={styles.columnIcon}
      alt="test"
    />
    <div className={styles.columnHead}>On Progress</div>
    <div className={styles.columnList}>
      { [1, 2, 3, 4, 5, 6, 7, 8].map(item => <StoryItem key={item} />) }
    </div>
  </div>
);

export default CurrentColumn;
