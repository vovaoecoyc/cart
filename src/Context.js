import React from 'react';

const AppContext = React.createContext({
  products: [],
  getProductsQuantityInCart: () => ({}),
  incrementProduct: () => ({}),
  decrementProduct: () => ({}),
  getOrderSumm: () => ({}),
  getOrderSummWithSale: () => ({}),
  applySale: () => ({}),
  removeProductFromCart: () => ({}),
});

export default AppContext;
