import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const';
import {makeLogout, requireAuthorization} from '../actions';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

export const userData = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(requireAuthorization, (state, action) => {
        state.authorizationStatus = action.payload;
      })
      .addCase(makeLogout, (state) => {
        state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      });
  },
);
