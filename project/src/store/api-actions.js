import {APIRoute, AppRoute, AuthorizationStatus, ResponseCode} from '../const';
import {adaptFilmToClient} from '../services/adaptors';
import browserHistory from '../browser-history';
import {
  loadFavoriteFilms,
  loadFilmById,
  loadFilms,
  loadPromo,
  loadReviews,
  loadSimilarFilms,
  makeLogout,
  requireAuthorization,
  setFilmResponce
} from './actions';

function adaptFilms(films) {
  return films.map((film) => adaptFilmToClient(film));
}

// function getOnErrorDispatch(err, dispatch) {
//   switch (err.status) {
//     case ResponseCode.UNAUTHORIZED:
//       dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
//       break;
//     case ResponseCode.BAD_REQUEST:
//       dispatch(setBadRequest(true));
//       break;
//     case ResponseCode.NOT_FOUND:
//       browserHistory.push(AppRoute.NOT_FOUND);
//       break;
//     default:
//       dispatch(setUnexpectedError(true));
//       break;
//   }
// }

// === Main ===
export const fetchFilmList = () => async (dispatch, _getState, api) => {
  try {
    const response = await api.get(APIRoute.FILMS);

    if (response.status === ResponseCode.OK) {
      const films = adaptFilms(response.data);
      dispatch(loadFilms(films));
    }
  } catch {
    new Error();
  }
};

export const fetchPromoFilm = () => async (dispatch, _getState, api) => {
  try {
    const response = await api.get(APIRoute.PROMO);

    if (response.status === ResponseCode.OK) {
      dispatch(loadPromo(adaptFilmToClient(response.data)));
    }
  } catch {
    new Error();
  }
};


// === My List ===
export const fetchFavoriteFilms = () => async (dispatch, _getState, api) => {
  try {
    const response = await api.get(APIRoute.FAVORITE);

    if (response.status === ResponseCode.OK) {
      const favoriteFilms = adaptFilms(response.data);
      dispatch(loadFavoriteFilms(favoriteFilms));
    }
  } catch {
    new Error();
  }
};

// === User Data ===
export const checkAuth = () => async (dispatch, _getState, api) => {
  try {
    const response = await api.get(APIRoute.LOGIN);

    if (response.status === ResponseCode.OK) {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    }
  } catch {
    new Error();
  }
};

export const login = ({email, password}) => async (dispatch, _getState, api) => {
  try {
    const response = await api.post(APIRoute.LOGIN, {email, password});

    if (response.status === ResponseCode.OK) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('avatar', response.data.avatar_url);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      browserHistory.push(AppRoute.MAIN);
    }
  } catch {
    new Error();
  }
};

export const logout = () => async (dispatch, _getState, api) => {
  try {
    await api.delete(APIRoute.LOGOUT);
    localStorage.removeItem('token');
    localStorage.removeItem('avatar');
    dispatch(makeLogout());
  } catch {
    new Error();
  }
};

// === Film Data ===
export const fetchFilmById = (filmId) => async (dispatch, _getState, api) => {
  try {
    const response = await api.get(`${APIRoute.FILMS}/${filmId}`);

    if (response.status === ResponseCode.OK) {
      dispatch(loadFilmById(adaptFilmToClient(response.data)));
    }

    dispatch(setFilmResponce(true));
  } catch {
    new Error();
  }
};

export const fetchSimilarFilms = (filmId) => async (dispatch, _getState, api) => {
  try {
    const response = await api.get(`${APIRoute.FILMS}/${filmId}${APIRoute.SIMILAR}`);

    if (response.status === ResponseCode.OK) {
      const similarFilms = adaptFilms(response.data);
      const filteredFilms = similarFilms.filter((film) => film.id !== +filmId);
      dispatch(loadSimilarFilms(filteredFilms));
    }
  } catch {
    new Error();
  }
};

export const fetchReviews = (filmId) => async (dispatch, _getState, api) => {
  try {
    const response = await api.get(`${APIRoute.REVIEWS}/${filmId}`);

    if (response.status === ResponseCode.OK) {
      dispatch(loadReviews(response.data));
    }
  } catch {
    new Error();
  }
};

export const postComment = (filmId, {rating, comment}) => async (dispatch, _getState, api) => {
  try {
    const response = await api.post(`${APIRoute.REVIEWS}/${filmId}`, {rating, comment});

    if (response.status === ResponseCode.OK) {
      browserHistory.goBack();
    }
  } catch {
    new Error();
  }
};
