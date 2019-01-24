import React from 'react';

import styles from './Title.module.css';

const CartTitle = () => {
  return (
    <div className={`${styles.titleBlock}`}>
      <hr />
      <span>Ваша корзина</span>
      <hr />
    </div>
  );
};

export default CartTitle;
