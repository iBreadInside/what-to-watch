import {ActionCreator} from './action';
import {APIRoute} from '../const';
import {adaptToClient} from '../services/adaptors';

export const fetchFilmList = () => async (dispatch, _getState, api) => {
  const {data} = await api.get(APIRoute.FILMS);
  const films = data.map((film) => adaptToClient(film));
  dispatch(ActionCreator.loadFilms(films));
};

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

// export const checkAuth = () => (dispatch, _getState, api) => (
//   api.get(APIRoute.LOGIN)
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
//     .catch(() => {})
// );

// export const login = ({login: email, password}) => (dispatch, _getState, api) => (
//   api.post(APIRoute.LOGIN, {email, password})
//     .then(({data}) => localStorage.setItem('token', data.token))
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
// );

// export const logout = () => (dispatch, _getState, api) => (
//   api.delete(APIRoute.LOGOUT)
//     .then(() => localStorage.removeItem('token'))
//     .then(() => dispatch(ActionCreator.LOGOUT))
// );
