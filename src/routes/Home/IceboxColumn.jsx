import React from 'react';

import styles from './storiesColumn.css';

import iceboxIcon from './icebox-icon.png';

const IceboxColumn = () => (
  <div className={styles.column}>
    <img
      src={iceboxIcon}
      className={styles.columnIcon}
      alt="test"
    />
    <div className={styles.columnHead}>Icebox</div>
  </div>
);

export default IceboxColumn;
