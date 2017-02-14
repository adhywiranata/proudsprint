import React from 'react';

import styles from './storiesColumn.css';
import DeliveredIcon from './columnIcons/DeliveredIcon';

import StoryItem from './StoryItem';

const DeliveredColumn = props => (
  <div className={styles.column}>
    <DeliveredIcon />
    <div className={styles.columnHead}>Delivered</div>
    <div className={styles.columnList}>
      { props.deliveredStories.map(item => <StoryItem key={item.id} {...item} />) }
    </div>
  </div>
);

DeliveredColumn.propTypes = {
  deliveredStories: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      category: React.PropTypes.string.isRequired,
      user: React.PropTypes.string,
      story: React.PropTypes.string,
      tags: React.PropTypes.arrayOf(React.PropTypes.string),
      createdAt: React.PropTypes.string,
    }),
  ).isRequired,
};

export default DeliveredColumn;
