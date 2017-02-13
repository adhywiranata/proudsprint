import React from 'react';

import styles from './index.css';

import IceboxColumn from './StoriesColumn/IceboxColumn';
import BacklogColumn from './StoriesColumn/BacklogColumn';
import CurrentColumn from './StoriesColumn/CurrentColumn';
import DeliveredColumn from './StoriesColumn/DeliveredColumn';
import DoneColumn from './StoriesColumn/DoneColumn';

const Home = (props) => {
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

Home.propTypes = {
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

export default Home;
