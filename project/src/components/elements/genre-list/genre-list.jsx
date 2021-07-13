import React from 'react';
import {connect, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {INITIAL_GENRE} from '../../../const';
import {setGenre} from '../../../store/actions';
import {getAllFilms, getCurrentGenre} from '../../../store/main/selectors';

const getGenres = (films) => {
  const allGenres = films.map((film) => film.genre);
  const uniqueGenres = [...new Set(allGenres)];

  return uniqueGenres;
};

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(setGenre(genre));
  },
});

GenreList.propTypes = {
  onGenreChange: PropTypes.func.isRequired,
};

export function GenreList({onGenreChange}) {
  const filmList = useSelector(getAllFilms);
  const currentGenre = useSelector(getCurrentGenre);
  const genres = [INITIAL_GENRE, ...getGenres(filmList)];

  function renderGenreItem(genreName) {
    function handleGenreChange(evt) {
      evt.preventDefault();
      onGenreChange(genreName);
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

export default connect(null, mapDispatchToProps)(GenreList);
