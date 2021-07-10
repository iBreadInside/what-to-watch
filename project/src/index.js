import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {reducer} from './store/reducer';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {checkAuth, fetchFilmList, fetchPromoFilm} from './store/api-actions';
import {ActionCreator} from './store/actions';
import {AuthorizationStatus} from './const';

const api = createAPI(
  () => store.dispatch(
    ActionCreator.requireAuthorization(
      AuthorizationStatus.NO_AUTH,
    ),
  ),
  () => store.dispatch(
    ActionCreator.showError(),
  ),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(checkAuth());
store.dispatch(fetchFilmList());
store.dispatch(fetchPromoFilm());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'));
