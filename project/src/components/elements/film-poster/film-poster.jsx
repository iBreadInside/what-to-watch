import React from 'react';
import PropTypes from 'prop-types';
import {PosterSize, PosterType} from '../../../const';
import filmProp from '../../pages/film/film.prop';

FilmPoster.propTypes = {
  film: filmProp,
  posterType: PropTypes.string,
};

export function FilmPoster({film, posterType}) {

  function getAdditionalClass() {
    switch (posterType) {
      case PosterType.BIG:
        return 'film-card__poster--big';
      case PosterType.SMALL:
        return 'film-card__poster--small';
      default:
        return '';
    }
  }
  return (
    <div className={`film-card__poster ${getAdditionalClass()}`}>
      <img
        src={film.posterImage}
        alt={`${film.name} poster`}
        width={PosterSize.WIDTH}
        height={PosterSize.HEIGHT}
      />
    </div>
  );
}
