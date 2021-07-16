import React from 'react';
import PropTypes from 'prop-types';
import {PosterType} from '../../../const';
import filmProp from '../../pages/film/film.prop';

const PosterSize = {
  WIDTH: '218',
  HEIGHT: '327',
};

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
