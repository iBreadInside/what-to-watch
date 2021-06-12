import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';
import filmProp from '../../pages/film/film.prop';

FilmList.propTypes = {
  films: PropTypes.arrayOf(filmProp),
};

export default function FilmList({films}) {
  const [, setActiveFilm] = useState({});

  const activeFilmHandler = (film) => {
    setActiveFilm(film);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.id} film={film} setActiveFilm={activeFilmHandler} />)}
    </div>
  );
}
