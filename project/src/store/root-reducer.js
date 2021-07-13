import {combineReducers} from 'redux';
import {errorsData} from './errors/errors';
import {filmData} from './film/film';
import {mainData} from './main/main';
import {myListData} from './my-list/my-list';
import {userData} from './user/user';

export const NameSpace = {
  MAIN: 'MAIN',
  USER: 'USER',
  FILM: 'FILM',
  MY_LIST: 'MY_LIST',
  ERRORS: 'ERRORS',
};

export default combineReducers({
  [NameSpace.MAIN]: mainData,
  [NameSpace.USER]: userData,
  [NameSpace.FILM]: filmData,
  [NameSpace.MY_LIST]: myListData,
  [NameSpace.ERRORS]: errorsData,
});
