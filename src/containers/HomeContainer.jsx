import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStories } from '../actions';

import StoriesBoard from '../routes/StoriesBoard';

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
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  storiesData: state.storiesData,
});

const mapDispatchToProps = dispatch => ({
  fetchStories: () => dispatch(fetchStories()),
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
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
