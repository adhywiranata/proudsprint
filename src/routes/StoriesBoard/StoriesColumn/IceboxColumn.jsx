import React from 'react';

import styles from './storiesColumn.css';
import IceboxIcon from './columnIcons/IceboxIcon';

import StoryItem from './StoryItem';

const IceboxColumn = props => (
  <div className={styles.column}>
    <IceboxIcon />
    <div className={styles.columnHead}>Icebox</div>
    <div className={styles.columnList}>
      { props.iceboxStories.map(item => <StoryItem key={item.id} {...item} />) }
    </div>
  </div>
);

IceboxColumn.propTypes = {
  iceboxStories: React.PropTypes.arrayOf(
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

export default IceboxColumn;
