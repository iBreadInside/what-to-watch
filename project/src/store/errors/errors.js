import {createReducer} from '@reduxjs/toolkit';
import { setBadRequest, setUnexpectedError } from '../actions';

const initialState = {
  isBadRequest: false,
  isUnexpectedError: false,
};

export const errorsData = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(setBadRequest, (state, action) => {
        state.isBadRequest = action.payload;
      })
      .addCase(setUnexpectedError, (state, action) => {
        state.isUnexpectedError = action.payload;
      });
  },
);
