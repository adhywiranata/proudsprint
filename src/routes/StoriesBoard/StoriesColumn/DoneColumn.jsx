import React from 'react';

import styles from './storiesColumn.css';
import doneIcon from './images/done-icon.png';

import StoryItem from './StoryItem';

const DoneColumn = props => (
  <div className={styles.column}>
    <img
      src={doneIcon}
      className={styles.columnIcon}
      alt="test"
    />
    <div className={styles.columnHead}>Done</div>
    <div className={styles.columnList}>
      { props.doneStories.map(item => <StoryItem key={item} />) }
    </div>
  </div>
);

DoneColumn.propTypes = {
  doneStories: React.PropTypes.arrayOf(
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

export default DoneColumn;
