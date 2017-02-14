import React, { Component } from 'react';
import StoriesBoard from '../routes/StoriesBoard';

class HomeContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      stories: [
        {
          id: 1,
          category: 'icebox',
          user: 'Jose',
          story: 'Add to Cart should be available on all pages containing a product and several other functionalities',
          tags: ['improvement', 'bug'],
          createdAt: '20-20-2016',
        },
        {
          id: 2,
          category: 'backlog',
          user: 'Mike',
          story: 'Products should contain items dimensions and weight for logistics',
          tags: ['improvement', 'bug'],
          createdAt: '20-20-2016',
        },
        {
          id: 3,
          category: 'current',
          user: 'Jude',
          story: 'User cannot sign up using facebook',
          tags: ['improvement', 'bug'],
          createdAt: '20-20-2016',
        },
        {
          id: 4,
          category: 'delivered',
          user: 'Robert',
          story: 'Add to Cart should be available on all pages containing a product and several other functionalities',
          tags: ['improvement', 'bug'],
          createdAt: '20-20-2016',
        },
        {
          id: 5,
          category: 'done',
          user: 'Daniel',
          story: 'Add to Cart should be available on all pages containing a product and several other functionalities',
          tags: ['improvement', 'bug'],
          createdAt: '20-20-2016',
        },
        {
          id: 6,
          category: 'backlog',
          user: 'Michael',
          story: 'Products should contain items dimensions and weight for logistics',
          tags: ['improvement', 'bug'],
          createdAt: '20-20-2016',
        },
        {
          id: 7,
          category: 'backlog',
          user: 'Bob',
          story: 'Products should contain items dimensions and weight for logistics',
          tags: ['improvement', 'bug'],
          createdAt: '20-20-2016',
        },
        {
          id: 8,
          category: 'backlog',
          user: 'Mike',
          story: 'Products should contain items dimensions and weight for logistics',
          tags: ['improvement', 'bug'],
          createdAt: '20-20-2016',
        },
      ],
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
  }

  showStoryDetail() {
    this.setState({ isStoryDetailShow: true });
  }

  render() {
    return (
      <div>
        <StoriesBoard
          stories={this.state.stories}
          isStoryDetailShow={this.state.isStoryDetailShow}
          showStoryDetail={this.showStoryDetail}
        />
      </div>
    );
  }
}

export default HomeContainer;
