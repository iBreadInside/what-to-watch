import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {createAPI} from './services/api';
import {checkAuth, fetchFilmList, fetchPromoFilm} from './store/api-actions';
import {requireAuthorization, setBadRequest} from './store/actions';
import {AuthorizationStatus} from './const';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './store/root-reducer';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
  () => store.dispatch(setBadRequest(true)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(checkAuth());
store.dispatch(fetchPromoFilm());
store.dispatch(fetchFilmList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'));
