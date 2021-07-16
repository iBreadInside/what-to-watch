import {NameSpace} from '../root-reducer';

export const getAllFilms = (state) => state[NameSpace.MAIN].allFilmList;
export const getPromoFilm = (state) => state[NameSpace.MAIN].promoFilm;
export const getCurrentGenre = (state) => state[NameSpace.MAIN].currentGenre;
export const getIsfilmsLoaded = (state) => state[NameSpace.MAIN].isFilmsLoaded;
export const getIsPromoLoaded = (state) => state[NameSpace.MAIN].isPromoLoaded;
