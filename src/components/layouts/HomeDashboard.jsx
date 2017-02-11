import React from 'react';

import styles from './homeDashboard.css';

import IceboxColumn from '../../routes/Home/IceboxColumn';
import BacklogColumn from '../../routes/Home/BacklogColumn';
import CurrentColumn from '../../routes/Home/CurrentColumn';
import DeliveredColumn from '../../routes/Home/DeliveredColumn';
import DoneColumn from '../../routes/Home/DoneColumn';

const HomeDashboard = () => (
  <div className={styles.wrapper}>
    <IceboxColumn />
    <BacklogColumn />
    <CurrentColumn />
    <DeliveredColumn />
    <DoneColumn />
  </div>
);

export default HomeDashboard;
