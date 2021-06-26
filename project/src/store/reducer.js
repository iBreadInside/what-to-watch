import {FilmsShown, FilterType, Genre} from '../const';
import comments from '../mocks/comments';
import films from '../mocks/films';
import {ActionType} from './action';

const initialState = {
  genre: Genre.ALL_GENRES,
  filterType: FilterType.ALL_GENRES,
  allFilmList: films,
  comments: comments,
  promo: films[0],
  filmsCount: Math.min(FilmsShown.MAIN, films.length),
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
    case ActionType.SHOW_MORE_FILMS: {
      return {
        ...state,
        filmsCount: Math.min(state.allFilmList.length, state.filmsCount + action.payload),
      };
    }
    case ActionType.GET_SIMILAR_FILMS: {
      return {
        ...state,
        filmsCount: action.payload,
      };
    }
    case ActionType.RESET_PAGE: {
      return {
        ...state,
        filmsCount: initialState.filmsCount,
        genre: initialState.genre,
        filterType: initialState.filterType,
      };
    }
    default:
      return state;
  }
}
