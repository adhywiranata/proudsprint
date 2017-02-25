import React from 'react';

import styles from './loadingDataBanner.css';
import rollingGif from './rolling.gif';

const LoadingDataBanner = () => (
  <div className={styles.banner}>
    <img src={rollingGif} alt="" className={styles.loading} />
    Loading data for complete awesomeness...
  </div>
);

export default LoadingDataBanner;
