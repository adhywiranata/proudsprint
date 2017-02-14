import React from 'react';

import styles from './storiesColumn.css';
import BacklogIcon from './columnIcons/BacklogIcon';

import StoryItem from './StoryItem';

const BacklogColumn = props => (
  <div className={styles.column}>
    <BacklogIcon />
    <div className={styles.columnHead}>Backlog</div>
    <div className={styles.columnList}>
      { props.backlogStories.map(item => <StoryItem key={item.id} {...item} />) }
    </div>
  </div>
);

BacklogColumn.propTypes = {
  backlogStories: React.PropTypes.arrayOf(
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

export default BacklogColumn;
