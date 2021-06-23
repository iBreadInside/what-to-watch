import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import comments from './mocks/comments';
import films from './mocks/films';
import {reducer} from './store/reducer';

const promo = films[0];

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        promo={promo}
        films={films}
        comments={comments}
      />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'));
