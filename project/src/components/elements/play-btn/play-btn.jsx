import React from 'react';
import {useHistory} from 'react-router-dom';
import filmProp from '../../pages/film/film.prop';

PlayBtn.propTypes = {
  film: filmProp,
};

export default function PlayBtn({film}) {
  const history = useHistory();

  const handlePlayBtn = () => {
    history.push({
      pathname: `/player/${film.id}`,
      state: {film},
    });
  };

  return (
    <button
      className="btn btn--play film-card__button"
      type="button"
      onClick={handlePlayBtn}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}