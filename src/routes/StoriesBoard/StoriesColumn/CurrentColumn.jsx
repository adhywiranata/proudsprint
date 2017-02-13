import React from 'react';

import styles from './storiesColumn.css';
import currentIcon from './images/current-icon.png';

import StoryItem from './StoryItem';

const CurrentColumn = props => (
  <div className={styles.column}>
    <img
      src={currentIcon}
      className={styles.columnIcon}
      alt="test"
    />
    <div className={styles.columnHead}>On Progress</div>
    <div className={styles.columnList}>
      { props.currentStories.map(item => <StoryItem key={item} />) }
    </div>
  </div>
);

CurrentColumn.propTypes = {
  currentStories: React.PropTypes.arrayOf(
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

export default CurrentColumn;
