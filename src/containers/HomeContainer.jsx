import React, { Component } from 'react';
import StoriesBoard from '../routes/StoriesBoard';

import storiesData from '../../data/stories.json';

class HomeContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      stories: storiesData.stories,
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
          stories={this.state.stories}
          isStoryDetailShow={this.state.isStoryDetailShow}
          showStoryDetail={this.showStoryDetail}
          hideStoryDetail={this.hideStoryDetail}
        />
      </div>
    );
  }
}

export default HomeContainer;
