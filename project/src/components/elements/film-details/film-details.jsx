import React from 'react';
import filmProp from '../../pages/film/film.prop';

function getHours(time) {
  return Math.trunc(time / 60);
}

function getMinutes(time) {
  return time % 60;
}

Details.propTypes = {
  film: filmProp,
};

export default function Details({film}) {
  const {
    director,
    starring,
    runtime,
    genre,
    released,
  } = film;

  const runtimeText = runtime >= 60
    ? `${getHours(runtime)}h ${getMinutes(runtime)}m`
    : `${runtime}m`;

  const starringText = starring.join(', :').split(' :').map((actor, index) =>
    (
      <React.Fragment key={actor}>
        {actor}{index !== starring.length - 1 && (<br/>)}
      </React.Fragment>
    ));

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {starringText}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{runtimeText}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}
