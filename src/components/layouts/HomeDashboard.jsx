import React from 'react';

import styles from './homeDashboard.css';

import IceboxColumn from '../../routes/Home/IceboxColumn';
import BacklogColumn from '../../routes/Home/BacklogColumn';
import DeliveredColumn from '../../routes/Home/DeliveredColumn';

const HomeDashboard = () => (
  <div className={styles.wrapper}>
    <IceboxColumn />
    <BacklogColumn />
    <DeliveredColumn />
  </div>
);

export default HomeDashboard;
