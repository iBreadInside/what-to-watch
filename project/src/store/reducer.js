import {FILMS_PER_STEP, FilterType, Genre} from '../const';
import films from '../mocks/films';
import {ActionType} from './action';

const initialState = {
  genre: Genre.ALL_GENRES,
  filterType: FilterType.ALL_GENRES,
  filmList: films,
  promo: films[0],
  isShowBtn: false,
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
    case ActionType.SHOW_MORE_FILMS: {
      const newCount = state.filmList.length + FILMS_PER_STEP;
      const currentFilmList = state.filmList;

      return {
        ...state,
        count: newCount,
        filmList: state.filmList.slice(0, newCount),
        isShowBtn: currentFilmList.length > newCount,
      };
    }
    default:
      return state;
  }
}
