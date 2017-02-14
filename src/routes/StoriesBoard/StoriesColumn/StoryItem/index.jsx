import React from 'react';

import styles from './index.css';

const StoryItem = props => (
  <div className={styles.columnItem}>
    <div className={styles.imageContainer}>
      <img
        className={styles.ProfilePicture}
        src="http://socialpro.miguelvasquez.net/public/avatar/large_johndoe_18gu2qv.jpg"
        alt="s"
      />
      <span className={styles.itemPersonName}>{ props.user }</span>
    </div>
    <div className={styles.itemContainer}>
      <p className={styles.itemTitle}>
        { props.story }
      </p>
      <div className={styles.itemBadgeList}>
        <span className={styles.improvementBadge}>Improvement</span>
        <span className={styles.bugBadge}>Bug</span>
        <span className={styles.niceToHaveBadge}>Nice to Have</span>
      </div>
    </div>
  </div>
);

StoryItem.propTypes = {
  story: React.PropTypes.string.isRequired,
  user: React.PropTypes.string.isRequired,
};

export default StoryItem;
