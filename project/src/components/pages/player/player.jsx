import React, {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import HiddenSVG from '../../elements/hidden-svg/hidden-svg';
import {AppRoute} from '../../../const';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFilmById} from '../../../store/api-actions';
import {deleteCurrentFilmData} from '../../../store/actions';
import {getFilm, getIsFilmResponce} from '../../../store/film/selectors';
import LoadingScreen from '../../elements/loading-screen/loading.screen';

export default function Player() {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const watchingFilm = useSelector(getFilm);
  const isFilmResponsed = useSelector(getIsFilmResponce);

  useEffect(() => {
    dispatch(fetchFilmById(+params.id));

    return () => dispatch(deleteCurrentFilmData());
  }, [dispatch, params.id]);

  function handleExitBtn() {
    if (history.action !== 'POP') {
      return history.goBack();
    }

    history.push(AppRoute.MAIN);
  }

  if (!isFilmResponsed) {
    return <LoadingScreen />;
  }

  return (
    <>
      <HiddenSVG />

      <div className="player">
        <video src={watchingFilm.videoLink} className="player__video" poster="img/player-poster.jpg"></video>

        <button type="button" className="player__exit" onClick={handleExitBtn}>
          Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen">
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
