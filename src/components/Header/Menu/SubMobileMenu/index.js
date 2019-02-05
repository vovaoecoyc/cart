import React from 'react';

import MenuItem from '../MenuItem';
import styles from './SubMobileMenu.module.css';

const SubMobileMenu = () => {
  return (
    <ul className={`${styles.ListStyle}`}>
      <MenuItem>Женская одежда</MenuItem>
      <MenuItem>Мужская одежда</MenuItem>
      <MenuItem>Аксессуары</MenuItem>
    </ul>
  );
};

export default SubMobileMenu;
