import {FilmsShown} from '../const';

export const ActionType = {
  SET_FILTER: 'set-filter',
  SET_GENRE: 'set-genre',
  SHOW_MORE_FILMS: 'show-more',
  RESET_PAGE: 'reset-page',
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
  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_FILMS,
    payload: FilmsShown.MAIN,
  }),
  resetPage: () => ({
    type: ActionType.RESET_PAGE,
  }),
};
