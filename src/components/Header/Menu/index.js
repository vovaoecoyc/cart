import React from 'react';

import MenuItem from './MenuItem';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <div className={`${styles.menuBlock}`}>
      <nav style={{ height: '100%' }}>
        <ul className={`${styles.navigationList}`}>
          <MenuItem>Одежда и аксессуары</MenuItem>
          <MenuItem>Обувь</MenuItem>
          <MenuItem>Украшения</MenuItem>
          <MenuItem>Красота и здоровье</MenuItem>
          <MenuItem>Товары для дома</MenuItem>
          <MenuItem>Товары для кухни</MenuItem>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
