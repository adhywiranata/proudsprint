import React from 'react';

import styles from './style.css';
import DeliveredImage from '../images/delivered-icon.png';

const DeliveredIcon = () => (
  <img
    src={DeliveredImage}
    className={styles.columnIcon}
    alt="test"
  />
);

export default DeliveredIcon;
