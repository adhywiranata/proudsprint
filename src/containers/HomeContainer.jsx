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
          story: 'Add to Cart should be available on all pages containing a product and several other functionalities',
          tags: ['improvement', 'bug'],
          createdAt: '20-20-2016',
        },
        {
          _id: 2,
          category: 'backlog',
          user: 'Mike',
          story: 'Products should contain items dimensions and weight for logistics',
          tags: ['improvement', 'bug'],
          createdAt: '20-20-2016',
        },
        {
          _id: 3,
          category: 'current',
          user: 'Jude',
          story: 'User cannot sign up using facebook',
          tags: ['improvement', 'bug'],
          createdAt: '20-20-2016',
        },
        {
          _id: 4,
          category: 'delivered',
          user: 'Robert',
          story: 'Add to Cart should be available on all pages containing a product and several other functionalities',
          tags: ['improvement', 'bug'],
          createdAt: '20-20-2016',
        },
        {
          _id: 5,
          category: 'done',
          user: 'Daniel',
          story: 'Add to Cart should be available on all pages containing a product and several other functionalities',
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
