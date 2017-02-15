import React from 'react';

import styles from './index.css';

import StoriesColumn from './StoriesColumn';
import StoryItemDetails from './StoryItemDetails';
import NewStoryModal from './NewStoryModal';

const Home = (props) => {
  const iceboxStories = props.stories.filter(story => story.category === 'icebox');
  const backlogStories = props.stories.filter(story => story.category === 'backlog');
  const currentStories = props.stories.filter(story => story.category === 'current');
  const deliveredStories = props.stories.filter(story => story.category === 'delivered');
  const doneStories = props.stories.filter(story => story.category === 'done');

  const columns = [
    { colId: 1, category: 'Icebox', data: iceboxStories },
    { colId: 2, category: 'Backlog', data: backlogStories },
    { colId: 3, category: 'Current', data: currentStories },
    { colId: 4, category: 'Delivered', data: deliveredStories },
    { colId: 5, category: 'Done', data: doneStories },
  ];

  return (
    <div className={styles.wrapper}>
      {
        columns.map(storyColumn =>
          <StoriesColumn
            key={storyColumn.colId}
            category={storyColumn.category}
            stories={storyColumn.data}
            showStoryDetail={props.showStoryDetail}
          />)
      }
      {
        props.isStoryDetailShow === true &&
        <StoryItemDetails hideStoryDetail={props.hideStoryDetail} />
      }
      {
        props.storyModalData.isModalVisible === true &&
        <NewStoryModal
          storyModalData={props.storyModalData}
          toggleNewStoryModal={props.toggleNewStoryModal}
          handleChangeNewStoryForm={props.handleChangeNewStoryForm}
        />
      }
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

  hideStoryDetail: React.PropTypes.func.isRequired,

  storyModalData: React.PropTypes.shape({
    isModalVisible: React.PropTypes.bool.isRequired,
    newStoryForm: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      category: React.PropTypes.string.isRequired,
      user: React.PropTypes.string,
      profilePictureUrl: React.PropTypes.image,
      story: React.PropTypes.string,
      tags: React.PropTypes.arrayOf(React.PropTypes.string),
      createdAt: React.PropTypes.string,
    }).isRequired,
  }).isRequired,

  toggleNewStoryModal: React.PropTypes.func.isRequired,
  handleChangeNewStoryForm: React.PropTypes.func.isRequired,
};

export default Home;
