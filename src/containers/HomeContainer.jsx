import React, { Component } from 'react';
import HomeDashboard from '../components/layouts/HomeDashboard';

class HomeContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      stories: {
        icebox: [],
        backlog: [],
        delivered: [],
      },
    };
  }

  render() {
    return (
      <div>
        <HomeDashboard />
      </div>
    );
  }
}

export default HomeContainer;
