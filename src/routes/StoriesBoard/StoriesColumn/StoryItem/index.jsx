import React from 'react';

import styles from './index.css';

const StoryItem = props => (
  <button className={styles.columnItem} onClick={props.showStoryDetail}>
    <div className={styles.imageContainer}>
      <img
        className={styles.ProfilePicture}
        src={props.profilePictureUrl}
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
  </button>
);

StoryItem.propTypes = {
  story: React.PropTypes.string.isRequired,
  user: React.PropTypes.string.isRequired,
  profilePictureUrl: React.PropTypes.string.isRequired,
  showStoryDetail: React.PropTypes.func.isRequired,
};

export default StoryItem;
