import {NameSpace} from '../root-reducer';

export const getIsBadRequest = (state) => state[NameSpace.ERRORS].isBadRequest;
export const getIsUnexpectedError = (state) => state[NameSpace.ERRORS].isUnexpectedError;
