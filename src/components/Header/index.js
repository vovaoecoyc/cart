import React from 'react';

import Top from './Top';
import Main from './Main';
import Menu from './Menu';
import SubMenu from './Menu/SubMenu';
import styles from './Header.module.css';

const Header = () => {
  return (
    <section>
      <div className={`${styles.topBlock}`}>
        <Top />
      </div>
      <div className={`${styles.mainBlock}`}>
        <Main />
      </div>
      <div className={`${styles.menu}`}>
        <Menu />
      </div>
      <div className={`${styles.subMenu}`}>
        <SubMenu />
      </div>
    </section>
  );
};

export default Header;
