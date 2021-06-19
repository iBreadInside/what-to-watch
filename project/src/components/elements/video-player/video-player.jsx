import React, {useRef} from 'react';
import filmProp from '../../pages/film/film.prop';

const PLAYER_TIMEOUT = 1000;

VideoPlayer.propTypes = {
  film: filmProp,
};

export default function VideoPlayer({film}) {
  const videoRef = useRef();

  let isActive = false;

  function playVideo() {
    isActive && videoRef.current.play();
  }

  function handleFilmCardEnter() {
    isActive = true;
    videoRef.current.src = film.previewVideoLink;
    setTimeout(playVideo, PLAYER_TIMEOUT);
    // videoRef.current.play();
  }

  function handleFilmCardLeave() {
    isActive = false;
    videoRef.current.src = null;
  }

  return (
    <div
      className="small-film-card__image"
      onMouseEnter={handleFilmCardEnter}
      onMouseLeave={handleFilmCardLeave}
    >
      <video
        ref={videoRef}
        poster={film.previewImage}
        width="280"
        height="175"
        muted
      />
    </div>
  );
}
