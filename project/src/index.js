import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const PROMO = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  released: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App promo={PROMO} />
  </React.StrictMode>,
  document.querySelector('#root'));