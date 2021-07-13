import {createReducer} from '@reduxjs/toolkit';
import {
  setFilmResponce,
  deleteCurrentFilmData,
  loadFilmById,
  loadReviews,
  loadSimilarFilms
} from '../actions';

const initialState = {
  currentFilm: null,
  isCurrentFilmResponsed: false,
  similarFilms: [],
  currentReviews: [],
};

export const filmData = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(loadFilmById, (state, action) => {
        state.currentFilm = action.payload;
      })
      .addCase(setFilmResponce, (state, action) => {
        state.isCurrentFilmResponsed = action.payload;
      })
      .addCase(loadSimilarFilms, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(loadReviews, (state, action) => {
        state.currentReviews = action.payload;
      })
      .addCase(deleteCurrentFilmData, (state) => {
        state.currentFilm = null;
        state.isCurrentFilmResponsed = false;
        state.similarFilms = [];
        state.currentReviews = [];
      });
  },
);
