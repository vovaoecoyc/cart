import React from 'react';

import Logo from '../../../../images/footer-logo.png';
import styles from './LeftSection.module.css';

const LeftSection = () => {
  return (
    <div className={`${styles.leftSection}`}>
      <img src={Logo} alt="footer-logo" />
      <div className={`${styles.phoneBlock}`}>
        <span className={`${styles.phone}`}>8 (800) 500-75-55*</span>
        <span className={`${styles.phoneInfo}`}>*Бесплатный звонок по всей России</span>
        <span className={`${styles.phone}`}>8 (495) 733-96-03</span>
      </div>
    </div>
  );
};

export default LeftSection;
