import React from 'react';

import styles from './index.css';

import IceboxColumn from './StoriesColumn/IceboxColumn';
import BacklogColumn from './StoriesColumn/BacklogColumn';
import CurrentColumn from './StoriesColumn/CurrentColumn';
import DeliveredColumn from './StoriesColumn/DeliveredColumn';
import DoneColumn from './StoriesColumn/DoneColumn';

const Home = (props) => {
  const iceboxStories = props.stories.filter(story => story.category === 'icebox');
  const backlogStories = props.stories.filter(story => story.category === 'backlog');
  const currentStories = props.stories.filter(story => story.category === 'current');
  const deliveredStories = props.stories.filter(story => story.category === 'delivered');
  const doneStories = props.stories.filter(story => story.category === 'done');

  return (
    <div className={styles.wrapper}>
      <IceboxColumn iceboxStories={iceboxStories} />
      <BacklogColumn backlogStories={backlogStories} />
      <CurrentColumn currentStories={currentStories} />
      <DeliveredColumn deliveredStories={deliveredStories} />
      <DoneColumn doneStories={doneStories} />
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
