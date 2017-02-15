import React from 'react';

import styles from './navbar.css';

const Navbar = () => (
  <div className={styles.navbar}>
    <button className={styles.newBtn}>Add New Story</button>
    <div className={styles.active}>Stories</div>
    <div>Users</div>
    <div>Metrics</div>
  </div>
);

export default Navbar;
