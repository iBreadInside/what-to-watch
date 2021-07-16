import {INITIAL_GENRE} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
import {loadFilms, loadPromo, resetMainPage, setGenre} from '../actions';

const initialState = {
  currentGenre: INITIAL_GENRE,
  allFilmList: [],
  isFilmsLoaded: false,
  promoFilm: null,
  isPromoLoaded: false,
};

export const mainData = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(loadFilms, (state, action) => {
        state.allFilmList = action.payload;
        state.isFilmsLoaded = true;
      })
      .addCase(loadPromo, (state, action) => {
        state.promoFilm = action.payload;
        state.isPromoLoaded = true;
      })
      .addCase(setGenre, (state, action) => {
        state.currentGenre = action.payload;
      })
      .addCase(resetMainPage, (state) => {
        state.currentGenre = INITIAL_GENRE;
      });
  },
);
