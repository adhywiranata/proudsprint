import React, { Component } from 'react';
import ProductBacklog from '../routes/Home/ProductBacklog';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
    };
  }

  render() {
    return (
      <div>
        <ProductBacklog />
        <ProductBacklog />
        <ProductBacklog />
      </div>
    );
  }
}

export default HomeContainer;
