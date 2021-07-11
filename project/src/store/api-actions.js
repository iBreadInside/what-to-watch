import {ActionCreator} from './actions';
import {APIRoute, AppRoute, AuthorizationStatus, ResponseCode} from '../const';
import {adaptFilmToClient} from '../services/adaptors';
import browserHistory from '../browser-history';

function adaptFilms(films) {
  return films.map((film) => adaptFilmToClient(film));
}

export const fetchFilmList = () => async (dispatch, _getState, api) => {
  try {
    const response = await api.get(APIRoute.FILMS);

    if (response.status === ResponseCode.OK) {
      const films = adaptFilms(response.data);
      dispatch(ActionCreator.loadFilms(films));
    }
  } catch (error) {
    dispatch(ActionCreator.showError(error.message));
  }
};

export const fetchPromoFilm = () => async (dispatch, _getState, api) => {
  try {
    const response = await api.get(APIRoute.PROMO);

    if (response.status === ResponseCode.OK) {
      dispatch(ActionCreator.loadPromo(adaptFilmToClient(response.data)));
    }
  } catch (error) {
    dispatch(ActionCreator.showError(error.message));
  }
};

export const fetchFavoriteFilms = () => async (dispatch, _getState, api) => {
  try {
    const response = await api.get(APIRoute.FAVORITE);

    if (response.status === ResponseCode.OK) {
      const favoriteFilms = adaptFilms(response.data);
      dispatch(ActionCreator.loadFavorite(favoriteFilms));
    }
  } catch (error) {
    dispatch(ActionCreator.showError(error.message));
  }
};

export const checkAuth = () => async (dispatch, _getState, api) => {
  try {
    const response = await api.get(APIRoute.LOGIN);

    if (response.status === ResponseCode.OK) {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    }
  } catch (error) {
    if (error.response.status !== ResponseCode.UNAUTHORIZED) {
      dispatch(ActionCreator.showError(error.message));
    }
  }
};

export const login = ({email, password}) => async (dispatch, _getState, api) => {
  try {
    const response = await api.post(APIRoute.LOGIN, {email, password});

    if (response.status === ResponseCode.OK) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('avatar', response.data.avatar_url);
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      browserHistory.push(AppRoute.MAIN);
    }
  } catch (error) {
    dispatch(ActionCreator.showError(error));
  }
};

export const logout = () => async (dispatch, _getState, api) => {
  try {
    await api.delete(APIRoute.LOGOUT);
    localStorage.removeItem('token');
    localStorage.removeItem('avatar');
    dispatch(ActionCreator.logout());
  } catch (error) {
    dispatch(ActionCreator.showError(error.message));
  }
};

export const fetchFilmById = (filmId) => async (dispatch, _getState, api) => {
  try {
    const response = await api.get(`${APIRoute.FILMS}/${filmId}`);

    if (response.status === ResponseCode.OK) {
      dispatch(ActionCreator.loadFilmById(adaptFilmToClient(response.data)));
    }

    dispatch(ActionCreator.checkFilmResponce(true));
  } catch (error) {
    dispatch(ActionCreator.showError(error.message));
  }
};

export const fetchSimilarFilms = (filmId) => async (dispatch, _getState, api) => {
  try {
    const response = await api.get(`${APIRoute.FILMS}/${filmId}${APIRoute.SIMILAR}`);

    if (response.status === ResponseCode.OK) {
      const similarFilms = adaptFilms(response.data);
      const filteredFilms = similarFilms.filter((film) => film.id !== +filmId);
      dispatch(ActionCreator.loadSimilarFilms(filteredFilms));
    }
  } catch (error) {
    dispatch(ActionCreator.showError(error.message));
  }
};

// export const fetchReviewList = () => (dispatch, _getState, api) => (
//   api.get(APIRoute.REVIEWS)
//     .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
//     .catch((error) => dispatch(ActionCreator.showError(error.message)))
// );
