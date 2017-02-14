import React from 'react';

import styles from './style.css';
import BacklogImage from '../images/backlog-icon.png';

const BacklogIcon = () => (
  <img
    src={BacklogImage}
    className={styles.columnIcon}
    alt="test"
  />
);

export default BacklogIcon;
