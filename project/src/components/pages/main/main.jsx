import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FilmList from '../../elements/film-list/film-list';
import HiddenSVG from '../../elements/hidden-svg/hidden-svg';
import MyListBtn from '../../elements/my-list-btn/my-list-btn';
import PageFooter from '../../elements/page-footer/page-footer';
import PlayBtn from '../../elements/play-btn/play-btn';
import Logo from '../../elements/logo/logo';
import UserBlock from '../../elements/user-block/user-block';
import GenreList from '../../elements/genre-list/genre-list';
import {FilmsShown, INITIAL_GENRE} from '../../../const';
import {getAllFilms, getCurrentGenre, getPromoFilm} from '../../../store/main/selectors';
import {resetMainPage} from '../../../store/actions';
import {FilmPoster} from '../../elements/film-poster/film-poster';

export default function Main() {
  const dispatch = useDispatch();
  const currentGenre = useSelector(getCurrentGenre);
  const allFilmList = useSelector(getAllFilms);
  const promo = useSelector(getPromoFilm);

  useEffect(() => {
    dispatch(resetMainPage);
  }, [dispatch]);

  const filmsByGenre = (currentGenre === INITIAL_GENRE)
    ? allFilmList
    : allFilmList.filter((film) => film.genre === currentGenre);

  const {
    backgroundImage,
    name,
    genre,
    released,
  } = promo;

  return (
    <>
      <HiddenSVG />
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <FilmPoster film={promo} />

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayBtn film={promo}/>
                <MyListBtn />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <GenreList />
          </ul>

          <FilmList filmList={filmsByGenre} listInitialLength={FilmsShown.MAIN} />
        </section>

        <PageFooter />
      </div>
    </>
  );
}

