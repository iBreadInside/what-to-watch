// import {FILMS_PER_STEP} from '../const';

import {FilmsShown} from '../const';

export const ActionType = {
  SET_FILTER: 'set-filter',
  SET_GENRE: 'set-genre',
  SHOW_MORE_FILMS: 'show-more',
  RESET_PAGE: 'reset-page',
  GET_SIMILAR_FILMS: 'film/get=similar-films',
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
  getSimilarFilms: () => ({
    type: ActionType.GET_SIMILAR_FILMS,
    payload: FilmsShown.SIMILAR,
  }),
  resetCount: () => ({
    type: ActionType.RESET_PAGE,
  }),
};
