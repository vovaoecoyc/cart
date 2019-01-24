import React from 'react';

import AppContext from '../../../Context';
import CartBlocksTitles from './CartBlocksTitles';
import Product from './Product';
import styles from './CartBody.module.css';

const CartBody = () => {
  return (
    <React.Fragment>
      <div className={`${styles.blockTitles}`}>
        <CartBlocksTitles />
      </div>
      <div className={`${styles.blockProducts}`}>
        <AppContext.Consumer>
          {context => (
            <React.Fragment>
              {context.products.map((value, i) => (
                <Product key={`${value.code}${Math.random() * 100}`} id={i} product={value} />
              ))}
            </React.Fragment>
          )}
        </AppContext.Consumer>
      </div>
    </React.Fragment>
  );
};

export default CartBody;
