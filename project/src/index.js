import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';

const promo = films[0];

ReactDOM.render(
  <React.StrictMode>
    <App
      promo={promo}
      films={films}
    />
  </React.StrictMode>,
  document.querySelector('#root'));
