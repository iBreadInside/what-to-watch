import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {INITIAL_GENRE} from '../../../const';
import {setGenre} from '../../../store/actions';
import {getAllFilms, getCurrentGenre} from '../../../store/main/selectors';

const MAX_GENRES = 9;

const getGenres = (films) => {
  const allGenres = films.map((film) => film.genre);
  const uniqueGenres = [...new Set(allGenres)].slice(0, MAX_GENRES);

  return uniqueGenres;
};

export default function GenreList() {
  const dispatch = useDispatch();
  const filmList = useSelector(getAllFilms);
  const currentGenre = useSelector(getCurrentGenre);
  const genres = [INITIAL_GENRE, ...getGenres(filmList)];

  function renderGenreItem(genreName) {
    function handleGenreChange(evt) {
      evt.preventDefault();
      dispatch(setGenre(genreName));
    }

    return (
      <li
        className={`catalog__genres-item ${currentGenre === genreName ? 'catalog__genres-item--active' : ''}`}
        key={genreName}
      >
        <a
          href="link/href"
          className="catalog__genres-link"
          onClick={handleGenreChange}
        >
          {genreName}
        </a>
      </li>
    );
  }

  return (
    <ul className="catalog__genres-list">
      {genres.map(renderGenreItem)}
    </ul>
  );
}

