import React from 'react';
import styles from './header.css';

import Topbar from '../Topbar';
import Navbar from '../Navbar';

const Header = props => (
  <div className={styles.header}>
    <Topbar />
    <Navbar toggleNewStoryModal={() => props.toggleNewStoryModal(true)} />
  </div>
);

Header.propTypes = {
  toggleNewStoryModal: React.PropTypes.func.isRequired,
};

export default Header;
