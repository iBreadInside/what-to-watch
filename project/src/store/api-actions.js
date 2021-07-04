import {ActionCreator} from './action';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {adaptToClient} from '../services/adaptors';

export const fetchFilmList = () => async (dispatch, _getState, api) => {
  try {
    const response = await api.get(APIRoute.FILMS);

    if (response.status === 200) {
      const films = response.data.map((film) => adaptToClient(film));
      dispatch(ActionCreator.loadFilms(films));
    }
  } catch (error) {
    dispatch(ActionCreator.error(error));
  }
};

export const checkAuth = () => async (dispatch, _getState, api) => {
  try {
    const response = await api.get(APIRoute.LOGIN);

    if (response.status === 200) {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    }
  } catch (error) {
    dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
  }
};

export const login = ({email, password}) => async (dispatch, _getState, api) => {
  const response = await api.post(APIRoute.LOGIN, {email, password});

  if (response.status === 200) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('avatar', response.data.avatar_url);
    dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN));
  }
};

export const logout = () => async (dispatch, _getState, api) => {
  await api.delete(APIRoute.LOGOUT);
  localStorage.removeItem('token');
  dispatch(ActionCreator.logout());
};

// export const checkAuth = () => (dispatch, _getState, api) => (
//   api.get(APIRoute.LOGIN)
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
//     .catch(() => {})
// );

// export const login = ({email, password}) => (dispatch, _getState, api) => (
//   api.post(APIRoute.LOGIN, {email, password})
//     .then(({data}) => {
//       localStorage.setItem('token', data.token);
//       localStorage.setItem('avatar', data.avatar_url);
//     })
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
//     .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
// );

// export const logout = () => (dispatch, _getState, api) => (
//   api.delete(APIRoute.LOGOUT)
//     .then(() => localStorage.removeItem('token'))
//     .then(() => dispatch(ActionCreator.logout()))
// );

// export const fetchFilmList = () => (dispatch, _getState, api) => (
//   api.get(APIRoute.FILMS)
//     .then(({data}) => data.map((film) => adaptToClient(film)))
//     .then((films) => dispatch(ActionCreator.loadFilms(films)))
//     .catch((error) => dispatch(ActionCreator.error(error.message)))
// );

// export const fetchFilmList = () => (dispatch, _getState, api) => (
//   api.get(APIRoute.FILMS)
//     .then(({data}) => dispatch(ActionCreator.loadFilms(adaptToClient(data))))
//     .catch((error) => dispatch(ActionCreator.error(error.message)))
// );

// export const fetchPromo = () => (dispatch, _getState, api) => (
//   api.get(APIRoute.PROMO)
//     .then(({data}) => dispatch(ActionCreator.loadPromo(adaptDataToFilm(data))))
//     .catch((error) => dispatch(ActionCreator.error(error.message)))
// );

// export const fetchFavoriteFilmList = () => (dispatch, _getState, api) => (
//   api.get(APIRoute.FAVORITE_FILMS)
//     .then(({data}) => dispatch(ActionCreator.loadFavoriteFilms(adaptDataToFilms(data))))
//     .catch((error) => dispatch(ActionCreator.error(error.message)))
// );

// export const fetchReviewList = () => (dispatch, _getState, api) => (
//   api.get(APIRoute.REVIEWS)
//     .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
//     .catch((error) => dispatch(ActionCreator.error(error.message)))
// );
