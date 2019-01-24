import React from 'react';

import TotalPromo from './TotalPromo';
import TotalResult from './TotalResult';
import styles from './CartTotal.module.css';

class CartTotal extends React.Component {
  render() {
    return (
      <div className={`${styles.totalBlock}`}>
        <TotalPromo />
        <TotalResult />
      </div>
    );
  }
}

export default CartTotal;
