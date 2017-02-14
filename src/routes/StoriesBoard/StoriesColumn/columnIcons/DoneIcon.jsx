import React from 'react';

import styles from './style.css';
import DoneImage from '../images/done-icon.png';

const DoneIcon = () => (
  <img
    src={DoneImage}
    className={styles.columnIcon}
    alt="test"
  />
);

export default DoneIcon;
