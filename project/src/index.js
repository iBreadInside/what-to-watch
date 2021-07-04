import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import comments from './mocks/comments';
import {reducer} from './store/reducer';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {checkAuth, fetchFilmList} from './store/api-actions';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './const';
import {redirect} from './store/middlewares';

const api = createAPI(
  () => store.dispatch(
    ActionCreator.requireAuthorization(
      AuthorizationStatus.UNKNOWN,
    ),
  ),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

store.dispatch(checkAuth());
store.dispatch(fetchFilmList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        comments={comments}
      />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'));
