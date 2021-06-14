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

App.propTypes = {
  promo: filmProp,
  films: PropTypes.arrayOf(filmProp),
};

export default function App({promo, films}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
            promo={promo}
            films={films}
          />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyList films={films} />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <Film films={films} />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReview films={films} />
        </Route>
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
