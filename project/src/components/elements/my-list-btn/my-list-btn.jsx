import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import filmProp from '../../pages/film/film.prop';
import {toggleFavorite} from '../../../store/api-actions';
import {getAuthStatus} from '../../../store/user/selectors';
import {useHistory} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../../const';

MyListBtn.propTypes = {
  film: filmProp,
  isPromo: PropTypes.bool,
};

export default function MyListBtn({film, isPromo}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const authStatus = useSelector(getAuthStatus);

  function handleBtn() {
    if (authStatus !== AuthorizationStatus.AUTH) {
      history.push(AppRoute.SIGN_IN);
      return;
    }

    dispatch(toggleFavorite(film.id, isPromo, film.isFavorite ? 0 : 1));
  }

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleBtn}
    >
      {film.isFavorite
        ?
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        :
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>}
      <span>My list</span>
    </button>

  );
}
