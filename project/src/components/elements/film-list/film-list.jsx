import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';
import filmProp from '../../pages/film/film.prop';

FilmList.propTypes = {
  films: PropTypes.arrayOf(filmProp),
};

export default function FilmList({films}) {
  return (
    <div className="catalog__films-list">
      {films.length !== 0
        ? films.map((film) => <FilmCard key={film.id} film={film} />)
        : <p>Sorry, there is no films of that genre :(</p>}
    </div>
  );
}
