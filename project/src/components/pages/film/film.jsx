import React from 'react';
import PropTypes from 'prop-types';
import {Link, useParams} from 'react-router-dom';
import {FilmListLenght} from '../../../const';
import filmProp from './film.prop';
import FilmList from '../../elements/film-list/film-list';
import Logo from '../../elements/logo/logo';
import HiddenSVG from '../../elements/hidden-svg/hidden-svg';
import MyListBtn from '../../elements/my-list-btn/my-list-btn';
import PageFooter from '../../elements/page-footer/page-footer';
import PlayBtn from '../../elements/play-btn/play-btn';
import UserBlock from '../../elements/user-block/user-block';
import Tabs from '../../elements/tabs/tabs';
import commentProp from '../../elements/comment/comment.prop';

Film.propTypes = {
  films: PropTypes.arrayOf(filmProp),
  comments: PropTypes.arrayOf(commentProp),
};

export default function Film({films, comments}) {
  const params = useParams();

  const [currentFilm] = films.filter((film) => film.id === +params.id);
  const {
    id,
    name,
    genre,
    posterImage,
    backgroundImage,
    released,
  } = currentFilm;

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
                <MyListBtn />
                <Link className="btn film-card__button" to={`/films/${id}/review`}>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            <Tabs film={currentFilm} comments={comments} />
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
