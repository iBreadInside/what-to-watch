import React from 'react';
import PropTypes from 'prop-types';
import {Link, useParams} from 'react-router-dom';
import {FilmListLenght} from '../../../const';
import filmProp from './film.prop';
import FilmList from '../../elements/film-list/film-list';
import HeaderLogo from '../../elements/header-logo/header-logo';
import HiddenSVG from '../../elements/hidden-svg/hidden-svg';
import MyListBtn from '../../elements/my-list-btn/my-list-btn';
import PageFooter from '../../elements/page-footer/page-footer';
import PlayBtn from '../../elements/play-btn/play-btn';
import UserBlock from '../../elements/user-block/user-block';

const FILM_GRADES = [
  ['Bad', [0, 3]],
  ['Normal', [3, 5]],
  ['Good', [5, 8]],
  ['Very good', [8, 10]],
  ['Awesome', [10, Infinity]],
];

Film.propTypes = {
  films: PropTypes.arrayOf(filmProp),
};

export default function Film({films}) {
  const params = useParams();

  const [currentFilm] = films.filter((film) => film.id === +params.id);
  const {
    name,
    description,
    director,
    starring,
    genre,
    posterImage,
    backgroundImage,
    released,
    rating,
    scoresCount,
  } = currentFilm;
  const [filmLevel] = FILM_GRADES.find(([, grade]) => (rating >= grade[0] && rating < grade[1]));
  const starringText = starring.length > 4
    ? `${starring.slice(0, 4).join(', ')} and others`
    : starring.join(', ');
  const similarFilms = films.slice(0, FilmListLenght.SIMILAR);

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
            <HeaderLogo />

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
                <MyListBtn />
                <Link className="btn film-card__button" to={`/films/${currentFilm.id}/review`}>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{filmLevel}</span>
                  <span className="film-rating__count">{scoresCount}</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{description}</p>

                <p className="film-card__director"><strong>Director: {director}</strong></p>

                <p className="film-card__starring"><strong>Starring: {starringText}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={similarFilms} />
        </section>

        <PageFooter />
      </div>
    </>
  );
}
