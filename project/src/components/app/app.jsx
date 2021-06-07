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

App.propTypes = {
  promo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
  }),
};

export default function App({promo}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main promo={promo} />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyList />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <Film promo={promo} />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReview promo={promo} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
