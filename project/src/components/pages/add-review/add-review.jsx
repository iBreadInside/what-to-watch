import React from 'react';
import {Link, Redirect, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../../elements/logo/logo';
import HiddenSVG from '../../elements/hidden-svg/hidden-svg';
import UserBlock from '../../elements/user-block/user-block';
import filmProp from '../film/film.prop';
import ReviewForm from '../../elements/review-form/review-form';
import { AppRoute } from '../../../const';

AddReview.propTypes = {
  films: PropTypes.arrayOf(filmProp),
};

export default function AddReview({films}) {
  const params = useParams();
  const currentFilm = films.filter((film) => film.id === +params.id);

  if (!currentFilm) {
    return <Redirect to={AppRoute.NOT_FOUND} />;
  }

  const [{
    id,
    name,
    backgroundImage,
    posterImage,
  }] = currentFilm;

  return (
    <>
      <HiddenSVG />

      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo />

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <UserBlock />
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <ReviewForm />
        </div>

      </section>
    </>
  );
}
