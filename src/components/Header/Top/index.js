import React from 'react';

import styles from './Top.module.css';
import starImage from '../../../images/star.png';
import youTube from '../../../images/youtube.png';
import play from '../../../images/play.png';

const Top = () => {
  return (
    <div className={`${styles.topStyles}`}>
      <div className={styles.leftBlock}>
        <span className={`${styles.phoneFontSize}`}>8(800)500-75-55</span>&nbsp;Бесплатный звонок по
        России
      </div>
      <div className={`${styles.rightBlock}`}>
        <div className={`${styles.rightBlockItem}`}>
          <img src={starImage} alt="star" />
          <span className={`${styles.rightBlockText}`}>Звездный блог</span>
        </div>
        <div className={`${styles.rightBlockItem}`}>
          <img src={youTube} alt="youtube" />
          <span className={`${styles.rightBlockText}`}>Смотрите нас на YouTube</span>
        </div>
        <div className={`${styles.rightBlockItem}`}>
          <img src={play} alt="playVideo" />
          <span className={`${styles.rightBlockText}`}>Смотрите наш прямой эфир</span>
        </div>
      </div>
      <div />
    </div>
  );
};

export default Top;
