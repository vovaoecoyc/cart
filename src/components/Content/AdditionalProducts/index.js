import React from 'react';

import ListProd from './ListProd';
import styles from './AddProducts.module.css';

const AdditionalProducts = () => {
  return (
    <div className={`${styles.additionalBlock}`}>
      <div className={`${styles.additionalTitle}`}>
        <hr />
        <span>Добавьте к вашему заказу</span>
        <hr />
      </div>
      <ListProd />
    </div>
  );
};

export default AdditionalProducts;
