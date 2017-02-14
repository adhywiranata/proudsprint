import React from 'react';

import styles from './index.css';

import StoriesColumn from './StoriesColumn';
import StoryItemDetails from './StoryItemDetails';

const Home = (props) => {
  const iceboxStories = props.stories.filter(story => story.category === 'icebox');
  const backlogStories = props.stories.filter(story => story.category === 'backlog');
  const currentStories = props.stories.filter(story => story.category === 'current');
  const deliveredStories = props.stories.filter(story => story.category === 'delivered');
  const doneStories = props.stories.filter(story => story.category === 'done');

  return (
    <div className={styles.wrapper}>
      <StoriesColumn category="Icebox" stories={iceboxStories} />
      <StoriesColumn category="Backlog" stories={backlogStories} />
      <StoriesColumn category="Current" stories={currentStories} />
      <StoriesColumn category="Delivered" stories={deliveredStories} />
      <StoriesColumn category="Done" stories={doneStories} />
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
