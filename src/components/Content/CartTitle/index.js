import React from 'react';

import AppContext from '../../../Context';
import styles from './Title.module.css';

const CartTitle = () => {
  return (
    <AppContext.Consumer>
      {context => (
        <div
          className={
            context.getIdActiveMenuItem() !== null
              ? `${styles.titleBlock} ${styles.MrByMenu}`
              : `${styles.titleBlock}`
          }
        >
          <hr />
          <span>Ваша корзина</span>
          <hr />
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default CartTitle;
