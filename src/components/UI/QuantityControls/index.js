import React from 'react';

import AppContext from '../../../Context';
import styles from './QuantityControls.module.css';

const QuantityControls = props => {
  return (
    <AppContext.Consumer>
      {context => (
        <React.Fragment>
          <span onClick={() => context.decrementProduct(props.id)} className={`${styles.mrQtyDec}`}>
            -
          </span>
          <span className={`${styles.quantityText}`}>{props.quantity}</span>
          <span onClick={() => context.incrementProduct(props.id)} className={`${styles.mrQtyInc}`}>
            +
          </span>
        </React.Fragment>
      )}
    </AppContext.Consumer>
  );
};

export { QuantityControls };
