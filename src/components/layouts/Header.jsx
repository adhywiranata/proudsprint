import React from 'react';
import styles from './header.css';

import Topbar from './Topbar';
import Navbar from './Navbar';

const Header = () => (
  <div className={styles.header}>
    <Topbar />
    <Navbar />
  </div>
);

export default Header;
