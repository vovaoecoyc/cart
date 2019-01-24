import React from 'react';

const MenuItem = props => {
  return (
    <li>
      <a href="/">{props.children}</a>
    </li>
  );
};

export default MenuItem;
