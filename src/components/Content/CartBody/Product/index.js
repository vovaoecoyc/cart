import React from 'react';

import styles from './Product.module.css';
import AppContext from '../../../../Context';
import sizeBlock from '../CartBody.module.css';
import removeProductImage from '../../../../images/image-remove.png';
import { QuantityControls } from '../../../UI/QuantityControls';

class Product extends React.Component {
  static contextType = AppContext;

  render() {
    const {
      product: { image, name, code, size, color, quantity, price },
      id,
    } = this.props;
    return (
      <div className={`${styles.productBlock}`}>
        <div className={`${sizeBlock.productBlockSize}`}>
          <img src={image} alt={name} />
        </div>
        <div className={`${sizeBlock.descriptionBlockSize}`}>
          <p className={`${styles.mainText}`}>{name}</p>
          <p className={`${styles.subText}`}>{`Код: ${code}`}</p>
          <p className={`${styles.mainText}`}>{`Размер: ${size}`}</p>
          <p className={`${styles.mainText}`}>{`Цвет: ${color}`}</p>
        </div>
        <div className={`${sizeBlock.quantityBlockSize}`}>
          <QuantityControls id={id} quantity={quantity} />
        </div>
        <div className={`${sizeBlock.priceBlockSize}`}>
          <span className={`${styles.mainText}`}>{`${price} руб.`}</span>
        </div>
        <div className={`${sizeBlock.removeBlockSize}`}>
          <img
            onClick={() => this.context.removeProductFromCart(id)}
            src={removeProductImage}
            alt="remove-product"
          />
        </div>
      </div>
    );
  }
}

export default Product;
