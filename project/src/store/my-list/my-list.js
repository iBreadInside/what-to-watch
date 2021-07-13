import {createReducer} from '@reduxjs/toolkit';
import {loadFavoriteFilms} from '../actions';

const initialState = {
  favoriteFilms: [],
  isFavoriteFilmsLoaded: false,
};

export const myListData = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(loadFavoriteFilms, (state, action) => {
        state.favoriteFilms = action.payload;
        state.isFavoriteFilmsLoaded = true;
      });
  },
);
