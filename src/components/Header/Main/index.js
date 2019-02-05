import React from 'react';

import AppContext from '../../../Context';
import styles from './Main.module.css';
import Logo from '../../../images/logo.png';
import SearchImage from '../../../images/search-icon.png';
import profileIcon from '../../../images/profile-icon.png';
import cartIcon from '../../../images/cart-icon.png';

const Main = () => {
  return (
    <AppContext.Consumer>
      {context => (
        <React.Fragment>
          <div className={`${styles.leftBlock}`}>
            <img className={`${styles.Logo}`} src={Logo} alt="logo" />
            <div className={`${styles.searchBlock}`}>
              <input className={`${styles.inputStyle}`} type="text" placeholder="Поиск по сайту" />
              <div
                style={{ backgroundImage: `url(${SearchImage})` }}
                className={`${styles.iconStyle}`}
              />
            </div>
          </div>
          <div className={`${styles.rightBlock}`}>
            <div className={`${styles.profileBlock}`}>
              <img src={profileIcon} alt="profile" />
              <span className={`${styles.mrText}`}>Анастасия</span>
            </div>
            <div className={`${styles.cartBlock}`}>
              <img src={cartIcon} alt="cart" />
              <span className={`${styles.mrText}`}>
                В корзине: <p>{context.getProductsQuantityInCart()} товара</p>
              </span>
            </div>
          </div>
        </React.Fragment>
      )}
    </AppContext.Consumer>
  );
};

export default Main;
