import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';
import ShowMoreBtn from '../show-more-btn/show-more-btn';
import filmProp from '../../pages/film/film.prop';
import {connect} from 'react-redux';
import {Genre} from '../../../const';
import {useParams} from 'react-router-dom';

const mapStateToProps = (state) => ({
  allFilmList: state.allFilmList,
  filmsCount: state.filmsCount,
  genre: state.genre,
});

FilmList.propTypes = {
  allFilmList: PropTypes.arrayOf(filmProp),
  filmsCount: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  isSimilar: PropTypes.bool.isRequired,
};

export function FilmList({allFilmList, genre, filmsCount, isSimilar}) {
  const params = useParams();
  let filteredFilms = null;

  if (isSimilar) {
    filteredFilms = allFilmList.filter((film) => film.genre === genre && film.id !== +params.id);
  } else if (genre === Genre.ALL_GENRES) {
    filteredFilms = allFilmList;
  } else {
    filteredFilms = allFilmList.filter((film) => film.genre === genre);
  }

  const shownFilms = (filteredFilms !== 0)
    ? filteredFilms.slice(0, Math.min(filmsCount))
    : null;

  return (
    <>
      <div className="catalog__films-list">
        {filteredFilms.length !== 0
          ? shownFilms.map((film) => <FilmCard key={film.id} film={film} />)
          : <p>Sorry, there is no films of that genre :(</p>}
      </div>

      {filteredFilms.length > shownFilms.length && <ShowMoreBtn />}
    </>
  );
}

export default connect(mapStateToProps)(FilmList);
