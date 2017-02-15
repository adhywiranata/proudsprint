import React from 'react';

import styles from './navbar.css';

const Navbar = props => (
  <div className={styles.navbar}>
    <button
      className={styles.newBtn}
      onClick={props.toggleNewStoryModal}
    >
      Add New Story
    </button>
    <div className={styles.active}>Stories</div>
    <div>Users</div>
    <div>Metrics</div>
  </div>
);

Navbar.propTypes = {
  toggleNewStoryModal: React.PropTypes.func.isRequired,
};

export default Navbar;
