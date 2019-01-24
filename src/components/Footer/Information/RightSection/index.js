import React from 'react';

import styles from './RightSection.module.css';

const RightSection = () => {
  return (
    <div className={`${styles.rightSection}`}>
      <ul className={`${styles.listStyle}`}>
        <li className={`${styles.listTitle}`}>Каталог товаров</li>
        <li>Одежда и аксессуары</li>
        <li>Обувь</li>
        <li>Украшения</li>
        <li>Красота и здоровье</li>
        <li>Товары для дома, дачи и отдыха</li>
        <li>Товары для кухни</li>
      </ul>
      <ul className={`${styles.listStyle}`}>
        <li className={`${styles.listTitle}`}>Заказ</li>
        <li>Оплата и доставка</li>
        <li>Возврат</li>
        <li>Помощь</li>
        <li>Благотворительный Фонд Константина Хабенского</li>
        <li>Гарантия на дополнительное обслуживание товара</li>
        <li>Пользовательское соглашение</li>
      </ul>
      <ul className={`${styles.listStyle}`}>
        <li className={`${styles.listTitle}`}>Shop24</li>
        <li>Смотреть прямой эфир</li>
        <li>Расписание передач</li>
        <li>Акции</li>
        <li>Личный кабинет</li>
        <li>Поиск и карта сайта</li>
        <li>Карта брендов</li>
        <li>Обратная связь</li>
      </ul>
      <ul className={`${styles.listStyle}`}>
        <li className={`${styles.listTitle}`}>Информация</li>
        <li>О канале</li>
        <li>Сотрудничество</li>
        <li>Покупайте с нами!</li>
        <li>Контакты</li>
      </ul>
    </div>
  );
};

export default RightSection;
