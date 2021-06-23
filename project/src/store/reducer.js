import {Genre} from '../const';
import films from '../mocks/films';
import {ActionType} from './action';

const initialState = {
  genre: Genre.ALL_GENRES,
  filmList: films,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: state.genre = action.payload,
      };
    case ActionType.GET_FILM_BY_GENRE:
      return {
        ...state,
        filmList: state.filmList = action.payload,
      };
    default:
      return state;
  }
}
