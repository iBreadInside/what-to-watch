import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {INITIAL_GENRE} from '../../../const';
import {ActionCreator} from '../../../store/action';
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

  return (
    <ul className="catalog__genres-list">

      {genres.map((genre) => (
        <li
          className={`catalog__genres-item ${currentGenre === genre ? 'catalog__genres-item--active' : ''}`}
          key={genre}
        >
          <a
            href="link/href"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              onGenreChange(genre);
            }}
          >
            {genre}
          </a>
        </li>
      ))}

    </ul>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
