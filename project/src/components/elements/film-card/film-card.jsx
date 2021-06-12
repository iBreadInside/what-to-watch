import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const';
import filmProp from '../../pages/film/film.prop';

FilmCard.propTypes = {
  film: filmProp,
  setActiveFilm: PropTypes.func.isRequired,
};

export default function FilmCard({film, setActiveFilm}) {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setActiveFilm(film)}
      onMouseLeave={() => setActiveFilm({})}
    >
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.FILM}>{film.name}</Link>
      </h3>
    </article>
  );
}
