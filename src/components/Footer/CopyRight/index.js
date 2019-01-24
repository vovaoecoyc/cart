import React from 'react';

import styles from './CopyRight.module.css';

const CopyRight = () => {
  return (
    <div className={`${styles.copyRightBlock}`}>
      <span>
        Copyright © Товар ООО «Стиль и Мода», 2014-2016. Все права защищены. При использовании
        материалов сайта ссылка на www.shop24.com обязательна. 115193, Москва, ул. Кожуховская 5-я,
        д. 9, помещение VII Телефон 8 800 500-75-55
      </span>
    </div>
  );
};

export default CopyRight;
