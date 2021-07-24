import React, {useEffect, useRef, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import HiddenSVG from '../../elements/hidden-svg/hidden-svg';
import {AppRoute} from '../../../const';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFilmById} from '../../../store/api-actions';
import {deleteCurrentFilmData} from '../../../store/actions';
import {getFilm, getIsFilmResponce} from '../../../store/film/selectors';
import LoadingScreen from '../../elements/loading-screen/loading-screen';
import Spinner from '../../elements/spinner/spinner';

const MAX_PROGRESS = 100;

const getTimeVideo = (duration, currentTime) => {
  const elapsedTime = Math.floor(duration - currentTime);

  const hours = String(Math.floor(elapsedTime / 60 / 60)).padStart(2, '0');
  const minutes = String(Math.floor(elapsedTime / 60) - (hours * 60)).padStart(2, '0');
  const seconds = String(elapsedTime % 60).padStart(2, '0');

  return elapsedTime > 3600 ? `${hours}:${minutes}:${seconds}`: `${minutes}:${seconds}`;
};

export default function Player() {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const watchingFilm = useSelector(getFilm);
  const isFilmResponsed = useSelector(getIsFilmResponce);

  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const togglerRef = useRef(null);

  const [isPlaying, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [playerElapsedTime, setPlayerElapsedTime] = useState('00:00');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchFilmById(+params.id));

    return () => dispatch(deleteCurrentFilmData());
  }, [dispatch, params.id]);

  function handleDataLoaded() {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }

  function handleExitBtnClick() {
    if (history.action !== 'POP') {
      return history.goBack();
    }

    history.push(AppRoute.MAIN);
  }

  function handlePlayToggle() {
    if (!isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }

    setPlaying((prev) => !prev);
  }

  function handleFullScreenClick() {
    videoRef.current.requestFullscreen();
  }

  function handleProgressClick(evt) {
    if (videoRef.current && videoRef.current.readyState === 4) {
      const progressWidth = evt.target.offsetWidth;
      const togglerWidth = evt.target.parentElement.querySelector('.player__toggler').offsetWidth;
      const posX = evt.clientX - togglerWidth - togglerWidth / 2;
      const progressPosition = (posX * 100) / progressWidth;

      setProgress(progressPosition);
      videoRef.current.currentTime = (progressPosition * videoRef.current.duration) / 100;
    }
  }

  function handleProgressBarUpdate() {
    const video = videoRef.current;
    const videoCurrentTime = videoRef.current.currentTime;
    const videoDuration = videoRef.current.duration;
    progressBarRef.current.value = video ? ((videoCurrentTime / videoDuration) * 100) : 0;
    togglerRef.current.style.left = `${video ? ((videoCurrentTime / videoDuration) * 100) : 0}%`;
    setPlayerElapsedTime(getTimeVideo(videoDuration, videoCurrentTime));
  }

  if (!isFilmResponsed) {
    return <LoadingScreen />;
  }

  return (
    <>
      <HiddenSVG />

      <div className="player">
        {!isLoaded && <Spinner />}
        <video
          src={watchingFilm.videoLink}
          className="player__video"
          poster={watchingFilm.backgroundImage}
          autoPlay={isPlaying}
          ref={videoRef}
          onLoadedData={handleDataLoaded}
          onTimeUpdate={handleProgressBarUpdate}
        >
        </video>

        <button
          type="button"
          className="player__exit"
          onClick={handleExitBtnClick}
        >
          Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress
                className="player__progress"
                ref={progressBarRef}
                value={progress}
                max={MAX_PROGRESS}
                onClick={handleProgressClick}
              >
              </progress>
              <div
                className="player__toggler"
                style={{left: `${progress}%`}}
                ref={togglerRef}
              >
                Toggler
              </div>
            </div>
            <div className="player__time-value">
              {playerElapsedTime}
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
