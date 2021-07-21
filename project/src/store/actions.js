import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SET_GENRE: 'main/setGenre',
  RESET_PAGE: 'main/resetPage',
  LOAD_FILMS: 'main/loadFilms',
  LOAD_PROMO: 'main/loadPromo',

  LOAD_FILM_BY_ID: 'film/loadFilmById',
  LOAD_SIMILAR_FILMS: 'film/loadSimilar',
  LOAD_REVIEWS: 'film/loadReviews',
  DELETE_CURRENT_FILM_DATA: 'film/deleteCurrentFilm',
  CHECK_FILM_RESPONSE: 'film/checkFilmResponse',
  SET_REVIEW_SENDING_STATUS: 'film/sendReviewSendingStatus',

  LOAD_FAVORITE: 'myList/loadFavorites',
  TOGGLE_FAVORITE_STATUS: 'myList/toggleStatus',

  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',

  SET_BAD_REQUEST: 'error/setBadRequest',
  SET_UNEXPECTED_ERROR: 'error/setError',
};

// === Main Page ===
export const loadFilms = createAction(
  ActionType.LOAD_FILMS,
  (fllms) => ({
    payload: fllms,
  }),
);

export const loadPromo = createAction(
  ActionType.LOAD_PROMO,
  (promo) => ({
    payload: promo,
  }),
);

export const setGenre = createAction(
  ActionType.SET_GENRE,
  (genre) => ({
    payload: genre,
  }),
);

export const resetMainPage = createAction(
  ActionType.RESET_PAGE,
);

// === User Data ===
export const requireAuthorization = createAction(
  ActionType.REQUIRED_AUTHORIZATION,
  (status) => ({
    payload: status,
  }),
);

export const makeLogout = createAction(
  ActionType.LOGOUT,
);

// === Film Page ===
export const loadFilmById = createAction(
  ActionType.LOAD_FILM_BY_ID,
  (film) => ({
    payload: film,
  }),
);

export const loadSimilarFilms = createAction(
  ActionType.LOAD_SIMILAR_FILMS,
  (similarFilms) => ({
    payload: similarFilms,
  }),
);

export const loadReviews = createAction(
  ActionType.LOAD_REVIEWS,
  (reviews) => ({
    payload: reviews,
  }),
);

export const setFilmResponce = createAction(
  ActionType.CHECK_FILM_RESPONSE,
  (bool) => ({
    payload: bool,
  }),
);

export const deleteCurrentFilmData = createAction(
  ActionType.DELETE_CURRENT_FILM_DATA,
);

export const setReviewSendingStatus = createAction(
  ActionType.SET_REVIEW_SENDING_STATUS,
  (bool) => ({
    payload: bool,
  }),
);

// === My List Page ===
export const loadFavoriteFilms = createAction(
  ActionType.LOAD_FAVORITE,
  (favoriteFilms) => ({
    payload: favoriteFilms,
  }),
);

// === Errors ===
export const setBadRequest = createAction(
  ActionType.SET_BAD_REQUEST,
  (bool) => ({
    payload: bool,
  }),
);

export const setUnexpectedError = createAction(
  ActionType.SET_UNEXPECTED_ERROR,
  (bool) => ({
    payload: bool,
  }),
);
