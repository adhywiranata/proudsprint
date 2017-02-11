import React from 'react';

import styles from './storiesColumn.css';
import iceboxIcon from './icebox-icon.png';

import StoryItem from './StoryItem';

const IceboxColumn = () => (
  <div className={styles.column}>
    <img
      src={iceboxIcon}
      className={styles.columnIcon}
      alt="test"
    />
    <div className={styles.columnHead}>Icebox</div>
    <div className={styles.columnList}>
      { [1, 2, 3, 4, 5, 6, 7, 8].map(item => <StoryItem key={item} />) }
    </div>
  </div>
);

export default IceboxColumn;
