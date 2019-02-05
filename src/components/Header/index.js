import React from 'react';

import Top from './Top';
import Main from './Main';
import Menu from './Menu';
import SubMenu from './Menu/SubMenu';
import { Hamburger } from './Menu/Hamburger';
import AppContext from '../../Context';
import styles from './Header.module.css';

class Header extends React.Component {
  static contextType = AppContext;
  render() {
    return (
      <section>
        <div className={`${styles.topBlock}`}>
          {!this.context.mobileMenuStatus.openMobileMenu ? <Top /> : ''}
        </div>
        <div className={`${styles.mainBlock}`}>
          {!this.context.mobileMenuStatus.openMobileMenu ? <Main /> : ''}
        </div>
        <div className={`${styles.menu}`}>
          {this.context.mobileMenuStatus.openMobileMenu ||
          !this.context.mobileMenuStatus.showMobileMenu ? (
            <Menu />
          ) : (
            <Hamburger />
          )}
        </div>
        {this.context.subMenu.showSubMenu ? (
          <div className={`${styles.subMenu}`}>
            <SubMenu />
          </div>
        ) : (
          ''
        )}
      </section>
    );
  }
}

export default Header;
