import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import Logo from '../../elements/logo/logo';
import HiddenSVG from '../../elements/hidden-svg/hidden-svg';
import MyListBtn from '../../elements/my-list-btn/my-list-btn';
import PageFooter from '../../elements/page-footer/page-footer';
import PlayBtn from '../../elements/play-btn/play-btn';
import UserBlock from '../../elements/user-block/user-block';
import Tabs from '../../elements/tabs/tabs';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFilmById, fetchReviews, fetchSimilarFilms} from '../../../store/api-actions';
import {APIRoute, AuthorizationStatus, FilmsShown, PosterType} from '../../../const';
import LoadingScreen from '../../elements/loading-screen/loading.screen';
import FilmList from '../../elements/film-list/film-list';
import {deleteCurrentFilmData} from '../../../store/actions';
import {getFilm, getIsFilmResponce, getSimilarFilms} from '../../../store/film/selectors';
import {getAuthStatus} from '../../../store/user/selectors';
import {FilmPoster} from '../../elements/film-poster/film-poster';

export default function Film() {
  const params = useParams();
  const dispatch = useDispatch();
  const currentFilm = useSelector(getFilm);
  const similarFilms = useSelector(getSimilarFilms);
  const isFilmResponsed = useSelector(getIsFilmResponce);
  const authStatus = useSelector(getAuthStatus);

  useEffect(() => {
    dispatch(fetchFilmById(params.id));
    dispatch(fetchReviews(params.id));
    dispatch(fetchSimilarFilms(params.id));

    return () => dispatch(deleteCurrentFilmData());
  }, [dispatch, params.id]);

  if (!isFilmResponsed) {
    return <LoadingScreen />;
  }

  const {
    id,
    name,
    genre,
    backgroundImage,
    released,
  } = currentFilm;

  return (
    <>
      <HiddenSVG />

      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayBtn film={currentFilm} />
                <MyListBtn film={currentFilm} />
                {authStatus === AuthorizationStatus.AUTH &&
                <Link
                  className="btn film-card__button"
                  to={`${APIRoute.FILMS}/${id}${APIRoute.ADD_REVIEW}`}
                >
                  Add review
                </Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmPoster film={currentFilm} posterType={PosterType.BIG} />

            <Tabs />
          </div>
        </div>
      </section>

      <div className="page-content">
        {similarFilms.length > 0 &&
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <FilmList
              filmList={similarFilms}
              listInitialLength={FilmsShown.SIMILAR}
            />
          </section>}
        <PageFooter />
      </div>
    </>
  );
}
