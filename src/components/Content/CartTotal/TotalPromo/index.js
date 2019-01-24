import React from 'react';

import AppContext from '../../../../Context';
import { Input } from '../../../UI/Input';
import { ButtonSuccess } from '../../../UI/Buttons';
import styles from './TotalPromo.module.css';

class TotalPromo extends React.Component {
  state = {
    code: '',
    isValidPromoCode: false,
    summSale: 0,
  };

  static contextType = AppContext;

  handlerChange(e) {
    const valueInput = e.target.value;
    let isValidPromoCode = false,
      summSale = 0;
    this.context.promoCodes.forEach(value => {
      const valueCode = +valueInput ? +valueInput : '';
      if (value.code === valueCode) {
        isValidPromoCode = true;
        summSale = this.context.getOrderSumm() > 0 ? value.summSale : 0;
      }
    });
    this.setState(prevState => ({
      code: valueInput,
      isValidPromoCode: isValidPromoCode,
      summSale: summSale,
    }));
  }

  render() {
    return (
      <div className={`${styles.promoBlock}`}>
        <span>Есть промокод?</span>
        <div className={`${styles.submitPromoBlock}`}>
          <Input
            type="text"
            placeholder="Введите промокод"
            onChange={this.handlerChange.bind(this)}
          />
          <ButtonSuccess
            onClick={() => this.context.applySale(this.state.summSale)}
            disabled={!this.state.isValidPromoCode}
          >
            Применить
          </ButtonSuccess>
        </div>
      </div>
    );
  }
}

export default TotalPromo;
