import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fetchStories,
  toggleNewStoryModal,
  handleChangeNewStoryForm,
  addStory,
  incrementNewStoryFormId,
} from '../actions';

import StoriesBoard from '../routes/StoriesBoard';
import LoadingDataBanner from '../components/reusables/LoadingDataBanner';

class HomeContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedStory: {
        id: 8,
        category: 'backlog',
        user: 'Mike',
        story: 'Products should contain items dimensions and weight for logistics',
        tags: ['improvement', 'bug'],
        createdAt: '20-20-2016',
      },
      isStoryDetailShow: false,
    };

    this.showStoryDetail = this.showStoryDetail.bind(this);
    this.hideStoryDetail = this.hideStoryDetail.bind(this);
  }

  componentDidMount() {
    this.props.fetchStories();
  }

  showStoryDetail() {
    this.setState({ isStoryDetailShow: true });
  }

  hideStoryDetail() {
    this.setState({ isStoryDetailShow: false });
  }

  render() {
    return (
      <div>
        <StoriesBoard
          stories={this.props.storiesData}
          isStoryDetailShow={this.state.isStoryDetailShow}
          showStoryDetail={this.showStoryDetail}
          hideStoryDetail={this.hideStoryDetail}
          storyModalData={this.props.storyModalData}
          toggleNewStoryModal={this.props.toggleNewStoryModal}
          handleChangeNewStoryForm={this.props.handleChangeNewStoryForm}
          addStory={this.props.addStory}
          incrementNewStoryFormId={this.props.incrementNewStoryFormId}
        />
        {
          this.props.storiesData.length === 0 && <LoadingDataBanner />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  storiesData: state.storiesData,
  storyModalData: state.storyModalData,
});

const fetchStoriesAsync = () =>
  fetch('http://localhost:3000/stories', {
    method: 'GET',
    mode: 'cors',
  });

const mapDispatchToProps = dispatch => ({
  fetchStories: () => {
    dispatch(fetchStories([]));
    setTimeout(
      () => {
        fetchStoriesAsync()
        .then(response => response.json())
        .then(json => dispatch(fetchStories(json)))
        .catch((ex) => {
          console.log('parsing failed', ex);
        });
      }
    , 5000);
  },
  toggleNewStoryModal: isModalVisible => dispatch(toggleNewStoryModal(isModalVisible)),
  handleChangeNewStoryForm: updatedField => dispatch(handleChangeNewStoryForm(updatedField)),
  addStory: newStory => dispatch(addStory(newStory)),
  incrementNewStoryFormId: () => dispatch(incrementNewStoryFormId()),
});

HomeContainer.propTypes = {
  storiesData: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      category: React.PropTypes.string.isRequired,
      user: React.PropTypes.string,
      profilePictureUrl: React.PropTypes.image,
      story: React.PropTypes.string,
      tags: React.PropTypes.arrayOf(React.PropTypes.string),
      createdAt: React.PropTypes.string,
    }),
  ).isRequired,
  fetchStories: React.PropTypes.func.isRequired,
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
  addStory: React.PropTypes.func.isRequired,
  incrementNewStoryFormId: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
