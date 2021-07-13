import {NameSpace} from '../root-reducer';

export const getFilm = (state) => state[NameSpace.FILM].currentFilm;
export const getSimilarFilms = (state) => state[NameSpace.FILM].similarFilms;
export const getReviews = (state) => state[NameSpace.FILM].currentReviews;
export const getIsFilmResponce = (state) => state[NameSpace.FILM].isCurrentFilmResponded;
