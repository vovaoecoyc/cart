import React from 'react';

import MenuItem from '../MenuItem';
import styles from '../Menu.module.css';

const SubMenu = () => {
  return (
    <div className={`${styles.menuBlock}`}>
      <nav style={{ height: '100%' }}>
        <ul className={`${styles.navigationSubList}`}>
          <MenuItem>Женская одежда</MenuItem>
          <MenuItem>Мужская одежда</MenuItem>
          <MenuItem>Аксессуары</MenuItem>
        </ul>
      </nav>
    </div>
  );
};

export default SubMenu;
