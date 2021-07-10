import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {INITIAL_GENRE} from '../../../const';
import {ActionCreator} from '../../../store/actions';
import filmProp from '../../pages/film/film.prop';

const getGenres = (films) => {
  const allGenres = films.map((film) => film.genre);
  const uniqueGenres = [...new Set(allGenres)];

  return uniqueGenres;
};

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
  filmList: state.allFilmList,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(ActionCreator.setGenre(genre));
  },
});

GenreList.propTypes = {
  filmList: PropTypes.arrayOf(filmProp),
  currentGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

export function GenreList({filmList, currentGenre, onGenreChange}) {
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

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
