import {AuthorizationStatus, INITIAL_GENRE} from '../const';
import comments from '../mocks/comments';
import {ActionType} from './actions';

const initialState = {
  currentGenre: INITIAL_GENRE,
  allFilmList: [],
  favoriteFilms: [],
  promoFilm: null,
  currentFilm: null,
  isFilmsLoaded: false,
  isCurrentFilmResponsed: false,
  isFavoriteLoaded: false,
  isPromoLoaded: false,
  comments: comments,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  error: '',
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        allFilmList: action.payload,
        isFilmsLoaded: true,
      };
    case ActionType.LOAD_PROMO:
      return {
        ...state,
        promoFilm: action.payload,
        isPromoLoaded: true,
      };
    case ActionType.LOAD_FILM_BY_ID:
      return {
        ...state,
        currentFilm: action.payload,
      };
    case ActionType.CHECK_FILM_RESPONSE:
      return {
        ...state,
        isCurrentFilmResponsed: action.payload,
      };
    case ActionType.DELETE_CURRENT_FILM:
      return {
        ...state,
        currentFilm: null,
        isCurrentFilmResponsed: false,
      };
    case ActionType.LOAD_FAVORITE:
      return {
        ...state,
        favoriteFilms: action.payload,
        isFavoriteLoaded: true,
      };
    case ActionType.SET_GENRE:
      return {
        ...state,
        currentGenre: action.payload,
      };
    case ActionType.RESET_PAGE:
      return {
        ...state,
        currentGenre: INITIAL_GENRE,
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
    case ActionType.SHOW_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
