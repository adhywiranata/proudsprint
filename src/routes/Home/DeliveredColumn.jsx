import React from 'react';

import styles from './storiesColumn.css';

import rocketIcon from './rocket-icon.png';

const DeliveredColumn = () => (
  <div className={styles.column}>
    <img
      src={rocketIcon}
      className={styles.columnIcon}
      alt="test"
    />
    <div className={styles.columnHead}>Delivered</div>
  </div>
);

export default DeliveredColumn;
