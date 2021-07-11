import {AuthorizationStatus, INITIAL_GENRE} from '../const';
import {ActionType} from './actions';

const initialState = {
  currentGenre: INITIAL_GENRE,
  allFilmList: [],
  isFilmsLoaded: false,
  favoriteFilms: [],
  isFavoriteLoaded: false,
  promoFilm: null,
  isPromoLoaded: false,
  currentFilm: null,
  similarFilms: [],
  currentReviews: [],
  isPostReviewError: false,
  isCurrentFilmResponsed: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  error: null,
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
    case ActionType.LOAD_SIMILAR_FILMS:
      return {
        ...state,
        similarFilms: action.payload,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        currentReviews: action.payload,
      };
    case ActionType.SHOW_REVIEW_ERROR:
      return {
        ...state,
        isPostReviewError: action.payload,
      };
    case ActionType.DELETE_CURRENT_FILM_DATA:
      return {
        ...state,
        currentFilm: null,
        similarFilms: [],
        currentReviews: [],
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
