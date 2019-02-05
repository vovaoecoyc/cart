import React from 'react';

import AppContext from '../../../../Context';
import styles from './MenuItem.module.css';

class MenuItem extends React.Component {
  static contextType = AppContext;
  handlerClick(e) {
    e.preventDefault();
    this.context.changeStatusSubMenu(this.props.id);
  }
  render() {
    const { isMain, children, id } = this.props;
    const content = isMain ? (
      <li
        className={this.context.getIdActiveMenuItem() === id ? `${styles.Active}` : ''}
        onClick={this.handlerClick.bind(this)}
      >
        <a href="/">
          {children}
        </a>
      </li>
    ) : (
      <li>
        <a href="/">{children}</a>
      </li>
    );
    return content;
  }
}

export default MenuItem;
