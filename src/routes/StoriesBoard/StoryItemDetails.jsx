import React from 'react';

import styles from './storyItemDetails.css';

const StoryItemDetails = () => (
  <div>
    <div className={styles.popupOverlay} />
    <div className={styles.popupWrapper}>
      <div className={styles.imageContainer}>
        <img
          className={styles.ProfilePicture}
          src="http://socialpro.miguelvasquez.net/public/avatar/large_johndoe_18gu2qv.jpg"
          alt="s"
        />
        <span className={styles.itemPersonName}>Joey</span>
      </div>
      <div className={styles.itemContainer}>
        <p className={styles.itemTitle}>
          Add to Cart should be available on all pages containing a product
          and several other functionalities.
        </p>
        <div className={styles.itemBadgeList}>
          <span className={styles.improvementBadge}>Improvement</span>
          <span className={styles.bugBadge}>Bug</span>
          <span className={styles.niceToHaveBadge}>Nice to Have</span>
        </div>
      </div>
    </div>
  </div>
);

export default StoryItemDetails;
