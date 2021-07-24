import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import filmProp from '../../pages/film/film.prop';
import VideoPlayer from '../../elements/video-player/video-player';
import {APIRoute} from '../../../const';

FilmCard.propTypes = {
  film: filmProp,
};

export default function FilmCard({film}) {
  const [isActive, setActive] = useState(false);

  function handleFilmCardEnter() {
    setActive(true);
  }

  function handleFilmCardLeave() {
    setActive(false);
  }

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleFilmCardEnter}
      onMouseLeave={handleFilmCardLeave}
    >
      <Link
        to={`${APIRoute.FILMS}/${film.id}`}
      >
        <VideoPlayer film={film} isActive={isActive} />
      </Link>

      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`${APIRoute.FILMS}/${film.id}`}
        >
          {film.name}
        </Link>
      </h3>
    </article>
  );
}
