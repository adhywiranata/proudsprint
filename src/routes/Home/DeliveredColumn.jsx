import React from 'react';

import styles from './storiesColumn.css';
import rocketIcon from './rocket-icon.png';

import StoryItem from './StoryItem';

const DeliveredColumn = () => (
  <div className={styles.column}>
    <img
      src={rocketIcon}
      className={styles.columnIcon}
      alt="test"
    />
    <div className={styles.columnHead}>Delivered</div>
    <div className={styles.columnList}>
      { [1, 2, 3, 4, 5, 6, 7, 8].map(item => <StoryItem key={item} />) }
    </div>
  </div>
);

export default DeliveredColumn;
