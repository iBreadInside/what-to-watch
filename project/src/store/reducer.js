import {FilterType, Genre} from '../const';
import films from '../mocks/films';
import {ActionType} from './action';

const initialState = {
  genre: Genre.ALL_GENRES,
  filterType: FilterType.ALL_GENRES,
  filmList: films,
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
        filmList: (action.payload === initialState.genre)
          ? initialState.filmList
          : initialState.filmList.filter((film) => film.genre === action.payload),
      };
    default:
      return state;
  }
}
