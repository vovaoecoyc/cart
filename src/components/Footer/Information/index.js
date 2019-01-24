import React from 'react';

import LeftSection from './LeftSection';
import RightSection from './RightSection';
import styles from './Information.module.css';

const Information = () => {
  return (
    <div className={`${styles.informationSection}`}>
      <div className={`${styles.informationBlock}`}>
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
};

export default Information;
