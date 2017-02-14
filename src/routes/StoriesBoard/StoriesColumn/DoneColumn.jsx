import React from 'react';

import styles from './storiesColumn.css';
import DoneIcon from './columnIcons/DoneIcon';

import StoryItem from './StoryItem';

const DoneColumn = props => (
  <div className={styles.column}>
    <DoneIcon />
    <div className={styles.columnHead}>Done</div>
    <div className={styles.columnList}>
      { props.doneStories.map(item => <StoryItem key={item.id} {...item} />) }
    </div>
  </div>
);

DoneColumn.propTypes = {
  doneStories: React.PropTypes.arrayOf(
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

export default DoneColumn;
