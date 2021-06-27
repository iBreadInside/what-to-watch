import {Genre} from './const';

export function getReviewRating(rating) {
  return Number.isInteger(rating)
    ? `${rating},0`
    : rating.toString().split('.').join();
}

export function getFilteredFilms(films, genre) {
  if (genre === Genre.ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
}
