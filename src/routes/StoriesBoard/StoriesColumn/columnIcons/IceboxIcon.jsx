import React from 'react';

import styles from './style.css';
import IceboxImage from '../images/icebox-icon.png';

const IceboxIcon = () => (
  <img
    src={IceboxImage}
    className={styles.columnIcon}
    alt="test"
  />
);

export default IceboxIcon;
