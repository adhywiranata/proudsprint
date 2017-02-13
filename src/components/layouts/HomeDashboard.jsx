import React from 'react';

import styles from './homeDashboard.css';

import IceboxColumn from '../../routes/Home/IceboxColumn';
import BacklogColumn from '../../routes/Home/BacklogColumn';
import CurrentColumn from '../../routes/Home/CurrentColumn';
import DeliveredColumn from '../../routes/Home/DeliveredColumn';
import DoneColumn from '../../routes/Home/DoneColumn';

const HomeDashboard = (props) => {
  const iceboxStories = props.stories.filter(story => story.category === 'icebox');
  return (
    <div className={styles.wrapper}>
      <IceboxColumn iceboxStories={iceboxStories} />
      <BacklogColumn />
      <CurrentColumn />
      <DeliveredColumn />
      <DoneColumn />
    </div>
  );
};

HomeDashboard.propTypes = {
  stories: React.PropTypes.arrayOf(
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

export default HomeDashboard;
