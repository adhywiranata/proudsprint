import React from 'react';

import styles from './navbar.css';

const Navbar = () => (
  <div className={styles.navbar}>
    <div className={styles.active}>Stories</div>
    <div>Users</div>
    <div>Metrics</div>
  </div>
);

export default Navbar;
