import React from 'react';

import AppContext from '../../../../Context';
import { ButtonOrder } from '../.././../UI/Buttons';
import styles from './TotalResult.module.css';

class TotalResult extends React.Component {
  static contextType = AppContext;
  render() {
    return (
      <div className={`${styles.resultBlock}`}>
        <div className={`${styles.resultItem}`}>
          <span>Сумма заказа:</span>
          <span>{this.context.getOrderSumm()} руб.</span>
        </div>
        {this.context.sale.isApplySale && this.context.sale.summSale > 0 ? (
          <div className={`${styles.resultItem}`}>
            <span className={`${styles.resultPromoColor}`}>Промокод:</span>
            <span className={`${styles.resultPromoColor}`}>-{this.context.sale.summSale} руб.</span>
          </div>
        ) : (
          ''
        )}
        <div className={`${styles.resultItem} ${styles.total}`}>
          <span>Всего:</span>
          <span>{this.context.getOrderSummWithSale()} руб.</span>
        </div>
        <div className={`${styles.orderSuccessBlock}`}>
          <ButtonOrder>Оформить заказ</ButtonOrder>
        </div>
      </div>
    );
  }
}

export default TotalResult;
