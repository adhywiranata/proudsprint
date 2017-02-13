import React from 'react';

import styles from './storiesColumn.css';
import iceboxIcon from './images/icebox-icon.png';

import StoryItem from './StoryItem';

const IceboxColumn = props => (
  <div className={styles.column}>
    <img
      src={iceboxIcon}
      className={styles.columnIcon}
      alt="test"
    />
    <div className={styles.columnHead}>Icebox</div>
    <div className={styles.columnList}>
      { props.iceboxStories.map(item => <StoryItem key={item} {...item} />) }
    </div>
  </div>
);

IceboxColumn.propTypes = {
  iceboxStories: React.PropTypes.arrayOf(
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

export default IceboxColumn;
