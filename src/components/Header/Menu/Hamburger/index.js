import React from 'react';

import styles from './Hamburger.module.css';
import AppContext from '../../../../Context';

class Hamburger extends React.Component {
  static contextType = AppContext;
  state = {
    isOpen: false,
  };

  handlerClick = () => {
    this.context.triggerOpenHamburgerMenu();
  };

  render() {
    return (
      <div onClick={this.handlerClick} className={`${styles.HamburgerMenu}`}>
        <div />
        <div />
        <div />
      </div>
    );
  }
}

export { Hamburger };
