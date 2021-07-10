export const ActionType = {
  SET_GENRE: 'main/setGenre',
  RESET_PAGE: 'main/resetPage',
  LOAD_FILMS: 'data/loadFilms',
  LOAD_PROMO: 'data/loadPromo',
  LOAD_FILM_BY_ID: 'data/loadFilmById',
  DELETE_CURRENT_FILM: 'data/deleteCurrentFilm',
  CHECK_FILM_RESPONSE: 'data/checkFilmResponse',
  LOAD_FAVORITE: 'data/loadFavorites',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  SHOW_ERROR: 'showError',
};

export const ActionCreator = {
  setGenre: (genre) => ({
    type: ActionType.SET_GENRE,
    payload: genre,
  }),
  resetPage: () => ({
    type: ActionType.RESET_PAGE,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadPromo: (film) => ({
    type: ActionType.LOAD_PROMO,
    payload: film,
  }),
  loadFilmById: (film) => ({
    type: ActionType.LOAD_FILM_BY_ID,
    payload: film,
  }),
  deleteCurrentFilm: () => ({
    type: ActionType.DELETE_CURRENT_FILM,
  }),
  checkFilmResponce: (bool) => ({
    type: ActionType.CHECK_FILM_RESPONSE,
    payload: bool,
  }),
  loadFavorite: (films) => ({
    type: ActionType.LOAD_FAVORITE,
    payload: films,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  showError: (err) => ({
    type: ActionType.SHOW_ERROR,
    payload: err,
  }),
};
