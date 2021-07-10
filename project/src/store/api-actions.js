import {ActionCreator} from './action';
import {APIRoute, AppRoute, AuthorizationStatus, ResponseCode} from '../const';
import {adaptFilmToClient} from '../services/adaptors';
import browserHistory from '../browser-history';

export const fetchFilmList = () => async (dispatch, _getState, api) => {
  try {
    const response = await api.get(APIRoute.FILMS);

    if (response.status === ResponseCode.OK) {
      const films = response.data.map((film) => adaptFilmToClient(film));
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
      const films = response.data.map((film) => adaptFilmToClient(film));
      dispatch(ActionCreator.loadFavorite(films));
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
    dispatch(ActionCreator.showError(error));
  }
};

// export const fetchReviewList = () => (dispatch, _getState, api) => (
//   api.get(APIRoute.REVIEWS)
//     .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
//     .catch((error) => dispatch(ActionCreator.showError(error.message)))
// );
