import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import image1 from './images/products/image-1.png';
import image2 from './images/products/image-2.png';
import image3 from './images/products/image-3.png';

const data = {
  promoCodes: [
    {
      id: 1,
      code: 123456,
      summSale: 1800,
    },
  ],
  products: [
    {
      image: image1,
      name: 'Платье-мидии с расклешенной юбкой',
      code: '82039-11',
      size: '44',
      color: 'синий',
      quantity: 3,
      price: 2450,
    },
    {
      image: image2,
      name: 'Туфли женские украшенные кружевными вставками',
      code: '13524-01',
      size: '38',
      color: 'черный',
      quantity: 1,
      price: 2450,
    },
    {
      image: image3,
      name: 'Платье-миди',
      code: '75039',
      size: '44',
      color: 'белый',
      quantity: 1,
      price: 2450,
    },
    {
      image: image3,
      name: 'Платье-миди',
      code: '75039',
      size: '46',
      color: 'белый',
      quantity: 1,
      price: 2450,
    },
  ],
};

ReactDOM.render(<App data={data} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
