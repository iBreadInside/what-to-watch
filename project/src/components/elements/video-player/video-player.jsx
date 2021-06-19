import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import filmProp from '../../pages/film/film.prop';

const PLAYER_TIMEOUT = 1000;

VideoPlayer.propTypes = {
  film: filmProp,
  isActive: PropTypes.bool.isRequired,
};

export default function VideoPlayer({film, isActive}) {
  const videoRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      isActive && videoRef.current.play();
    }, PLAYER_TIMEOUT);

    return () => {
      clearTimeout(timer);
    };
  }, [isActive]);

  return (
    isActive
      ? <video src={film.previewVideoLink} ref={videoRef} width={280} height={175} poster={film.previewImage} muted />
      : <img src={film.previewImage} alt={film.name} width={280} height={175} />
  );
}
