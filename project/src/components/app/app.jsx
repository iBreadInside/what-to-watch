import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../pages/main/main';
import NotFound from '../pages/not-found/not-found';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import Film from '../pages/film/film';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import {connect} from 'react-redux';
import LoadingScreen from '../elements/loading-screen/loading.screen';
// import ErrorScreen from '../elements/error-screen/error-screen';
import {PrivateRoute} from '../elements/private-route/private-route';
import browserHistory from '../../browser-history';

const mapStateToProps = (state) => ({
  // films: state.allFilmList,
  isFilmsLoaded: state.isFilmsLoaded,
  isPromoLoaded: state.isPromoLoaded,
  error: state.error,
  authorizationStatus: state.authorizationStatus,
});

App.propTypes = {
  isFilmsLoaded: PropTypes.bool.isRequired,
  isPromoLoaded: PropTypes.bool.isRequired,
  error: PropTypes.string,
  authorizationStatus: PropTypes.string.isRequired,
};

export function App({isFilmsLoaded, isPromoLoaded, error, authorizationStatus}) {
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
            authorizationStatus={authorizationStatus}
            render={() => <MyList />}
          >
          </PrivateRoute>

          <Route exact path={AppRoute.FILM}>
            <Film />
          </Route>

          <PrivateRoute exact path={AppRoute.ADD_REVIEW}
            authorizationStatus={authorizationStatus}
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
      <LoadingScreen />
    );
  }
}

export default connect(mapStateToProps)(App);
