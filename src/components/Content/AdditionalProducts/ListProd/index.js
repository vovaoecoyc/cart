import React from 'react';

import addImageOne from '../../../../images/products/addImage-1.png';
import addImageTwo from '../../../../images/products/addImage-2.png';
import addImageThree from '../../../../images/products/addImage-3.png';
import addImageFour from '../../../../images/products/addImage-4.png';
import styles from './ListProd.module.css';

const ListProd = () => {
  return (
    <div className={`${styles.List}`}>
      <div className={`${styles.Item}`}>
        <img src={addImageOne} alt="additional-product" />
        <span className={`${styles.nameText}`}>Солнечные очки зеленого цвета в стиле ретро</span>
        <span className={`${styles.priceText}`}>2 450 руб.</span>
      </div>
      <div className={`${styles.Item}`}>
        <img src={addImageTwo} alt="additional-product" />
        <span className={`${styles.nameText}`}>Шляпа</span>
        <span className={`${styles.priceText}`}>800 руб.</span>
      </div>
      <div className={`${styles.Item}`}>
        <img src={addImageThree} alt="additional-product" />
        <span className={`${styles.nameText}`}>Платье-миди с расклешенной юбкой</span>
        <span className={`${styles.priceText}`}>2 450 руб.</span>
      </div>
      <div className={`${styles.Item}`}>
        <img src={addImageFour} alt="additional-product" />
        <span className={`${styles.nameText}`}>Платье-миди с расклешенной юбкой</span>
        <span className={`${styles.priceText}`}>2 450 руб.</span>
      </div>
    </div>
  );
};

export default ListProd;
