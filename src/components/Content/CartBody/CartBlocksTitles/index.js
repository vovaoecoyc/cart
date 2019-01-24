import React from 'react';

import stylesSize from '../CartBody.module.css';

const CartBlocksTitles = () => {
  return (
    <React.Fragment>
      <div style={{ marginLeft: '15px' }} className={`${stylesSize.productBlockSize}`}>
        Товар
      </div>
      <div className={`${stylesSize.descriptionBlockSize}`}>Описание</div>
      <div className={`${stylesSize.quantityBlockSize}`}>Количество</div>
      <div className={`${stylesSize.priceBlockSize}`}>Цена</div>
      <div className={`${stylesSize.removeBlockSize}`}>Удалить</div>
    </React.Fragment>
  );
};

export default CartBlocksTitles;
