import React from 'react';

const AuthContainer = props => (
  <div>
    <h1>Auth Layout</h1>
    { props.children }
  </div>
);

AuthContainer.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default AuthContainer;
