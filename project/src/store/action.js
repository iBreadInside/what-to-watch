export const ActionType = {
  SET_FILTER: 'set-filter',
  SET_GENRE: 'set-genre',
  RESET_PAGE: 'reset-page',
  LOAD_FILMS: 'data/load-films',
  ERROR: 'data/error',
  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
};

export const ActionCreator = {
  setFilter: (FilterType) => ({
    type: ActionType.SET_FILTER,
    payload: FilterType,
  }),
  setGenre: (Genre) => ({
    type: ActionType.SET_GENRE,
    payload: Genre,
  }),
  resetPage: () => ({
    type: ActionType.RESET_PAGE,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  error: (error) => ({
    type: ActionType.ERROR,
    payload: error,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
