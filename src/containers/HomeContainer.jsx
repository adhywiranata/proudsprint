import React, { Component } from 'react';
import StoriesBoard from '../routes/StoriesBoard';

class HomeContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      stories: [
        {
          _id: 1,
          category: 'icebox',
          user: 'Jose',
          story: `Add to Cart should be available on all pages containing a product
          and several other functionalities`,
          tags: ['improvement', 'bug'],
          createdAt: '20-20-2016',
        },
        {
          _id: 2,
          category: 'backlog',
          user: 'Jose',
          story: `Add to Cart should be available on all pages containing a product
          and several other functionalities`,
          tags: ['improvement', 'bug'],
          createdAt: '20-20-2016',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <StoriesBoard stories={this.state.stories} />
      </div>
    );
  }
}

export default HomeContainer;
