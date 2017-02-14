import React from 'react';

import styles from './style.css';
import CurrentImage from '../images/current-icon.png';

const CurrentIcon = () => (
  <img
    src={CurrentImage}
    className={styles.columnIcon}
    alt="test"
  />
);

export default CurrentIcon;
