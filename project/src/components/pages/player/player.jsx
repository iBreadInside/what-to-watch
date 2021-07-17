import React, {useEffect, useRef, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import HiddenSVG from '../../elements/hidden-svg/hidden-svg';
import {AppRoute} from '../../../const';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFilmById} from '../../../store/api-actions';
import {deleteCurrentFilmData} from '../../../store/actions';
import {getFilm, getIsFilmResponce} from '../../../store/film/selectors';
import LoadingScreen from '../../elements/loading-screen/loading.screen';

const MAX_PROGRESS = 100;

const ticker = (cb, ms = 1000, count = Infinity) => {
  let tickCount = 0;
  let cancelled = false;

  const tick = () => {
    tickCount += 1;

    if (tickCount === count || cancelled) {
      clearTimeout(id);
      return;
    }

    cb();

    id = setTimeout(tick, ms);
  };

  const cancelTicker = () => {
    cancelled = true;
  };

  let id = setTimeout(tick, ms);

  return cancelTicker;
};

const formatTime = (minutes) => {
  const date = new Date(minutes * 1000);

  return date.toISOString().substr(11, 8);
};

export default function Player() {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const watchingFilm = useSelector(getFilm);
  const isFilmResponsed = useSelector(getIsFilmResponce);
  const videoRef = useRef();
  const [isPlaying, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    dispatch(fetchFilmById(+params.id));

    return () => dispatch(deleteCurrentFilmData());
  }, [dispatch, params.id]);

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState === 4) {
      setTime(videoRef.current.duration);
    }
  }, [videoRef.current]);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const clearTicker = ticker(handleTick);

    return () => {
      clearTicker();
    };
  }, [isPlaying]);

  function handleExitBtn() {
    if (history.action !== 'POP') {
      return history.goBack();
    }

    history.push(AppRoute.MAIN);
  }

  const handlePlayToggle = () => {
    if (!isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }

    setPlaying((prev) => !prev);
  };

  const handleFullScreenClick = () => {
    videoRef.current.requestFullscreen();
  };

  const handleTick = () => {
    if (videoRef.current && videoRef.current.readyState === 4) {
      setProgress((videoRef.current.currentTime * 100) / videoRef.current.duration);
    }
  };

  const handleProgressClick = (evt) => {
    if (videoRef.current && videoRef.current.readyState === 4) {
      const progressWidth = evt.target.offsetWidth;
      const togglerWidth = evt.target.parentElement.querySelector('.player__toggler').offsetWidth;
      const posX = evt.clientX - togglerWidth - togglerWidth / 2;
      const progressPosition = (posX * 100) / progressWidth;

      setProgress(progressPosition);
      videoRef.current.currentTime = (progressPosition * videoRef.current.duration) / 100;
    }
  };

  if (!isFilmResponsed) {
    return <LoadingScreen />;
  }

  return (
    <>
      <HiddenSVG />

      <div className="player">
        <video
          src={watchingFilm.videoLink}
          className="player__video"
          poster={watchingFilm.backgroundImage}
          autoPlay={isPlaying}
          ref={videoRef}
        >
        </video>

        <button
          type="button"
          className="player__exit"
          onClick={handleExitBtn}
        >
          Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress
                className="player__progress"
                value={progress}
                max={MAX_PROGRESS}
                onClick={handleProgressClick}
              >
              </progress>
              <div
                className="player__toggler"
                style={{left: `${progress}%`}}
              >
                Toggler
              </div>
            </div>
            <div className="player__time-value">
              {time && formatTime(time - (videoRef.current?.currentTime ?? 0))}
            </div>
          </div>

          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={handlePlayToggle}
            >
              {isPlaying ? (
                <>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </>
              )}
            </button>
            <div className="player__name">{watchingFilm.name}</div>

            <button
              type="button"
              className="player__full-screen"
              onClick={handleFullScreenClick}
            >
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
