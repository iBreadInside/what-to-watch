import {AuthorizationStatus, FilterType, Genre} from '../const';
import comments from '../mocks/comments';
import films from '../mocks/films';
import {ActionType} from './action';

const initialState = {
  genre: Genre.ALL_GENRES,
  filterType: FilterType.ALL_GENRES,
  allFilmList: [],
  isFilmsLoaded: false,
  comments: comments,
  promo: films[0],
  isPromoLoaded: false,
  error: '',
  authorizationStatus: AuthorizationStatus.UNKNOWN,
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
    case ActionType.RESET_PAGE:
      return {
        ...state,
        genre: initialState.genre,
        filterType: initialState.filterType,
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        allFilmList: action.payload,
        isFilmsLoaded: true,
      };
    case ActionType.ERROR:
      return {
        ...state,
        isFilmsLoaded: true,
        error: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
}
