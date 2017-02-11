import React from 'react';

import Header from '../components/layouts/Header';

const MainContainer = props => (
  <div>
    <Header />
    { props.children }
  </div>
);

MainContainer.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default MainContainer;
