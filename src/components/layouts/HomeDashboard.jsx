import React from 'react';

import styles from './homeDashboard.css';

import StoriesColumn from '../../routes/Home/StoriesColumn';

const HomeDashboard = () => (
  <div className={styles.wrapper}>
    <StoriesColumn />
    <StoriesColumn />
    <StoriesColumn />
  </div>
);

export default HomeDashboard;
