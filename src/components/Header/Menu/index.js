import React from 'react';

import MenuItem from './MenuItem';
import styles from './Menu.module.css';
import AppContext from '../../../Context';
import SubMobileMenu from './SubMobileMenu';

const Menu = () => {
  const handlerClick = context => {
    context.closeSubMenu();
    context.triggerOpenHamburgerMenu();
  };
  return (
    <AppContext.Consumer>
      {context => (
        <div className={`${styles.menuBlock}`}>
          <nav style={{ height: '100%' }}>
            <div className={`${styles.CloseIcon}`} onClick={() => handlerClick(context)}>
              X
            </div>
            {context.mobileMenuStatus.showMobileMenu && context.mobileMenuStatus.openMobileMenu ? (
              <div className={`${styles.MobileMenuContent}`}>
                <ul className={`${styles.navigationList}`}>
                  <MenuItem id={1} isMain={true}>
                    Одежда и аксессуары
                  </MenuItem>
                  <MenuItem id={2} isMain={true}>
                    Обувь
                  </MenuItem>
                  <MenuItem id={3} isMain={true}>
                    Украшения
                  </MenuItem>
                  <MenuItem id={4} isMain={true}>
                    Красота и здоровье
                  </MenuItem>
                  <MenuItem id={5} isMain={true}>
                    Товары для дома
                  </MenuItem>
                  <MenuItem id={6} isMain={true}>
                    Товары для кухни
                  </MenuItem>
                </ul>
                {context.subMenu.showSubMenu ? <SubMobileMenu /> : ''}
              </div>
            ) : (
              <ul className={`${styles.navigationList}`}>
                <MenuItem id={1} isMain={true}>
                  Одежда и аксессуары
                </MenuItem>
                <MenuItem id={2} isMain={true}>
                  Обувь
                </MenuItem>
                <MenuItem id={3} isMain={true}>
                  Украшения
                </MenuItem>
                <MenuItem id={4} isMain={true}>
                  Красота и здоровье
                </MenuItem>
                <MenuItem id={5} isMain={true}>
                  Товары для дома
                </MenuItem>
                <MenuItem id={6} isMain={true}>
                  Товары для кухни
                </MenuItem>
              </ul>
            )}
          </nav>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default Menu;
