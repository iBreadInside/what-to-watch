import FilmCard from './components/elements/film-card/film-card';
import {FilmListLenght} from './const';

export const filmCards = new Array(FilmListLenght.MAIN).fill().map(FilmCard);
