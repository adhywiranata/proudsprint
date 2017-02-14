import React from 'react';

import styles from './storiesColumn.css';
import CurrentIcon from './columnIcons/CurrentIcon';

import StoryItem from './StoryItem';

const CurrentColumn = props => (
  <div className={styles.column}>
    <CurrentIcon />
    <div className={styles.columnHead}>On Progress</div>
    <div className={styles.columnList}>
      { props.currentStories.map(item => <StoryItem key={item.id} {...item} />) }
    </div>
  </div>
);

CurrentColumn.propTypes = {
  currentStories: React.PropTypes.arrayOf(
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

export default CurrentColumn;
