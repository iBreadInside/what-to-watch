import {FilterType, Genre} from '../const';
import comments from '../mocks/comments';
import films from '../mocks/films';
import {ActionType} from './action';

const initialState = {
  genre: Genre.ALL_GENRES,
  filterType: FilterType.ALL_GENRES,
  allFilmList: films,
  comments: comments,
  promo: films[0],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.SET_FILTER:
      return {
        ...state,
        filterType: action.payload,
      };
    case ActionType.SET_GENRE:
      return {
        ...state,
        genre: action.payload,
        filmsCount: initialState.filmsCount,
      };
    case ActionType.RESET_PAGE: {
      return {
        ...state,
        genre: initialState.genre,
        filterType: initialState.filterType,
      };
    }
    default:
      return state;
  }
}
