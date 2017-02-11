import React from 'react';

const AuthLayout = props => (
  <div>
    <h1>Auth Layout</h1>
    { props.children }
  </div>
);

AuthLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default AuthLayout;
