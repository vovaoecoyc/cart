import React from 'react';

import CartTitle from './CartTitle';
import CartBody from './CartBody';
import CartTotal from './CartTotal';
import AdditionalProducts from './AdditionalProducts';

const Content = () => {
  return (
    <section>
      <CartTitle />
      <CartBody />
      <CartTotal />
      <AdditionalProducts />
    </section>
  );
};

export default Content;
