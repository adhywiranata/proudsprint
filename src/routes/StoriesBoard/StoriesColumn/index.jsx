import React from 'react';

import styles from './storiesColumn.css';
import IceboxIcon from './columnIcons/IceboxIcon';
import BacklogIcon from './columnIcons/BacklogIcon';
import CurrentIcon from './columnIcons/CurrentIcon';
import DeliveredIcon from './columnIcons/DeliveredIcon';
import DoneIcon from './columnIcons/DoneIcon';

import StoryItem from './StoryItem';

const StoriesColumn = props => (
  <div className={styles.column}>
    { props.category === 'Icebox' && <IceboxIcon /> }
    { props.category === 'Backlog' && <BacklogIcon /> }
    { props.category === 'Current' && <CurrentIcon /> }
    { props.category === 'Delivered' && <DeliveredIcon /> }
    { props.category === 'Done' && <DoneIcon /> }
    <div className={styles.columnHead}>{ props.category }</div>
    <div className={styles.columnList}>
      {
        props.stories.map(item =>
          <StoryItem
            key={item.id}
            showStoryDetail={props.showStoryDetail}
            {...item}
          />)
      }
    </div>
  </div>
);

StoriesColumn.propTypes = {
  category: React.PropTypes.string.isRequired,
  stories: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      category: React.PropTypes.string.isRequired,
      user: React.PropTypes.string,
      story: React.PropTypes.string,
      tags: React.PropTypes.arrayOf(React.PropTypes.string),
      createdAt: React.PropTypes.string,
    }),
  ).isRequired,
  showStoryDetail: React.PropTypes.func.isRequired,
};

export default StoriesColumn;
