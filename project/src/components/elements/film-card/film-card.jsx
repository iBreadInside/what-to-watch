import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import filmProp from '../../pages/film/film.prop';
import VideoPlayer from '../../elements/video-player/video-player';
import {ActionCreator} from '../../../store/action';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const mapDispatchToProps = (dispatch) => ({
  onNameClick(genre) {
    dispatch(ActionCreator.setGenre(genre));
    dispatch(ActionCreator.getSimilarFilms());
  },
});

FilmCard.propTypes = {
  film: filmProp,
  onNameClick: PropTypes.func.isRequired,
};

export function FilmCard({film, onNameClick}) {
  const [isActive, setActive] = useState(false);

  function handleFilmCardEnter() {
    setActive(true);
  }

  function handleFilmCardLeave() {
    setActive(false);
  }

  function handleFilmClick() {
    onNameClick(film.genre);
  }

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleFilmCardEnter}
      onMouseLeave={handleFilmCardLeave}
    >
      <div className="small-film-card__image">
        <VideoPlayer film={film} isActive={isActive} />
      </div>

      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`/films/${film.id}`}
          onClick={handleFilmClick}
        >
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default connect(null, mapDispatchToProps)(FilmCard);
