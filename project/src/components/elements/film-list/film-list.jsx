import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';
import filmProp from '../../pages/film/film.prop';
import {connect} from 'react-redux';
import { FILMS_PER_STEP } from '../../../const';

const mapStateToProps = (state) => ({
  filmList: state.filmList,
  // currentFilmListLenght: state.currentFilmListLenght,
});

FilmList.propTypes = {
  filmList: PropTypes.arrayOf(filmProp),
  // currentFilmListLenght: PropTypes.number.isRequired,
};

export function FilmList({filmList}) {
  return (
    <div className="catalog__films-list">
      {filmList.length !== 0
        ? filmList.slice(0, FILMS_PER_STEP).map((film) => <FilmCard key={film.id} film={film} />)
        : <p>Sorry, there is no films of that genre :(</p>}
    </div>
  );
}

export default connect(mapStateToProps)(FilmList);
