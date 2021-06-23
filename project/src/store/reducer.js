import {FilterType} from '../const';
import films from '../mocks/films';
import {ActionType} from './action';

const initialState = {
  filterType: FilterType.ALL_GENRES,
  filmList: films,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.SET_FILTER:
      return {
        ...state,
        filterType: action.payload,
        filmList: (action.payload === initialState.filterType)
          ? initialState.filmList
          : initialState.filmList.filter((film) => film.genre === action.payload),
      };
    default:
      return state;
  }
}
