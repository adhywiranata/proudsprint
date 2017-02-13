import React from 'react';

import styles from './storiesColumn.css';
import rocketIcon from './images/rocket-icon.png';

import StoryItem from './StoryItem';

const DeliveredColumn = props => (
  <div className={styles.column}>
    <img
      src={rocketIcon}
      className={styles.columnIcon}
      alt="test"
    />
    <div className={styles.columnHead}>Delivered</div>
    <div className={styles.columnList}>
      { props.deliveredStories.map(item => <StoryItem key={item} {...item} />) }
    </div>
  </div>
);

DeliveredColumn.propTypes = {
  deliveredStories: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      _id: React.PropTypes.number.isRequired,
      category: React.PropTypes.string.isRequired,
      user: React.PropTypes.string,
      story: React.PropTypes.string,
      tags: React.PropTypes.arrayOf(React.PropTypes.string),
      createdAt: React.PropTypes.string,
    }),
  ).isRequired,
};

export default DeliveredColumn;
