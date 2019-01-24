import React from 'react';

import styles from './Buttons.module.css';

const ButtonOrder = props => {
  return (
    <button {...props} className={`${styles.buttonStyle} ${styles.colorOrderButton}`}>
      {props.children}
    </button>
  );
};

const ButtonSuccess = props => {
  return (
    <button {...props} className={`${styles.buttonStyle} ${styles.colorSuccessButton}`}>
      {props.children}
    </button>
  );
};

export { ButtonOrder, ButtonSuccess };
