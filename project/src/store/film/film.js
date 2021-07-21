import {createReducer} from '@reduxjs/toolkit';
import {
  deleteCurrentFilmData,
  loadFilmById,
  loadReviews,
  loadSimilarFilms,
  setReviewSendingStatus
} from '../actions';

const initialState = {
  currentFilm: null,
  isCurrentFilmResponsed: false,
  similarFilms: [],
  currentReviews: [],
  isReviewSending: false,
};

export const filmData = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(loadFilmById, (state, action) => {
        state.currentFilm = action.payload;
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
        state.isBadRequest = false;
        state.similarFilms = [];
        state.currentReviews = [];
      })
      .addCase(setReviewSendingStatus, (state, action) => {
        state.isReviewSending = action.payload;
      });
  },
);
