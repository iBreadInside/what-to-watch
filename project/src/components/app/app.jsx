import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../pages/main/main';
import NotFound from '../pages/not-found/not-found';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import Film from '../pages/film/film';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import filmProp from '../pages/film/film.prop';
import commentProp from '../elements/comment/comment.prop';
import {connect} from 'react-redux';
import LoadingScreen from '../elements/loading-screen/loading.screen';
import ErrorScreen from '../elements/error-screen/error-screen';
import {PrivateRoute} from '../elements/private-route/private-route';
import browserHistory from '../../browser-history';

const mapStateToProps = (state) => ({
  films: state.allFilmList,
  isFilmsLoaded: state.isFilmsLoaded,
  error: state.error,
  authorizationStatus: state.authorizationStatus,
});

App.propTypes = {
  films: PropTypes.arrayOf(filmProp),
  comments: PropTypes.arrayOf(commentProp),
  isFilmsLoaded: PropTypes.bool.isRequired,
  error: PropTypes.string,
  authorizationStatus: PropTypes.string.isRequired,
};

export function App({films, isFilmsLoaded, comments, error, authorizationStatus}) {
  if (!isFilmsLoaded) {
    return (
      <LoadingScreen />
    );
  }

  if (error.length > 0) {
    return (
      <ErrorScreen error={error} />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignIn authorizationStatus={authorizationStatus} />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          authorizationStatus={authorizationStatus}
          render={() => <MyList films={films} />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.FILM}>
          <Film
            films={films}
            comments={comments}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.ADD_REVIEW}
          authorizationStatus={authorizationStatus}
          render={() => <AddReview films={films} />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.PLAYER}>
          <Player films={films} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default connect(mapStateToProps)(App);
