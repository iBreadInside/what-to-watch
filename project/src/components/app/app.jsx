import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../pages/main/main';
import NotFound from '../pages/not-found/not-found';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import Film from '../pages/film/film';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import {useSelector} from 'react-redux';
import LoadingScreen from '../elements/loading-screen/loading.screen';
import browserHistory from '../../browser-history';
import {getIsfilmsLoaded, getIsPromoLoaded} from '../../store/main/selectors';
import {getAuthStatus} from '../../store/user/selectors';
import PrivateRoute from '../elements/private-route/private-route';
import {getIsUnexpectedError} from '../../store/errors/selectors';
import ErrorScreen from '../elements/error-screen/error-screen';

export default function App() {
  const isFilmsLoaded = useSelector(getIsfilmsLoaded);
  const isPromoLoaded = useSelector(getIsPromoLoaded);
  const authorizationStatus = useSelector(getAuthStatus);
  const isError = useSelector(getIsUnexpectedError);

  if (isFilmsLoaded && isPromoLoaded && authorizationStatus !== AuthorizationStatus.UNKNOWN) {
    return (
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <Main />
          </Route>

          <Route exact path={AppRoute.SIGN_IN}>
            <SignIn />
          </Route>

          <PrivateRoute exact path={AppRoute.MY_LIST}
            render={() => <MyList />}
          >
          </PrivateRoute>

          <Route exact path={AppRoute.FILM}>
            <Film />
          </Route>

          <PrivateRoute exact path={AppRoute.ADD_REVIEW}
            render={() => <AddReview />}
          >
          </PrivateRoute>

          <Route exact path={AppRoute.PLAYER}>
            <Player />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  } else {
    return (
      isError
        ? <ErrorScreen />
        : <LoadingScreen />
    );
  }
}
