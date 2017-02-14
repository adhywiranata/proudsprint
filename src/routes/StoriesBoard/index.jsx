import React from 'react';

import styles from './index.css';

import IceboxColumn from './StoriesColumn/IceboxColumn';
import BacklogColumn from './StoriesColumn/BacklogColumn';
import CurrentColumn from './StoriesColumn/CurrentColumn';
import DeliveredColumn from './StoriesColumn/DeliveredColumn';
import DoneColumn from './StoriesColumn/DoneColumn';
import StoryItemDetails from './StoryItemDetails';

const Home = (props) => {
  const iceboxStories = props.stories.filter(story => story.category === 'icebox');
  const backlogStories = props.stories.filter(story => story.category === 'backlog');
  const currentStories = props.stories.filter(story => story.category === 'current');
  const deliveredStories = props.stories.filter(story => story.category === 'delivered');
  const doneStories = props.stories.filter(story => story.category === 'done');

  return (
    <div className={styles.wrapper}>
      <IceboxColumn
        iceboxStories={iceboxStories}
        showStoryDetail={props.showStoryDetail}
      />
      <BacklogColumn
        backlogStories={backlogStories}
        showStoryDetail={props.showStoryDetail}
      />
      <CurrentColumn
        currentStories={currentStories}
        showStoryDetail={props.showStoryDetail}
      />
      <DeliveredColumn
        deliveredStories={deliveredStories}
        showStoryDetail={props.showStoryDetail}
      />
      <DoneColumn
        doneStories={doneStories}
        showStoryDetail={props.showStoryDetail}
      />
      { props.isStoryDetailShow === true && <StoryItemDetails />}
    </div>
  );
};

Home.propTypes = {
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
  isStoryDetailShow: React.PropTypes.bool.isRequired,
  showStoryDetail: React.PropTypes.func.isRequired,
};

export default Home;
